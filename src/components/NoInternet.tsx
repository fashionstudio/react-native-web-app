import React, { useContext } from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { StructureContext } from "../helpers/context";

const styles = StyleSheet.create({
	button: {
		marginTop: 25,
		borderRadius: 50,
		width: 200,
		padding: 10,
	},
	btnText: {
		fontSize: 15,
		textAlign: "center",
	},
});

const NoInternet: React.FC = () => {
	const { offlineScreenOptions: offlineScreen } = useContext(StructureContext);

	const { refreshButton, fontName: fontFamily, message } = offlineScreen!;

	return (
		<SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontFamily, fontSize: 18 }}>
				{message}
			</Text>
			<TouchableOpacity
				style={[styles.button, {
					backgroundColor: refreshButton?.backgroundColor,
				}]}
			>
				<Text
					style={[styles.btnText, {
						fontFamily,
						color: refreshButton?.textColor,
					}]}
				>
					{refreshButton?.text}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
export default NoInternet;
