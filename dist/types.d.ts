import { ExpoPushToken } from "expo-notifications";
import { StructureError } from "./helpers/errors";
/** Handle push registration */
export declare type TOnPushRegistered = (values: {
    pushToken?: ExpoPushToken;
    error?: StructureError;
}) => void;
export declare type TCustomEvent = string | number;
/** Handle Custom Events */
export declare type TOnCustomEvent<T = any> = (event: T, data: any) => void;
export interface IAppProps<T = any> {
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
     * For it's usage, read [expo's documentation](https://docs.expo.dev/push-notifications/sending-notifications/).
     * */
    requestNotificationPermission?: boolean;
    onPushRegistered?: TOnPushRegistered;
    customEvents?: T[];
    onCustomEvent?: TOnCustomEvent<T>;
}
