// normally in events.ts but due to cycle moved her

export interface IEvent {
	event: EVENTS_FROM_WEB;
	[info: string]: any;
}

export enum EVENTS_FROM_WEB {
	GET_PUSH = "get-push",
	SCROLL = "scrolling",
}
