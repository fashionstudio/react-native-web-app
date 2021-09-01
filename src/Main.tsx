import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";

import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import CustomWebView from "./components/webview/index.android";
import { IAppProps } from "./types";

export const Main: React.FC<IAppProps> = ({
	siteUrl,
	apiUrl = "",
	paymentUrl = "sberbank.ru",
	fontName = "custom",
	customJSInjection = "",
}) => {
	const [loading, setLoading] = useState(true);
	const [webviewUrl, setWebviewUrl] = useState<string>(siteUrl);
	const [applePayEnabled, setApplePayEnabled] = useState<boolean>(false);
	const isConnected = useIsConnected();

	const reloadWebView = (enableApplePay: boolean) => {
		console.log("reloading the webview. enable apple pay ?", enableApplePay);
		setLoading(true);
		setApplePayEnabled(enableApplePay);
		setTimeout(() =>
			setLoading(false), 500);
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	if (loading)
		return <Loading />;

	if (!isConnected)
		return <NoInternet fontFamily={fontName} />;

	return (
		<CustomWebView
			webviewUrl={webviewUrl}
			apiUrl={apiUrl}
			paymentUrl={paymentUrl}
			setWebviewUrl={setWebviewUrl}
			reloadWebView={reloadWebView}
			applePayEnabled={applePayEnabled}
			customJSInjection={customJSInjection}
		/>
	);
};

export default Main;
