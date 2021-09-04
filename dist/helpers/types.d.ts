interface ILoginEvent {
    event: EVENTS_FROM_WEB.USER_LOGGED_IN;
    user?: unknown;
}
interface IScrollEvent {
    event: EVENTS_FROM_WEB.SCROLL;
    scrollTop: number;
}
export declare type IEvent = IScrollEvent | ILoginEvent;
export declare enum EVENTS_FROM_WEB {
    USER_LOGGED_IN = "user-logged-in",
    SCROLL = "scrolling"
}
export {};
