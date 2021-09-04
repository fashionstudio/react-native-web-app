// normally in events.ts but due to cycle moved her
export var EVENTS_FROM_WEB;
(function (EVENTS_FROM_WEB) {
    EVENTS_FROM_WEB["USER_LOGGED_IN"] = "user-logged-in";
    EVENTS_FROM_WEB["SCROLL"] = "scrolling";
})(EVENTS_FROM_WEB || (EVENTS_FROM_WEB = {}));
