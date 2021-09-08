// normally in events.ts but due to cycle moved her

interface IGlobalEvent<T = any> {
	event: T;
	[infos: string]: any;
}
interface IScrollEvent {
	event: EVENTS_FROM_WEB.SCROLL
	scrollTop: number;
}

export type IEvent<T = any> = Partial<IGlobalEvent<T> | IScrollEvent>;

export enum EVENTS_FROM_WEB {
	SCROLL = "scrolling",
}
