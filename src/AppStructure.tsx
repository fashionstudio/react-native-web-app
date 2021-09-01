import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NetworkProvider } from "react-native-offline";

import { IAppProps } from "./types";
import { Main } from "./Main";

/** Main App constructor */
export const AppStructure: React.FC<IAppProps> = (props) =>
	(
		<NetworkProvider>
			<SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: "never" }}>
				<StatusBar barStyle="dark-content" backgroundColor="white" />
				<Main {...props} />
			</SafeAreaView>
		</NetworkProvider>
	);

export default AppStructure;
