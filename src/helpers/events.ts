import { TOnPushRegistered } from "../types";
import { StructureError } from "./errors";
import { registerForPushNotificationsAsync } from "./notification";

export const handlePushRegistration = async (onPushRegistered: TOnPushRegistered) => {
	try {
		const token = await registerForPushNotificationsAsync();
		return onPushRegistered({ pushToken: token });
	} catch (e) {
		return onPushRegistered({ error: e as StructureError });
	}
};
