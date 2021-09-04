import * as React from "react";
import { BackHandler, View, RefreshControl, ScrollView, } from "react-native";
import { WebView as RNWebView, } from "react-native-webview";
import { Loading } from "../Loading";
import { EVENTS_FROM_WEB } from "../../helpers/types";
import { sharedWebViewProps, globalWebViewMessageHandler, } from "./shared";
const SCROLLVIEW_CONTAINER = {
    flex: 1,
};
/** Creates a webview styled with a dynamic height */
const WEBVIEW = (height) => ({
    width: "100%",
    height,
});
export default class CustomWebView extends React.Component {
    webView = React.createRef();
    state = {
        isPullToRefreshEnabled: false,
        scrollViewHeight: 0,
        canGoBack: false,
        loading: true,
    };
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }
    onRefresh = () => this.webView.current?.reload();
    onWebViewMessage = async (e) => {
        const nativeEvent = await globalWebViewMessageHandler(this.props.onUserLoggedIn)(e);
        switch (nativeEvent.event) {
            case EVENTS_FROM_WEB.SCROLL:
                this.setState({ isPullToRefreshEnabled: nativeEvent.scrollTop === 0 });
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
    onNavigationStateChange = (navState) => {
        this.setState({
            canGoBack: navState.canGoBack,
        });
        this.props.setWebviewUrl(navState.url);
    };
    render() {
        const { scrollViewHeight, isPullToRefreshEnabled, loading } = this.state;
        const { webviewUrl, customJSInjection } = this.props;
        return (<View style={{ flex: 1 }}>
				{loading && <Loading />}
				<ScrollView style={SCROLLVIEW_CONTAINER} onLayout={(e) => this.setState({
                scrollViewHeight: e.nativeEvent.layout.height,
            })} refreshControl={(<RefreshControl refreshing={false} enabled={isPullToRefreshEnabled} onRefresh={this.onRefresh} tintColor="transparent" colors={["transparent"]} style={{ backgroundColor: "transparent" }}/>)}>
					<RNWebView source={{ uri: webviewUrl }} ref={this.webView} style={WEBVIEW(scrollViewHeight)} onMessage={this.onWebViewMessage} onNavigationStateChange={this.onNavigationStateChange} onLoadStart={() => { this.setState({ loading: true }); }} onLoadEnd={() => this.setState({ loading: false })} {...sharedWebViewProps(customJSInjection)}/>
				</ScrollView>
			</View>);
    }
}
