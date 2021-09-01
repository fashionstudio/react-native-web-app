"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStructure = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const react_native_offline_1 = require("react-native-offline");
const Main_1 = require("./Main");
/** Main App constructor */
exports.AppStructure = (props) => (<react_native_offline_1.NetworkProvider>
			<react_navigation_1.SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: "never" }}>
				<react_native_1.StatusBar barStyle="dark-content" backgroundColor="white"/>
				<Main_1.Main {...props}/>
			</react_navigation_1.SafeAreaView>
		</react_native_offline_1.NetworkProvider>);
exports.default = exports.AppStructure;
