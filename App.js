import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./redux/store"; // Adjust path as needed
import OverviewScreen from "./screens/home/OverviewScreen";
import PsykoseSymptomScreen from "./screens/symptoms/SymptomScreen";
import HomeExerciseScreen from "./screens/exercises/HomeExercisesScreen";
import AppointmentScreen from "./screens/appointments/AppointmentScreen";
import LoginScreen from "./screens/login/LoginScreen";
import InboxScreen from "./screens/inbox/InboxScreen";
import { userSelector } from "./redux/selectors/userSelector";
import SymptomDetailsScreen from "./screens/symptoms/SymptomDetailsScreen";
import TherapistScreen from "./screens/therapist/TherapistScreen";

// ... other imports ...

const Stack = createNativeStackNavigator();

function MainApp() {
  const { isAuthenticated } = useSelector(userSelector);

  return (
    <SafeAreaProvider>
      {isAuthenticated ? <AuthenticatedStack /> : <NotAuthenticatedStack />}
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
}

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: "#023059",
  },
  headerTintColor: "#f4f4f8",
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Oversikt">
      <Stack.Screen
        name="Oversikt"
        component={OverviewScreen}
        options={{ title: "Oversikt", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Symptomer"
        component={PsykoseSymptomScreen}
        options={{ title: "Symptomer", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Symptomovelser"
        component={SymptomDetailsScreen}
        options={{ title: "Øvelser", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Hjemmeoppgaver"
        component={HomeExerciseScreen}
        options={{ title: "Øvelser", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Avtaler"
        component={AppointmentScreen}
        options={{ title: "Avtaler", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Inboks"
        component={InboxScreen}
        options={{ title: "Inboks", ...commonHeaderOptions }}
      />
      <Stack.Screen
        name="Behandler"
        component={TherapistScreen}
        options={{ title: "Min behandler", ...commonHeaderOptions }}
      />
    </Stack.Navigator>
  );
};

const NotAuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Logg inn", ...commonHeaderOptions }}
      />
    </Stack.Navigator>
  );
};
