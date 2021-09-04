import React from "react";
import { StatusBar, LogBox } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NetworkProvider } from "react-native-offline";
import { Main } from "./Main";
// FIXME: https://github.com/EvanBacon/expo-progress/issues/4#issuecomment-910184212
LogBox.ignoreLogs(["in Reanimated 2"]);
// TODO: add ref with functions and stateful values
/** Main App constructor */
export const AppStructure = (props) => (<NetworkProvider>
			<SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: "never" }}>
				<StatusBar barStyle="dark-content" backgroundColor="white"/>
				<Main {...props}/>
			</SafeAreaView>
		</NetworkProvider>);
export default AppStructure;
