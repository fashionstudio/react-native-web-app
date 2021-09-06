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
		backgroundColor: "#583d72",
		padding: 10,
	},
	btnText: {
		fontSize: 15,
		color: "white",
		textAlign: "center",
	},
});

const NoInternet: React.FC = () => {
	const { fontName: fontFamily } = useContext(StructureContext);

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text style={{ fontFamily, fontSize: 18 }}>
				Вы не подключены к Интернету.
			</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={[{ ...styles.btnText }, { fontFamily }]}>
					Обновить
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
export default NoInternet;
