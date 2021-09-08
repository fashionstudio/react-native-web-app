import { WebViewMessageEvent } from "react-native-webview";
import { TOnCustomEvent } from "../types";
import { IEvent } from "./types";
export declare const globalWebViewMessageHandler: <T = any>(customEvents: T[], onCustomEvent: TOnCustomEvent<T>) => (e: WebViewMessageEvent) => Promise<IEvent>;
