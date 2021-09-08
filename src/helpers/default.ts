import { IAppProps } from "../types";

export const defaultProps: IAppProps = {
	siteUrl: "",
	paymentPattern: "sberbank.ru",

	requestNotificationPermission: false,
	onPushRegistered: () => {},

	customEvents: [],
	onCustomEvent: () => {},

	customJSInjection: "",
	fontName: "custom",
};
