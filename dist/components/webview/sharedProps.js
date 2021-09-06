import { INJECTED_JS } from "../../helpers/constants";
/** Same props used for the android and ios webview */
export const sharedWebViewProps = (customJSInjection) => ({
    allowsInlineMediaPlayback: true,
    allowsBackForwardNavigationGestures: true,
    pullToRefreshEnabled: true,
    domStorageEnabled: true,
    autoManageStatusBarEnabled: false,
    injectedJavaScript: INJECTED_JS + customJSInjection,
});
