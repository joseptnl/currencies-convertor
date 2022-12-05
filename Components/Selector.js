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

//styles
import styles from "../SelectorStyle";

const Selector = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownBox} onPress={handleModal}>
        <Text style={styles.btnText}>Currency</Text>
      </TouchableOpacity>
      {editing ? (
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={val => {
            let num = isNaN(parseInt(val)) ? 0 : val;
            setValue(num);
            calculateChange(num, currencyType);
          }}
          value={editing ? value : output}
          editable={editing}
        />
      ) : (
        <View style={styles.input}>
          <Text style={styles.output}>{isNaN(output) ? 0 : output}</Text>
        </View>
      )}

      <Modal isVisible={isModalVisible} style={styles.searchList}>
        <View style={styles.modalView}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    // setCurrencyType(item);
                    // passCurrency(item);
                    // passValue(value);
                    calculateChange(value, item);
                    handleModal();
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
};

export default Selector;
