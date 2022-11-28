import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";
import CurrencyRateSelector from "./CurrencyRateSelector.js";
import React from "react";

CurrenciesListItem = ({ currency, currenciesData }) => {
    const calculate = () => currency.rates * currencyToConvert.rates;

    const passCurrency = newCurrency => {
        currencyToConvert = newCurrency
        setOutput(calculate())
    };

    let currencyToConvert = currenciesData[0]
    const [output, setOutput] = React.useState(calculate())

    return (
        <Collapse>
            {/* Collapse item header */}
            <CollapseHeader style={styles.currencyHeader}>
                <View style={styles.currencyPresentation}>
                    <Text style={styles.currencyName}>{currency.name}</Text>
                    <Text style={styles.currencyAbbreviation}>{currency.abbreviation}</Text>
                </View>
                <View style={styles.currencyImageContainer}>
                    <Image style={styles.currencyImage} />
                </View>
            </CollapseHeader>
            {/* Collapse item body */}
            <CollapseBody style={styles.currencyBody}>
                <CurrencyRateSelector
                    currencies={currenciesData}
                    initialCurrency={currenciesData[0]}
                    editing={false}
                    passCurrency={passCurrency}
                    output={output}
                />
            </CollapseBody>
        </Collapse>
    );
}

const styles = StyleSheet.create({
    currencyHeader: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        shadowColor: "#1d1d1d",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        alignSelf: "center",
        padding: 15,
        marginTop: 20,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    currencyPresentation: {
        width: "50%"
    },
    currencyName: {
        fontSize: 20,
        color: "#000"
    },
    currencyAbbreviation: {
        fontSize: 15,
        color: "#888"
    },
    currencyImageContainer: {
        width: "50%"
    },
    currencyImage: {
        borderRadius: 50,
        width: 20,
        height: 20,
        alignSelf: "flex-end"
    },
    currencyBody: {
        width: "85%",
        alignSelf: "center"
    },
    currencyBodyList: {
        width: "100%",
        padding: 10
    },
    currencyBodyItem: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    currencyBodyItemKey: {
        width: "50%",
        textAlign: "center",
        fontSize: 17
    },
    currencyBodyItemVal: {
        width: "50%",
        paddingLeft: "20%",
        fontSize: 17
    },
})

export default CurrenciesListItem;