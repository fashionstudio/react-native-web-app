import { WebViewMessageEvent } from "react-native-webview";
import { TOnCustomEvent } from "../types";
import { IEvent, EVENTS_FROM_WEB } from "./types";

export const globalWebViewMessageHandler = <T = any>(customEvents: T[], onCustomEvent: TOnCustomEvent<T>) =>
	async (e: WebViewMessageEvent): Promise<IEvent> => {
		const nativeEvent: IEvent<T> = JSON.parse(e.nativeEvent?.data);

		// TODO: return an error saying the event is unknown
		if (!nativeEvent.event)
			return nativeEvent;

		if (nativeEvent.event === EVENTS_FROM_WEB.SCROLL)
			return nativeEvent;

		const { event, ...data } = nativeEvent;

		// eslint-disable-next-line no-restricted-syntax
		for (const customEvent of customEvents)
			if (customEvent === event) {
				onCustomEvent(event, data);
				break;
			}

		return nativeEvent;
	};
