import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { ErrorCodes, StructureError } from "./errors";

export const registerForPushNotificationsAsync = async () => {
	if (!Constants.isDevice)
		throw new StructureError(
			"Expo.Notifications only work on devices",
			ErrorCodes.ONLY_PHYSICAL_DEVICES_ALLOWED,
		);

	const { status: existingStatus } = await Notifications.getPermissionsAsync();

	let finalStatus = existingStatus;

	// if permissions have not been granted, ask the user to grant permissions
	if (existingStatus !== "granted") {
		const { status } = await Notifications.requestPermissionsAsync();
		finalStatus = status;
	}

	// Failed to get push token for push notification
	if (finalStatus !== "granted")
		return;

	const token = await Notifications.getExpoPushTokenAsync();

	if (Platform.OS === "android")
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});

	return token;
};
