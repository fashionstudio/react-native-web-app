"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalWebViewMessageHandler = exports.sharedWebViewProps = void 0;
const constants_1 = require("../../helpers/constants");
const events_1 = require("../../helpers/events");
const types_1 = require("../../helpers/types");
/** Same props used for the android and ios webview */
exports.sharedWebViewProps = (customJSInjection) => ({
    allowsInlineMediaPlayback: true,
    allowsBackForwardNavigationGestures: true,
    pullToRefreshEnabled: true,
    domStorageEnabled: true,
    autoManageStatusBarEnabled: false,
    injectedJavaScript: constants_1.INJECTED_JS + customJSInjection,
});
exports.globalWebViewMessageHandler = (apiUrl) => async (e) => {
    const { event, ...data } = JSON.parse(e.nativeEvent?.data);
    switch (event) {
        case types_1.EVENTS_FROM_WEB.GET_PUSH:
            await events_1.handleRegisterPush(apiUrl)(data.user_id);
            break;
        default:
    }
    return { event, ...data };
};
