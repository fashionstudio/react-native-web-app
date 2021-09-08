import { ExpoPushToken } from "expo-notifications";
import { StructureError } from "./helpers/errors";
/** Handle push registration */
export declare type TOnPushRegistered = (values: {
    pushToken?: ExpoPushToken;
    error?: StructureError;
}) => void;
/** Handle Custom Events */
export declare type TOnCustomEvent<T = any> = (event: T, data: any) => void;
export interface IAppProps<T = any> {
    /** Website url */
    siteUrl: string;
    /**
     * Payment url pattern to enable apple pay when user is on payment step.\
     * Default value: **sberbank.ru**
     * */
    paymentPattern?: string | RegExp;
    /**
     * Custom fonts name.\
     * Default value: **custom**
     * */
    fontName?: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection?: string;
    /**
     * Should the app request notifications permission.
     * If it's a success, it will return an expo push notification token.\
     * For it's usage, read [expo's documentation](https://docs.expo.dev/push-notifications/sending-notifications/).\
     * Default value: **false**
     * */
    requestNotificationPermission?: boolean;
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
     * <AppStructure customEvents={enumToArray(CustomEvents)} />
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
