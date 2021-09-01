import { EVENTS_FROM_WEB } from "./types";
export const INJECTED_JS = `
    const is_webview = true;
    
    window.onscroll = () => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                event: "${EVENTS_FROM_WEB.SCROLL}",
                scrollTop: document.documentElement.scrollTop || document.body.scrollTop
            }),     
        )
    }
`;
