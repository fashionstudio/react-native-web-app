import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";

import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import CustomWebView from "./components/webview/index.android";
import { handlePushRegistration } from "./helpers/events";
import { IAppProps } from "./types";

export const Main: React.FC<IAppProps> = ({
	siteUrl,
	paymentUrl = "sberbank.ru",
	fontName = "custom",
	customJSInjection = "",
	requestNotificationPermission = false,
	onPushRegistered = () => {},
	onUserLoggedIn = () => {},
}) => {
	// TODO: move everything to context to prevent props passing
	const [loading, setLoading] = useState<boolean>(true);
	const [webviewUrl, setWebviewUrl] = useState<string>(siteUrl);
	const [applePayEnabled, setApplePayEnabled] = useState<boolean>(false);
	const isConnected = useIsConnected();

	const reloadWebView = (enableApplePay: boolean) => {
		console.log("reloading the webview. enable apple pay ?", enableApplePay);
		setLoading(true);
		setApplePayEnabled(enableApplePay);
		setTimeout(() =>
			setLoading(false), 6000);
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	useEffect(() => {
		if (!requestNotificationPermission)
			return;

		handlePushRegistration(onPushRegistered);
	}, [requestNotificationPermission]);

	if (loading)
		return <Loading />;

	if (!isConnected)
		return <NoInternet fontFamily={fontName} />;

	return (
		<CustomWebView
			webviewUrl={webviewUrl}
			paymentUrl={paymentUrl}
			setWebviewUrl={setWebviewUrl}
			reloadWebView={reloadWebView}
			applePayEnabled={applePayEnabled}
			customJSInjection={customJSInjection}
			onPushRegistered={onPushRegistered}
			onUserLoggedIn={onUserLoggedIn}
		/>
	);
};

export default Main;
