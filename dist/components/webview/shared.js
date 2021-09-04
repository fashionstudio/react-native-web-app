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
    /**
     * TODO: accept custom events
     *
     * @example
     * enum CustomEvents {
     *	USER_LOGGED_IN = 'USER_LOGGED_IN',
     *	USER_LOGGED_OUT = 'USER_LOGGED_OUT'
     * }
     * <AppStructure
     * 	customEvents={CustomEvents}
     * 	onCustomEvent={(event: CustomEvents) => {}}
     * />
     */
    return nativeEvent;
};
