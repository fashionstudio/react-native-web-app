import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { WebView as RNWebView } from "react-native-webview";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Loading } from "../Loading";
import { sharedWebViewProps, globalWebViewMessageHandler, } from "./shared";
const CustomWebView = ({ webviewUrl, setWebviewUrl, reloadWebView, applePayEnabled, customJSInjection, paymentUrl, onUserLoggedIn, }) => {
    const [webViewLoading, setWebViewLoading] = useState(true);
    const [wantsPrivacy, setPrivacyEnabled] = useState("loading");
    const WebViewRef = useRef(null);
    useEffect(() => {
        (async () => {
            const { granted } = await requestTrackingPermissionsAsync();
            setPrivacyEnabled(!granted);
        })();
    }, []);
    return (<View style={{ flex: 1 }}>
			{wantsPrivacy === "loading" ? <Loading />
        : (<>
						{webViewLoading && <Loading />}
						<RNWebView ref={WebViewRef} source={{ uri: webviewUrl }} enableApplePay={applePayEnabled} thirdPartyCookiesEnabled={!wantsPrivacy} onMessage={globalWebViewMessageHandler(onUserLoggedIn)} onLoadStart={({ nativeEvent: { url, navigationType } }) => {
            setWebViewLoading(true);
            // don't save url when user is submitting form
            if (navigationType === "formsubmit" || navigationType === "formresubmit")
                return;
            setWebviewUrl(url);
            const isPaymentStep = url.includes(paymentUrl);
            // enable apple pay on payment step
            if (isPaymentStep && !applePayEnabled)
                reloadWebView(true);
            // disable apple pay when not on payment step
            if (!isPaymentStep && applePayEnabled)
                reloadWebView(false);
        }} onLoadEnd={() => setWebViewLoading(false)} {...sharedWebViewProps(customJSInjection)}/>
					</>)}
		</View>);
};
export default CustomWebView;
