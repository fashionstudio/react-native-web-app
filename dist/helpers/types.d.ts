export interface IEvent {
    event: EVENTS_FROM_WEB;
    [info: string]: any;
}
export declare enum EVENTS_FROM_WEB {
    GET_PUSH = "get-push",
    SCROLL = "scrolling"
}
