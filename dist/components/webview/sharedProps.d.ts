import React from "react";
import { WebViewProps } from "react-native-webview";
export interface ICustomWebViewProps {
    /** The url to load */
    webviewUrl: string;
    /** Change the webview url */
    setWebviewUrl: React.Dispatch<React.SetStateAction<string>>;
    /** Force webview reload */
    reloadWebView(enableApplePay: boolean): void;
    /** Should apple pay be enabled */
    applePayEnabled: boolean;
}
/** Same props used for the android and ios webview */
export declare const sharedWebViewProps: (customJSInjection: string) => Partial<WebViewProps>;
