import React from "react";
import { WebViewMessageEvent, WebViewProps } from "react-native-webview";
import { IEvent } from "../../helpers/types";
export interface CustomWebViewProps {
    /** The url to load */
    webviewUrl: string;
    /** Api url */
    apiUrl: string;
    /** Payment url */
    paymentUrl: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection: string;
    /** Change the webview url */
    setWebviewUrl: React.Dispatch<React.SetStateAction<string>>;
    /** Force webview reload */
    reloadWebView(enableApplePay: boolean): void;
    /** Should apple pay be enabled */
    applePayEnabled: boolean;
}
/** Same props used for the android and ios webview */
export declare const sharedWebViewProps: (customJSInjection: string) => Partial<WebViewProps>;
export declare const globalWebViewMessageHandler: (apiUrl: string) => (e: WebViewMessageEvent) => Promise<IEvent>;
