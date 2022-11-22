import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ConvertScreen from "./Screens/ConvertScreen";
import ExchangeRates from "./Screens/ExchangeRates";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Convert Currency" component={ConvertScreen} />
      <Stack.Screen name="Exchange Rates" component={ExchangeRates} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
