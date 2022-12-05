import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList
} from "react-native";
import Modal from "react-native-modal";
import {MaterialIcons} from "@expo/vector-icons"

const windowWidth = Dimensions.get("window").width;

function CurrencyRateSelector({
  currenciesRates,
  initialCurrency,
  passCurrency,
  output
}) {
  const [currencyType, setCurrencyType] = React.useState(initialCurrency)
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const handleModal = () => setIsModalVisible(!isModalVisible)

  const calculateChange = (newCurrencyType) => {
    setCurrencyType(newCurrencyType)
    passCurrency(newCurrencyType)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownBox} onPress={handleModal}>
        <MaterialIcons style={styles.btnIcon} name="arrow-forward-ios"/>
        <Text style={styles.btnText}>{currencyType.abbreviation}</Text>
      </TouchableOpacity>
      <View style={styles.input}>
        <Text style={styles.output}>{isNaN(output) ? 0 : output}</Text>
      </View>
      <Modal isVisible={isModalVisible} style={styles.searchList}>
        <View style={styles.modalView}>
          <FlatList
            data={() => Object.keys(currenciesRates).map((key) => {return {abbreviation: key, rates: currenciesRates[key]}})}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    handleModal()
                    calculateChange(item)
                  }}
                >
                  <Text style={styles.title}>{item.abbreviation}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  dropdownBox: {
    overflow: "hidden",
    padding: 0,
    width: "45%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0084FF",
    borderRadius: 10
  },
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
    width: "75%",
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 24
  },
  searchList: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: "#fff"
  },
  modalView: {
    padding: 20,
    width: windowWidth - 30,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    display: "flex",
    width: windowWidth - 110,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  title: {
    color: "#000",
    padding: 20,
    marginHorizontal: 16,
    fontSize: 25
  },
  btn: {
    marginTop: 30
  },
  doneBtnText: {
    color: "#4169e1"
  },
  btnText: {
    fontSize: 24,
    color: "#ddd",
    fontWeight: "bold"
  },
  btnIcon: {
    color: "#ddd",
    fontSize: 23,
    fontWeight: "bold",
    transform: [{ rotate: "90deg" }]
  },
  output: {
    fontSize: 24
  }
});

export default CurrencyRateSelector;
