import React from "react";
import { WebViewProps } from "react-native-webview";

import { INJECTED_JS } from "../../helpers/constants";

export interface ICustomWebViewProps {
	/** The url to load */
	webviewUrl: string;

	/** Change the webview url */
	setWebviewUrl: React.Dispatch<React.SetStateAction<string>>

	/** Force webview reload */
	reloadWebView(enableApplePay: boolean): void;

	/** Should apple pay be enabled */
	applePayEnabled: boolean;
}

/**
 * Shared props passed for the android and ios webview
 * @param customJSInjection Custom JS code when website loads
 * @param wantsPrivacy Whether or not the user enabled tracking
 * @returns Props
 */
export const sharedWebViewProps = (customJSInjection: string, wantsPrivacy: boolean): Partial<WebViewProps> =>
	({
		allowsInlineMediaPlayback: true,
		allowsBackForwardNavigationGestures: true,
		pullToRefreshEnabled: true,
		domStorageEnabled: true,
		autoManageStatusBarEnabled: false,
		injectedJavaScript: `
			${INJECTED_JS}
			${customJSInjection}
			const wantsPrivacy = ${wantsPrivacy};
		`,
	});
