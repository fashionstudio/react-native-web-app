import React, { useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";
import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import { handlePushRegistration } from "./helpers/events";
// eslint-disable-next-line import/order, import/no-unresolved, import/no-useless-path-segments
const CustomWebView = require("./components/webview").default;
export const Main = ({ siteUrl, paymentUrl = "sberbank.ru", fontName = "custom", customJSInjection = "", requestNotificationPermission = false, onPushRegistered = () => { }, customEvents = [], onCustomEvent = () => { }, }) => {
    // TODO: move everything to context to prevent props passing
    const [loading, setLoading] = useState(true);
    const [webviewUrl, setWebviewUrl] = useState(siteUrl);
    const [applePayEnabled, setApplePayEnabled] = useState(false);
    const isConnected = useIsConnected();
    const reloadWebView = (enableApplePay) => {
        setLoading(true);
        setApplePayEnabled(enableApplePay);
        setTimeout(() => setLoading(false), 250);
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
        return <NoInternet fontFamily={fontName}/>;
    return (<CustomWebView webviewUrl={webviewUrl} paymentUrl={paymentUrl} setWebviewUrl={setWebviewUrl} reloadWebView={reloadWebView} applePayEnabled={applePayEnabled} customJSInjection={customJSInjection} onPushRegistered={onPushRegistered} customEvents={customEvents} onCustomEvent={onCustomEvent}/>);
};
export default Main;
