import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";

import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import CustomWebView from "./components/webview/index.android";

interface Props {
	/** Website url */
	siteUrl: string;

	/** Api url to save the push notification token */
	apiUrl?: string;

	/** Custom fonts name */
	fontName?: string;

	/** Custom injected javascript when the site is loading */
	customJSInjection?: string;
}

/** Main App constructor */
export const App: React.FC<Props> = ({
	siteUrl,
	apiUrl = "",
	fontName = "custom",
	customJSInjection = "",
}) => {
	const [loading, setLoading] = useState(true);
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

	if (loading)
		return <Loading />;

	if (!isConnected)
		return <NoInternet fontFamily={fontName} />;

	return (
		<CustomWebView
			webviewUrl={webviewUrl}
			apiUrl={apiUrl}
			setWebviewUrl={setWebviewUrl}
			reloadWebView={reloadWebView}
			applePayEnabled={applePayEnabled}
			customJSInjection={customJSInjection}
		/>
	);
};

export default App;
