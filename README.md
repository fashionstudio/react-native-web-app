# React Native Web App

## Installation

```
yarn add react-native-web-app
```
or
```
npm i react-native-web-app
```

## Introduction

Instead of repeating over and over the same process of creating an app using a web view, this library does everything for you. Only import it and pass in options.

This is made for Fashion Studio's apps.

It supports:
- [ ] Tracking Transparency
- [x] Custom Events (like user authentication)
- [x] Apple Pay
- [x] Push Notifications
- [x] Offline mode
- [x] Custom font
- [x] Loading screen
- [x] Typings

## Code Samples

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

## TODOs

- [ ] Refactor & format everything
