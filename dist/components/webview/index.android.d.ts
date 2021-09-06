import * as React from "react";
import { WebView as RNWebView, WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import { StructureContext } from "../../helpers/context";
import { ICustomWebViewProps } from "./sharedProps";
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
export declare class CustomWebView extends React.Component<ICustomWebViewProps, State> {
    context: React.ContextType<typeof StructureContext>;
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
export default CustomWebView;
