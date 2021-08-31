"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INJECTED_JS = void 0;
const types_1 = require("./types");
exports.INJECTED_JS = `
    const is_webview = true;
    
    window.onscroll = () => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                event: "${types_1.EVENTS_FROM_WEB.SCROLL}",
                scrollTop: document.documentElement.scrollTop || document.body.scrollTop
            }),     
        )
    }
`;
