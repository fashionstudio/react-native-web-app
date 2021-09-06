import React from "react";
import { WebViewProps } from "react-native-webview";

import { INJECTED_JS } from "../../helpers/constants";
import { TCustomEvent, TOnPushRegistered } from "../../types";

// TODO: Extend from IAppProps instead of copy/pasting
export interface CustomWebViewProps {
	/** The url to load */
	webviewUrl: string;

	/** Payment url */
	paymentUrl: string;

	/** Custom injected javascript when the site is loading */
	customJSInjection: string;

	/** Change the webview url */
	setWebviewUrl: React.Dispatch<React.SetStateAction<string>>

	/** Force webview reload */
	reloadWebView(enableApplePay: boolean): void;

	/** Should apple pay be enabled */
	applePayEnabled: boolean;

	// EVENTS
	onPushRegistered: TOnPushRegistered;

	customEvents: TCustomEvent[];
	onCustomEvent: (event: TCustomEvent, data: any) => void;
}

/** Same props used for the android and ios webview */
export const sharedWebViewProps = (customJSInjection: string): Partial<WebViewProps> =>
	({
		allowsInlineMediaPlayback: true,
		allowsBackForwardNavigationGestures: true,
		pullToRefreshEnabled: true,
		domStorageEnabled: true,
		autoManageStatusBarEnabled: false,
		injectedJavaScript: INJECTED_JS + customJSInjection,
	});
