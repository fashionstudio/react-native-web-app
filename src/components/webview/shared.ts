import React from "react";
import { WebViewMessageEvent, WebViewProps } from "react-native-webview";

import { INJECTED_JS } from "../../helpers/constants";
import { handleRegisterPush } from "../../helpers/events";
import { EVENTS_FROM_WEB, IEvent } from "../../helpers/types";

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
    setWebviewUrl: React.Dispatch<React.SetStateAction<string>>

    /** Force webview reload */
    reloadWebView(enableApplePay: boolean): void;

    /** Should apple pay be enabled */
    applePayEnabled: boolean;
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

export const globalWebViewMessageHandler = (apiUrl: string) =>
	async (e: WebViewMessageEvent): Promise<IEvent> => {
		const { event, ...data }: IEvent = JSON.parse(e.nativeEvent?.data);

		switch (event) {
			case EVENTS_FROM_WEB.GET_PUSH:
				await handleRegisterPush(apiUrl)(data.user_id);
				break;
			default:
		}

		return { event, ...data };
	};
