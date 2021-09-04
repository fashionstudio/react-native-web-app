import { INJECTED_JS } from "../../helpers/constants";
import { EVENTS_FROM_WEB } from "../../helpers/types";
/** Same props used for the android and ios webview */
export const sharedWebViewProps = (customJSInjection) => ({
    allowsInlineMediaPlayback: true,
    allowsBackForwardNavigationGestures: true,
    pullToRefreshEnabled: true,
    domStorageEnabled: true,
    autoManageStatusBarEnabled: false,
    injectedJavaScript: INJECTED_JS + customJSInjection,
});
export const globalWebViewMessageHandler = (onUserLoggedIn) => async (e) => {
    const nativeEvent = JSON.parse(e.nativeEvent?.data);
    switch (nativeEvent.event) {
        case EVENTS_FROM_WEB.USER_LOGGED_IN:
            onUserLoggedIn(nativeEvent.user);
            break;
        default:
    }
    return nativeEvent;
};
