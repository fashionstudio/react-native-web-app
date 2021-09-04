import { TOnPushRegistered } from "../types";
import { registerForPushNotificationsAsync } from "./notification";

export const handlePushRegistration = async (onPushRegistered: TOnPushRegistered) => {
	try {
		const token = await registerForPushNotificationsAsync();
		return onPushRegistered(token);
	} catch (e) {
		console.error(e);
	}
};
