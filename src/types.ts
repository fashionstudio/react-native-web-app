import React from "react";
import { ExpoPushToken } from "expo-notifications";
import { StructureError } from "./helpers/errors";

/** Handle push registration */
export type TOnPushRegistered = (values: {
	pushToken?: ExpoPushToken,
	error?: StructureError
}) => void;

/** Handle Custom Events */
export type TOnCustomEvent<T = any> = (event: T, data: any) => void;

export interface IOfflineScreen {
	/**
	 * Custom fonts name.\
	 * Default value: **custom**
	 * */
	fontName?: string;

	/**
	 * The message to show the user.\
	 * Default value: **Вы не подключены к Интернету.**
	 * */
	message?: string;

	/** All options for the refresh button. */
	refreshButton?: {
		/**
		 * Custom refresh button text.\
		 * Default value: **Обновить**
		 */
		text?: string;

		/**
		 * Custom button text color.\
		 * Default value: **##ffffff**
		 */
		textColor?: string;

		/**
		 * Custom refresh button background color.\
		 * Default value: **#583d72**
		 */
		backgroundColor?: string;
	};

}

export interface IAppProps<T = any> {
	/** Website url */
	siteUrl: string;

	/**
	 * Payment url pattern to enable apple pay when user is on payment step.\
	 * Default value: **sberbank.ru**
	 * */
	paymentPattern?: string | RegExp;

	/** Custom options for the offline screen */
	offlineScreenOptions?: IOfflineScreen;

	/** Custom component for the offline screen */
	offlineScreenComponent?: React.ComponentType;

	/** Custom injected javascript when the site is loading */
	customJSInjection?: string;

	/**
	 * Should the app request notifications permission.
	 * If it's a success, it will return an expo push notification token.\
	 * For it's usage, read [expo's documentation](https://docs.expo.dev/push-notifications/sending-notifications/).\
	 * Default value: **false**
	 * */
	requestNotificationPermission?: boolean;

	// EVENTS
	/** Fired when an expo push notification token is received */
	onPushRegistered?: TOnPushRegistered;

	/**
	 * Custom events to watch on the website that might fire.\
	 * **Must be an array containg event names (usualy an enum).** \
	 * Use `enumToArray` function from the library to convert an enum to an array
	 * @example
	 * ```tsx
	 *	enum CustomEvents {
	 *		USER_LOGGED_IN = 'USER_LOGGED_IN',
	 *		USER_LOGGED_OUT = 'USER_LOGGED_OUT'
	 *	}
	 *
	 * <WebApp customEvents={enumToArray(CustomEvents)} />
	 * ```
	 * */
	customEvents?: T[];

	/**
	 * Fired when a custom event is fired on the website.\
	 * @param event The event that triggered the listener
	 * @param data The data passed to the event
	 *
	 * #### Here is how an event should be structured on the website:
	 * ```tsx
	 *	interface IWebEvent {
	 *		event: string;
	 *		[property]: any;
	 *	}
	 * ```
	 */
	onCustomEvent?: TOnCustomEvent<T>;

}
