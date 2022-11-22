import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import Modal from "react-native-modal";

function CurrencySelector({ navigation, currency }) {
  //const { selected, setSelected } = React.useState(currencies[0]);
  const [value, onChangeValue] = React.useState("1");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownBox} onPress={handleModal}>
        <Image
          style={styles.flag}
          source={require("../assets/usaFlag.png")}
        />
        <Text style={styles.btnText}>{currency.value}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 13,
    marginBottom: 25,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#1d1d1d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    height: 125
  },
  dropdownBox: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRightColor: "#ddd",
    borderRightWidth: 1,
    overflow: "hidden",
    padding: 10,
    width: "45%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btnText: {},
  flag: {
    borderRadius: "50%",
    width: 35,
    height: 35
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 0,
    padding: 10,
    flex: 1,
    textAlign: "right",
    overflow: "hidden",
    width: "75%"
  }
});

export default CurrencySelector;
