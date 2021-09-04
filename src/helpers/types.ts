// normally in events.ts but due to cycle moved her

interface ILoginEvent {
	event: EVENTS_FROM_WEB.USER_LOGGED_IN;
	user?: any;
}

interface IScrollEvent {
	event: EVENTS_FROM_WEB.SCROLL
	scrollTop: number;
}

export type IEvent = IScrollEvent | ILoginEvent;

export enum EVENTS_FROM_WEB {
	USER_LOGGED_IN = "user-logged-in",
	SCROLL = "scrolling",
}
