import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";

function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    const credentials = {
      name: "Ola Normann",
      age: 33,
      diagnosis: "Depresjon",
      username: username,
      password: password,
    };
    loginUserAction(credentials, dispatch);
  };

  return (
    <KeyboardAvoidingView
      style={styles.loginContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../../assets/logo/logo.png")}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Brukernavn"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Passord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logg inn</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#023059",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 100,
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
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default LoginScreen;
