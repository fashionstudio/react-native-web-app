// normally in events.ts but due to cycle moved her

import { TCustomEvent } from "../types";

interface IGlobalEvent {
	event: TCustomEvent;
	[infos: string]: any;
}
interface IScrollEvent {
	event: EVENTS_FROM_WEB.SCROLL
	scrollTop: number;
}

export type IEvent = Partial<IGlobalEvent | IScrollEvent>;

export enum EVENTS_FROM_WEB {
	SCROLL = "scrolling",
}
