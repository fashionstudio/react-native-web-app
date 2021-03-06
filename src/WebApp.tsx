import React from "react";
import { StatusBar, LogBox } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NetworkProvider } from "react-native-offline";

import { IAppProps } from "./types";
import { Main } from "./Main";
import { StructureContext } from "./helpers/context";
import { defaultProps } from "./helpers/default";

// FIXME: https://github.com/EvanBacon/expo-progress/issues/4#issuecomment-910184212
LogBox.ignoreLogs(["in Reanimated 2"]);

// TODO: add ref with functions and stateful values
/** Main App constructor */
export function WebApp<T>(props: IAppProps<T>) {
	return (
		<StructureContext.Provider value={props}>
			<NetworkProvider>
				<SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: "never" }}>
					<StatusBar barStyle="dark-content" backgroundColor="white" />
					<Main />
				</SafeAreaView>
			</NetworkProvider>
		</StructureContext.Provider>
	);
}

WebApp.defaultProps = defaultProps;

export default WebApp;
