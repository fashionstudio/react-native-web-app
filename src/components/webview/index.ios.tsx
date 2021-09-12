import React, {
	useState, useEffect, useRef, useContext,
} from "react";
import { View } from "react-native";
import { WebView as RNWebView } from "react-native-webview";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

import { Loading } from "../Loading";

import { globalWebViewMessageHandler } from "../../helpers/webviewCommunication";
import { StructureContext } from "../../helpers/context";

import {
	sharedWebViewProps,
	ICustomWebViewProps,
} from "./sharedProps";

const CustomWebView: React.FC<ICustomWebViewProps> = ({
	webviewUrl,
	setWebviewUrl,
	reloadWebView,
	applePayEnabled,
}) => {
	const {
		customJSInjection,
		customEvents,
		paymentPattern,
		onCustomEvent,
	} = useContext(StructureContext);

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
							enableApplePay={applePayEnabled}
							thirdPartyCookiesEnabled={!wantsPrivacy}
							onMessage={globalWebViewMessageHandler(customEvents!, onCustomEvent!)}
							onLoadStart={({ nativeEvent: { url, navigationType } }) => {
								setWebViewLoading(true);

								// don't save url when user is submitting form
								if (navigationType === "formsubmit" || navigationType === "formresubmit")
									return;

								setWebviewUrl(url);

								const isPaymentStep: boolean = paymentPattern instanceof RegExp
									? paymentPattern.test(url)
									: url.includes(paymentPattern!);

								// enable apple pay on payment step
								if (isPaymentStep && !applePayEnabled)
									reloadWebView(true);

								// disable apple pay when not on payment step
								if (!isPaymentStep && applePayEnabled)
									reloadWebView(false);
							}}
							onLoadEnd={() =>
								setWebViewLoading(false)}
							{...sharedWebViewProps(customJSInjection!, wantsPrivacy)}
						/>
					</>
				)}
		</View>

	);
};

export default CustomWebView;
