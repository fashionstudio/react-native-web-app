import React from "react";
import { View, Text } from "react-native";
import { sum } from "./helpers/sum";

interface Props {
	/** The name of the app */
	name: string;
}

/** Main App constructor */
const App: React.FC<Props> = ({ name }) =>
	(
		<View>
			<Text>
				Hello
				{name}
				{sum(1, 2)}
			</Text>
		</View>
	);

export default App;
