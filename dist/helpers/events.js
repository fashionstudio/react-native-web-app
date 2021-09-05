import { registerForPushNotificationsAsync } from "./notification";
export const handlePushRegistration = async (onPushRegistered) => {
    try {
        const token = await registerForPushNotificationsAsync();
        return onPushRegistered({ pushToken: token });
    }
    catch (e) {
        return onPushRegistered({ error: e });
    }
};
