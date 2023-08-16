import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./redux/store"; // Adjust path as needed
import OverviewScreen from "./screens/home/OverviewScreen";
import PsykoseSymptomScreen from "./screens/symptoms/SymptomScreen";
import HomeExerciseScreen from "./screens/exercises/HomeExercisesScreen";
import AppointmentScreen from "./screens/appointments/AppointmentScreen";
import LoginScreen from "./screens/login/LoginScreen";
import InboxScreen from "./screens/inbox/InboxScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Logg inn" }}
            />
            <Stack.Screen
              name="Oversikt"
              component={OverviewScreen}
              options={{ title: "Oversikt" }}
            />
            <Stack.Screen
              name="Symptomer"
              component={PsykoseSymptomScreen}
              options={{ title: "Symptomer" }}
            />
            <Stack.Screen
              name="Hjemmeoppgaver"
              component={HomeExerciseScreen}
              options={{ title: "Øvelser" }}
            />
            <Stack.Screen
              name="Avtaler"
              component={AppointmentScreen}
              options={{ title: "Avtaler" }}
            />
            <Stack.Screen
              name="Inboks"
              component={InboxScreen}
              options={{ title: "Inboks" }}
            />
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
