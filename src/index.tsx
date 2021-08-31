import React from "react";
import { View, Text } from "react-native";

interface Props {
	/** The name of the app */
	name: string;

	/** Website url */
	siteUrl: string;

	/** Api url to save the push notification token */
	apiUrl: string;

	/** Custom fonts name */
	fontName?: string;

	/** Custom injected javascript when the site is loading */
	injectedJavaScript?: string;
}

/** Main App constructor */
const App: React.FC<Props> = ({
	name, siteUrl, apiUrl, fontName = "custom", injectedJavaScript = "",
}) =>
	(
		<View>
			<Text>
				Hello
				{name}
				{fontName}
			</Text>
		</View>
	);

export default App;
