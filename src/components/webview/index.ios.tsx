import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { WebView as RNWebView } from "react-native-webview";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

import { Loading } from "../Loading";
import {
	sharedWebViewProps,
	CustomWebViewProps,
	globalWebViewMessageHandler,
} from "./shared";

const CustomWebView: React.FC<CustomWebViewProps> = ({
	webviewUrl,
	apiUrl,
	setWebviewUrl,
	reloadWebView,
	applePayEnabled,
	customJSInjection,
	paymentUrl,
}) => {
	const [webViewLoading, setWebViewLoading] = useState<boolean>(true);
	const [wantsPrivacy, setPrivacyEnabled] = useState<boolean | "loading">("loading");

	const WebViewRef = useRef<RNWebView>(null);

	useEffect(() => {
		(async () => {
			const { granted } = await requestTrackingPermissionsAsync();
			setPrivacyEnabled(!granted);
		})();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			{wantsPrivacy === "loading" ? <Loading />
				: (
					<>
						{webViewLoading && <Loading />}
						<RNWebView
							ref={WebViewRef}
							source={{ uri: webviewUrl }}
							// TODO: enableApplePay={applePayEnabled}
							enableApplePay
							thirdPartyCookiesEnabled={!wantsPrivacy}
							onMessage={globalWebViewMessageHandler(apiUrl)}
							onLoadStart={({ nativeEvent: { url, navigationType } }) => {
								setWebViewLoading(true);

								// don't save url when user is submitting form
								if (navigationType === "formsubmit" || navigationType === "formresubmit")
									return;

								setWebviewUrl(url);

								const isPaymentStep: boolean = url.includes(paymentUrl);

								// enable apple pay on payment step
								if (isPaymentStep && !applePayEnabled)
									reloadWebView(true);

								// disable apple pay when not on payment step
								if (!isPaymentStep && applePayEnabled)
									reloadWebView(false);
							}}
							onLoadEnd={() =>
								setWebViewLoading(false)}
							{...sharedWebViewProps(customJSInjection)}
						/>
					</>
				)}
		</View>

	);
};

export default CustomWebView;
