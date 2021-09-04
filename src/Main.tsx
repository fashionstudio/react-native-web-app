import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";

import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import { CustomWebViewProps } from "./components/webview/shared";

import { handlePushRegistration } from "./helpers/events";
import { IAppProps } from "./types";

// eslint-disable-next-line import/order, import/no-unresolved, import/no-useless-path-segments
const CustomWebView: React.FC<CustomWebViewProps> =	require("./components/webview").default;

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
		setLoading(true);
		setApplePayEnabled(enableApplePay);
		setTimeout(() =>
			setLoading(false), 250);
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
