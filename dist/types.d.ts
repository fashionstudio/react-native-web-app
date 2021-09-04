/** Handle push registration */
export declare type TOnPushRegistered = (pushToken?: string) => void;
/** When user authenticates */
export declare type TOnUserLoggedIn = (user?: unknown) => void;
export interface IAppProps {
    /** Website url */
    siteUrl: string;
    /** Payment url to enable apple pay when on payment step. Default **sberbank.ru** */
    paymentUrl?: string;
    /** Custom fonts name. Default name: **custom** */
    fontName?: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection?: string;
    onPushRegistered?: TOnPushRegistered;
    onUserLoggedIn?: TOnUserLoggedIn;
}
