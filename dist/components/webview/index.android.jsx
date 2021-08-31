"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const Loading_1 = require("../Loading");
const types_1 = require("../../helpers/types");
const shared_1 = require("./shared");
const SCROLLVIEW_CONTAINER = {
    flex: 1,
};
/** Creates a webview styled with a dynamic height */
const WEBVIEW = (height) => ({
    width: "100%",
    height,
});
class CustomWebView extends React.Component {
    constructor() {
        super(...arguments);
        this.webView = React.createRef();
        this.state = {
            isPullToRefreshEnabled: false,
            scrollViewHeight: 0,
            canGoBack: false,
            loading: true,
        };
        this.onRefresh = () => this.webView.current?.reload();
        this.onWebViewMessage = async (e) => {
            const { event, ...data } = await shared_1.globalWebViewMessageHandler(this.props.apiUrl)(e);
            switch (event) {
                case types_1.EVENTS_FROM_WEB.SCROLL:
                    this.setState({ isPullToRefreshEnabled: data.scrollTop === 0 });
                    break;
                default:
            }
        };
        this.handleBackButton = () => {
            if (this.state.canGoBack) {
                this.webView.current?.goBack();
                return true;
            }
        };
        this.onNavigationStateChange = (navState) => {
            this.setState({
                canGoBack: navState.canGoBack,
            });
            this.props.setWebviewUrl(navState.url);
        };
    }
    componentDidMount() {
        react_native_1.BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }
    render() {
        const { scrollViewHeight, isPullToRefreshEnabled, loading } = this.state;
        const { webviewUrl, customJSInjection } = this.props;
        return (<react_native_1.View style={{ flex: 1 }}>
				{loading && <Loading_1.Loading />}
				<react_native_1.ScrollView style={SCROLLVIEW_CONTAINER} onLayout={(e) => this.setState({
            scrollViewHeight: e.nativeEvent.layout.height,
        })} refreshControl={(<react_native_1.RefreshControl refreshing={false} enabled={isPullToRefreshEnabled} onRefresh={this.onRefresh} tintColor="transparent" colors={["transparent"]} style={{ backgroundColor: "transparent" }}/>)}>
					<react_native_webview_1.WebView source={{ uri: webviewUrl }} ref={this.webView} style={WEBVIEW(scrollViewHeight)} onMessage={this.onWebViewMessage} onNavigationStateChange={this.onNavigationStateChange} onLoadStart={() => { this.setState({ loading: true }); }} onLoadEnd={() => this.setState({ loading: false })} {...shared_1.sharedWebViewProps(customJSInjection)}/>
				</react_native_1.ScrollView>
			</react_native_1.View>);
    }
}
exports.default = CustomWebView;
