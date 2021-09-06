import { TCustomEvent } from "../types";
interface IGlobalEvent {
    event: TCustomEvent;
    [infos: string]: any;
}
interface IScrollEvent {
    event: EVENTS_FROM_WEB.SCROLL;
    scrollTop: number;
}
export declare type IEvent = Partial<IGlobalEvent | IScrollEvent>;
export declare enum EVENTS_FROM_WEB {
    SCROLL = "scrolling"
}
export {};
