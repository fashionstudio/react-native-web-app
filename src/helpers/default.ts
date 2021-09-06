export const defaultProps = {
	siteUrl: "",
	paymentUrl: "sberbank.ru",

	requestNotificationPermission: false,
	onPushRegistered: () => {},

	customEvents: [],
	onCustomEvent: () => {},

	customJSInjection: "",
	fontName: "custom",
};
