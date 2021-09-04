import { ExpoPushToken } from "expo-notifications";
/** Handle push registration */
export declare type TOnPushRegistered = (pushToken?: ExpoPushToken) => void;
/** When user authenticates */
export declare type TOnUserLoggedIn = (user?: any) => void;
export interface IAppProps {
    /** Website url */
    siteUrl: string;
    /** Payment url to enable apple pay when on payment step. Default **sberbank.ru** */
    paymentUrl?: string;
    /** Custom fonts name. Default name: **custom** */
    fontName?: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection?: string;
    /**
     * Should the app request notifications permission.
     * If it's a success, it will return an expo push notification token
     * For it's usage, read [expo's doc](https://docs.expo.dev/push-notifications/sending-notifications/).
     * */
    requestNotificationPermission?: boolean;
    onPushRegistered?: TOnPushRegistered;
    onUserLoggedIn?: TOnUserLoggedIn;
}
