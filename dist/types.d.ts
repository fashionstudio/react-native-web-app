export interface IAppProps {
    /** Website url */
    siteUrl: string;
    /** Api url to save the push notification token */
    apiUrl?: string;
    /** Custom fonts name */
    fontName?: string;
    /** Custom injected javascript when the site is loading */
    customJSInjection?: string;
}
