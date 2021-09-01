export interface IAppProps {
    /** Website url */
    siteUrl: string;
    /** Api url to save the push notification token */
    apiUrl?: string;
    /** Payment url to enable apple pay when on payment step. Default **sberbank.ru** */
    paymentUrl?: string;
    /** Custom fonts name. Default **custom** */
    fontName?: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection?: string;
}
