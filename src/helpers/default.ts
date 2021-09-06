import { IAppProps } from "../types";

export const defaultProps: Required<IAppProps> = {
	siteUrl: "",
	paymentUrl: "sberbank.ru",

	requestNotificationPermission: false,
	onPushRegistered: () => {},

	customEvents: [],
	onCustomEvent: () => {},

	customJSInjection: "",
	fontName: "custom",
};
