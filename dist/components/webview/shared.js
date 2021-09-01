import { INJECTED_JS } from "../../helpers/constants";
import { handleRegisterPush } from "../../helpers/events";
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
export const globalWebViewMessageHandler = (apiUrl) => async (e) => {
    const { event, ...data } = JSON.parse(e.nativeEvent?.data);
    switch (event) {
        case EVENTS_FROM_WEB.GET_PUSH:
            await handleRegisterPush(apiUrl)(data.user_id);
            break;
        default:
    }
    return { event, ...data };
};
