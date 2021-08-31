"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
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
const NoInternet = ({ fontFamily }) => (<react_native_1.SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<react_native_1.Text style={{ fontFamily, fontSize: 18 }}>
				Вы не подключены к Интернету.
			</react_native_1.Text>
			<react_native_1.TouchableOpacity style={styles.button}>
				<react_native_1.Text style={[{ ...styles.btnText }, { fontFamily }]}>
					Обновить
				</react_native_1.Text>
			</react_native_1.TouchableOpacity>
		</react_native_1.SafeAreaView>);
exports.default = NoInternet;
