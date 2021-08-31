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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importStar(require("react"));
const react_native_offline_1 = require("react-native-offline");
const Loading_1 = require("./components/Loading");
const NoInternet_1 = __importDefault(require("./components/NoInternet"));
const index_android_1 = __importDefault(require("./components/webview/index.android"));
exports.Main = ({ siteUrl, apiUrl = "", fontName = "custom", customJSInjection = "", }) => {
    const [loading, setLoading] = react_1.useState(true);
    const [webviewUrl, setWebviewUrl] = react_1.useState(siteUrl);
    const [applePayEnabled, setApplePayEnabled] = react_1.useState(false);
    const isConnected = react_native_offline_1.useIsConnected();
    const reloadWebView = (enableApplePay) => {
        setLoading(true);
        setApplePayEnabled(enableApplePay);
        setTimeout(() => setLoading(false), 250);
    };
    react_1.useEffect(() => {
        setLoading(false);
    }, []);
    if (loading)
        return <Loading_1.Loading />;
    if (!isConnected)
        return <NoInternet_1.default fontFamily={fontName}/>;
    return (<index_android_1.default webviewUrl={webviewUrl} apiUrl={apiUrl} setWebviewUrl={setWebviewUrl} reloadWebView={reloadWebView} applePayEnabled={applePayEnabled} customJSInjection={customJSInjection}/>);
};
exports.default = exports.Main;
