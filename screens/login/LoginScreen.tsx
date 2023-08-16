import React from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";

function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (
      username.toLowerCase() === "test" &&
      password.toLowerCase() === "test"
    ) {
      navigation.replace("Oversikt");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Psychelia</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <View style={styles.buttonContainer}>
        <Button title="Logg inn" color="#4A90E2" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F4F6F9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#C5C5C5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default LoginScreen;
