import React from "react";
import { WebViewProps } from "react-native-webview";
import { TCustomEvent, TOnPushRegistered } from "../../types";
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
    customEvents: TCustomEvent[];
    onCustomEvent: (event: TCustomEvent, data: any) => void;
}
/** Same props used for the android and ios webview */
export declare const sharedWebViewProps: (customJSInjection: string) => Partial<WebViewProps>;
