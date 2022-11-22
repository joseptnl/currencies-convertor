import { StyleSheet, View } from 'react-native';
import {AccordionList} from 'accordion-collapse-react-native';
import {currenciesData} from '../currenciesData.js';

ExchangeRates = () => {
  return (
    <View style={styles.background}>
        <CurrenciesList />
    </View>
  );
}

function CurrenciesList () {
    return (
        <AccordionList
            style={styles.currenciesList}
            list={currenciesData}
            header={CurrencyHeader}
            body={CurrencyBody}
            keyExtractor={item => item.id}
        />
    );
}

function CurrencyHeader (item) {
  return (
    <View style={styles.currencyHeader}>
      
    </View>
  );
}

function CurrencyBody (item) {
  return (
    <View style={styles.currencyBody}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyHeader: {
    width: '100%',
    borderWidth: '1px',
    borderColor: '#000'
  },
  currencyBody: {
    width: '100%',
    borderWidth: '1px',
    borderColor: '#000'
  },
  currenciesList: {
    width: '90%',
    backgroundColor: '#fff'
  }
});

export default ExchangeRates;
