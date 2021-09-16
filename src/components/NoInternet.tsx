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
		color: "white",
		textAlign: "center",
	},
});

const NoInternet: React.FC = () => {
	const {
		fontName: fontFamily,
		offlineText,
		themeColor,
	} = useContext(StructureContext);

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text style={{ fontFamily, fontSize: 18 }}>
				{offlineText?.message}
			</Text>
			<TouchableOpacity
				style={[
					styles.button,
					{ backgroundColor: themeColor },
				]}
			>
				<Text style={[{ ...styles.btnText }, { fontFamily }]}>
					{offlineText?.message}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
export default NoInternet;
