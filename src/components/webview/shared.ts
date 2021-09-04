import React from "react";
import { WebViewMessageEvent, WebViewProps } from "react-native-webview";

import { INJECTED_JS } from "../../helpers/constants";
import { EVENTS_FROM_WEB, IEvent } from "../../helpers/types";
import { TOnPushRegistered, TOnUserLoggedIn } from "../../types";

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
	onPushRegistered: TOnPushRegistered

	onUserLoggedIn: TOnUserLoggedIn
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

export const globalWebViewMessageHandler = (onUserLoggedIn: TOnUserLoggedIn) =>
	async (e: WebViewMessageEvent): Promise<IEvent> => {
		const nativeEvent: IEvent = JSON.parse(e.nativeEvent?.data);

		switch (nativeEvent.event) {
			case EVENTS_FROM_WEB.USER_LOGGED_IN:
				onUserLoggedIn(nativeEvent.user);
				break;
			default:
		}

		return nativeEvent;
	};
