"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegisterPush = void 0;
const notification_1 = require("./notification");
exports.handleRegisterPush = (apiUrl) => async (userId) => {
    try {
        const token = await notification_1.registerForPushNotificationsAsync();
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
    }
    catch (e) {
        console.error(e);
    }
};
