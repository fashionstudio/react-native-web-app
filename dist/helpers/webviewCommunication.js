import { EVENTS_FROM_WEB } from "./types";
export const globalWebViewMessageHandler = (customEvents, onCustomEvent) => async (e) => {
    const nativeEvent = JSON.parse(e.nativeEvent?.data);
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
