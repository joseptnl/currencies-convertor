import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";
import CurrencyRateSelector from "./CurrencyRateSelector.js";
import React from "react";

CurrenciesListItem = ({ currency, currenciesData, updateExpansion, expanded }) => {
    let counter

    calculate = (currencyToConvert) => {
        if (currenciesData[0].id == currencyToConvert.id) counter = false
        else counter = false
        return currency.id != currencyToConvert.id ? currency.rates * currencyToConvert.rates : 1
    }

    const [output, setOutput] = React.useState(calculate(currenciesData[0]))

    passCurrency = newCurrency => {
        setOutput(calculate(newCurrency))
    }

    return (
        <Collapse
            isExpanded={expanded}
            onToggle={() => {
                if (expanded) updateExpansion({id: 0})
                else updateExpansion(currency)
            }}
            style={[styles.currencyCollapse, expanded == true ? styles.collapseExpanded : null]}
            >
            {/* Collapse item header */}
            <CollapseHeader style={expanded == false ? styles.currencyExpandedHeader : styles.currencyNotExpandedHeader}>
                <View style={styles.currencyPresentation}>
                    <Text style={styles.currencyName}>{currency.abbreviation}</Text>
                </View>
                <View style={styles.currencyImageContainer}>
                    <Image style={styles.currencyImage} />
                </View>
            </CollapseHeader>
            {/* Collapse item body */}
            <CollapseBody style={styles.currencyBody}>
                <CurrencyRateSelector
                    initialCurrency={currenciesData[0]}
                    passCurrency={passCurrency}
                    output={output}
                />
            </CollapseBody>
        </Collapse>
    );
}

const styles = StyleSheet.create({
    currencyCollapse: {
        width: "85%",
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: "#fff",
        shadowColor: "#1d1d1d",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
    },
    currencyExpandedHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        padding: 15,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    currencyNotExpandedHeader: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        padding: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
        width: "100%",
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