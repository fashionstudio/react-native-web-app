import React, { useContext, useEffect, useState } from "react";
import { useIsConnected } from "react-native-offline";
import { Loading } from "./components/Loading";
import NoInternet from "./components/NoInternet";
import { handlePushRegistration } from "./helpers/events";
import { StructureContext } from "./helpers/context";
// eslint-disable-next-line import/order, import/no-unresolved, import/no-useless-path-segments
const CustomWebView = require("./components/webview").default;
export const Main = () => {
    const props = useContext(StructureContext);
    const [loading, setLoading] = useState(true);
    const [webviewUrl, setWebviewUrl] = useState(props.siteUrl);
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
        if (!props.requestNotificationPermission)
            return;
        handlePushRegistration(props.onPushRegistered);
    }, [props.requestNotificationPermission]);
    if (loading)
        return <Loading />;
    if (!isConnected)
        return <NoInternet />;
    return (<CustomWebView webviewUrl={webviewUrl} setWebviewUrl={setWebviewUrl} reloadWebView={reloadWebView} applePayEnabled={applePayEnabled}/>);
};
export default Main;
