import { IAppProps } from "../types";

export const defaultProps: IAppProps = {
	siteUrl: "",
	paymentUrl: "sberbank.ru",

	requestNotificationPermission: false,
	onPushRegistered: () => {},

	customEvents: [],
	onCustomEvent: () => {},

	customJSInjection: "",
	fontName: "custom",
};
