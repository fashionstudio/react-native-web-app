import React from "react";
import { View, Text } from "react-native"

interface Props {
	/** The name of the app */
	name: string;
}

/** Main App constructor */
const App: React.FC<Props> = ({ name }) => {
	return (
		<View>
			<Text>Hello {name}</Text>
		</View>
	);
}

export default App;