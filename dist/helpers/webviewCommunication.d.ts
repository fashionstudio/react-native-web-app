import { WebViewMessageEvent } from "react-native-webview";
import { TCustomEvent, TOnCustomEvent } from "../types";
import { IEvent } from "./types";
export declare const globalWebViewMessageHandler: (customEvents: TCustomEvent[], onCustomEvent: TOnCustomEvent) => (e: WebViewMessageEvent) => Promise<IEvent>;
