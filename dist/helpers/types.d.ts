interface IGlobalEvent<T = any> {
    event: T;
    [infos: string]: any;
}
interface IScrollEvent {
    event: EVENTS_FROM_WEB.SCROLL;
    scrollTop: number;
}
export declare type IEvent<T = any> = Partial<IGlobalEvent<T> | IScrollEvent>;
export declare enum EVENTS_FROM_WEB {
    SCROLL = "scrolling"
}
export {};
