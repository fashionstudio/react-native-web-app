import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";
import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import CustomWebView from "./components/webview/index.android";
export const Main = ({ siteUrl, apiUrl = "", paymentUrl = "sberbank.ru", fontName = "custom", customJSInjection = "", }) => {
    const [loading, setLoading] = useState(true);
    const [webviewUrl, setWebviewUrl] = useState(siteUrl);
    const [applePayEnabled, setApplePayEnabled] = useState(false);
    const isConnected = useIsConnected();
    const reloadWebView = (enableApplePay) => {
        console.log("reloading the webview. enable apple pay ?", enableApplePay);
        setLoading(true);
        setApplePayEnabled(enableApplePay);
        setTimeout(() => setLoading(false), 500);
    };
    useEffect(() => {
        setLoading(false);
    }, []);
    if (loading)
        return <Loading />;
    if (!isConnected)
        return <NoInternet fontFamily={fontName}/>;
    return (<CustomWebView webviewUrl={webviewUrl} apiUrl={apiUrl} paymentUrl={paymentUrl} setWebviewUrl={setWebviewUrl} reloadWebView={reloadWebView} applePayEnabled={applePayEnabled} customJSInjection={customJSInjection}/>);
};
export default Main;
