import * as React from "react";
import {
	BackHandler, View, RefreshControl, ScrollView,
} from "react-native";
import {
	WebView as RNWebView,
	WebViewMessageEvent,
	WebViewNavigation,
} from "react-native-webview";

import { Loading } from "../Loading";

import { EVENTS_FROM_WEB } from "../../helpers/types";
import {
	sharedWebViewProps,
	CustomWebViewProps,
	globalWebViewMessageHandler,
} from "./shared";

const SCROLLVIEW_CONTAINER = {
	flex: 1,
};

/** Creates a webview styled with a dynamic height */
const WEBVIEW = (height: number) =>
	({
		width: "100%",
		height,
	});

interface State {
	/** If the user is swiping to refresh or not */
	isPullToRefreshEnabled: boolean,

	/** Page Height */
	scrollViewHeight: number,

	/** If there is a past history for the back btn */
	canGoBack: boolean,

	/** If the webview is loading */
	loading: boolean,
}

export default class CustomWebView extends React.Component<CustomWebViewProps, State> {
	webView = React.createRef<RNWebView>();

	state = {
		isPullToRefreshEnabled: false,
		scrollViewHeight: 0,
		canGoBack: false,
		loading: true,
	};

	componentDidMount() {
		BackHandler.addEventListener(
			"hardwareBackPress",
			this.handleBackButton,
		);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener(
			"hardwareBackPress",
			this.handleBackButton,
		);
	}

	onRefresh = () =>
		this.webView.current?.reload();

	onWebViewMessage = async (e: WebViewMessageEvent) => {
		const { event, ...data } = await globalWebViewMessageHandler(this.props.apiUrl)(e);

		switch (event) {
			case EVENTS_FROM_WEB.SCROLL:
				this.setState({ isPullToRefreshEnabled: data.scrollTop === 0 });
				break;
			default:
		}
	};

	handleBackButton = () => {
		if (this.state.canGoBack) {
			this.webView.current?.goBack();
			return true;
		}
	};

	onNavigationStateChange = (navState: WebViewNavigation) => {
		this.setState({
			canGoBack: navState.canGoBack,
		});
		this.props.setWebviewUrl(navState.url);
	};

	render() {
		const { scrollViewHeight, isPullToRefreshEnabled, loading } = this.state;

		return (
			<View style={{ flex: 1 }}>
				{loading && <Loading />}
				<ScrollView
					style={SCROLLVIEW_CONTAINER}
					onLayout={(e) =>
						this.setState({
							scrollViewHeight: e.nativeEvent.layout.height,
						})}
					refreshControl={(
						<RefreshControl
							refreshing={false}
							enabled={isPullToRefreshEnabled}
							onRefresh={this.onRefresh}
							tintColor="transparent"
							colors={["transparent"]}
							style={{ backgroundColor: "transparent" }}
						/>
					)}
				>
					<RNWebView
						source={{ uri: this.props.webviewUrl }}
						ref={this.webView}
						style={WEBVIEW(scrollViewHeight)}
						onMessage={this.onWebViewMessage}
						onNavigationStateChange={this.onNavigationStateChange}
						onLoadStart={() => { this.setState({ loading: true }); }}
						onLoadEnd={() =>
							this.setState({ loading: false })}
						{...sharedWebViewProps(this.props.customJSInjection)}
					/>
				</ScrollView>
			</View>
		);
	}
}
