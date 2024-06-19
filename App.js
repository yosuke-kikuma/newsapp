import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ArticleScreen from "./screens/ArticleScreen";
import ClipScreen from "./screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name="home" color={color} size={size} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" color={color} size={size} />;
    }
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen
              name="HomeTab"
              component={HomeStack}
              options={{ headerShown: false, title: "Home" }}
            />
            <Tab.Screen
              name="ClipTab"
              component={ClipScreen}
              options={{ headerShown: false, title: "Clip" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
