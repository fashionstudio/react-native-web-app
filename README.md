# React Native Web App

## Looking for our documentation ?

Our docs are now hosted on [our wiki](https://github.com/fashionstudio/react-native-web-app/wiki)

### Code Sample

```tsx
enum CustomEvents {
    USER_LOGGED_IN = 'USER_LOGGED_IN',
    USER_LOGGED_OUT = 'USER_LOGGED_OUT'
}


<WebApp
    siteUrl="mysite.com"
    paymentPattern="sberbank.ru"

    fontName="Courrier"

    requestNotificationPermission={true}
    onPushRegistered={({ pushToken, error }) => {
        if (error)
            return console.error("Error while push registration:", error);

        console.log("new push token", pushToken)
    }}

    customJSInjection={`
        setTimeout(() => {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                event: "${CustomEvents.USER_LOGGED_IN}",
                jwt_token: "test123"
            })
        )
        }, 5000);
    `}

    customEvents={enumToArray(CustomEvents)}
    onCustomEvent={(event, data) => {
        console.log("Custom event", event, "with data", data);
    }}
/>
```
