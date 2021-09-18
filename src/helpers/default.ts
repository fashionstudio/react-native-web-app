import { IAppProps } from "../types";
import NoInternet from "../components/NoInternet";

export const defaultProps: IAppProps = {
	siteUrl: "",
	paymentPattern: "sberbank.ru",

	requestNotificationPermission: false,
	onPushRegistered: () => {},

	customEvents: [],
	onCustomEvent: () => {},

	customJSInjection: "",

	offlineScreenOptions: {
		message: "Вы не подключены к Интернету.",
		fontName: "custom",
		refreshButton: {
			text: "Обновить",
			textColor: "white",
			backgroundColor: "#583d72",
		},
	},
	offlineScreenComponent: NoInternet,
};
