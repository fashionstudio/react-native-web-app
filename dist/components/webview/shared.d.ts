import React from "react";
import { WebViewMessageEvent, WebViewProps } from "react-native-webview";
import { IEvent } from "../../helpers/types";
import { TOnPushRegistered, TOnUserLoggedIn } from "../../types";
export interface CustomWebViewProps {
    /** The url to load */
    webviewUrl: string;
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
    onPushRegistered: TOnPushRegistered;
    onUserLoggedIn: TOnUserLoggedIn;
}
/** Same props used for the android and ios webview */
export declare const sharedWebViewProps: (customJSInjection: string) => Partial<WebViewProps>;
export declare const globalWebViewMessageHandler: (onUserLoggedIn: TOnUserLoggedIn) => (e: WebViewMessageEvent) => Promise<IEvent>;
