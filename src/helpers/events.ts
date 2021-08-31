import { registerForPushNotificationsAsync } from "./notification";

export const handleRegisterPush = (apiUrl: string) =>
	async (userId: string) => {
		try {
			const token = await registerForPushNotificationsAsync();
			if (token)
				fetch(apiUrl, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token,
						userId,
					}),
				});
		} catch (e) {
			console.error(e);
		}
	};