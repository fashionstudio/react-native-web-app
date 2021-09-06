import * as React from "react";
import { WebView as RNWebView, WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import { CustomWebViewProps } from "./sharedProps";
interface State {
    /** If the user is swiping to refresh or not */
    isPullToRefreshEnabled: boolean;
    /** Page Height */
    scrollViewHeight: number;
    /** If there is a past history for the back btn */
    canGoBack: boolean;
    /** If the webview is loading */
    loading: boolean;
}
export default class CustomWebView extends React.Component<CustomWebViewProps, State> {
    webView: React.RefObject<RNWebView<{}>>;
    state: {
        isPullToRefreshEnabled: boolean;
        scrollViewHeight: number;
        canGoBack: boolean;
        loading: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onRefresh: () => void | undefined;
    onWebViewMessage: (e: WebViewMessageEvent) => Promise<void>;
    handleBackButton: () => true | undefined;
    onNavigationStateChange: (navState: WebViewNavigation) => void;
    render(): JSX.Element;
}
export {};
