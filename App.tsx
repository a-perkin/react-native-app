import { COLORS } from "./constants/colors";
import CardDetailScreen from "./screens/CardDetailsScreen";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StatementDetailsScreen from "./screens/StatementDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.mainBackground,
          },
          headerTintColor: COLORS.mainText,
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="Card"
          component={CardDetailScreen}
          options={({ route }) => ({ title: route.params.type })}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Statement"
            component={StatementDetailsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
