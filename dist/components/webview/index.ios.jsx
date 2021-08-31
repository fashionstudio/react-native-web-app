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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const expo_tracking_transparency_1 = require("expo-tracking-transparency");
const Loading_1 = require("../Loading");
const shared_1 = require("./shared");
const CustomWebView = ({ webviewUrl, apiUrl, setWebviewUrl, reloadWebView, applePayEnabled, customJSInjection, }) => {
    const [webViewLoading, setWebViewLoading] = react_1.useState(true);
    const [wantsPrivacy, setPrivacyEnabled] = react_1.useState("loading");
    const WebViewRef = react_1.useRef(null);
    react_1.useEffect(() => {
        (async () => {
            const { granted } = await expo_tracking_transparency_1.requestTrackingPermissionsAsync();
            setPrivacyEnabled(!granted);
        })();
    }, []);
    return (<react_native_1.View style={{ flex: 1 }}>
			{wantsPrivacy === "loading" ? <Loading_1.Loading />
        : (<>
						{webViewLoading && <Loading_1.Loading />}
						<react_native_webview_1.WebView ref={WebViewRef} source={{ uri: webviewUrl }} enableApplePay={applePayEnabled} thirdPartyCookiesEnabled={!wantsPrivacy} onMessage={shared_1.globalWebViewMessageHandler(apiUrl)} onLoadStart={({ nativeEvent: { url, navigationType } }) => {
            setWebViewLoading(true);
            // don't save url when user is submitting form
            if (navigationType === "formsubmit"
                || navigationType === "formresubmit")
                return;
            setWebviewUrl(url);
            const isPaymentStep = url.includes("sberbank.ru");
            // enable apple pay on payment step
            if (isPaymentStep && !applePayEnabled)
                reloadWebView(true);
            // disable apple pay when not on payment step
            if (!isPaymentStep && applePayEnabled)
                reloadWebView(false);
        }} onLoadEnd={() => setWebViewLoading(false)} {...shared_1.sharedWebViewProps(customJSInjection)}/>
					</>)}
		</react_native_1.View>);
};
exports.default = CustomWebView;
