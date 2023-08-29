import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const InboxScreen = () => {
  const [messages, setMessages] = React.useState([
    {
      id: "1",
      sender: "Psykolog",
      message: "Vennligst bekreft din neste avtale.",
      read: false,
    },
    {
      id: "2",
      sender: "Lege",
      message: "Testresultatene dine er klare. Ring for en oppfølging.",
      read: false,
    },
    {
      id: "3",
      sender: "Terapeut",
      message: "Håper øvelsene går bra. Gi beskjed hvis du har spørsmål.",
      read: true,
    },
  ]);

  const handleMessageToggle = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, read: !message.read } : message
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Innboks</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMessageToggle(item.id)}>
            <View style={[styles.listItem, item.read && styles.read]}>
              <Text style={styles.listItemTitle}>{item.sender}</Text>
              <Text style={styles.listItemText}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023059",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#f4f4f8",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  read: {
    backgroundColor: "#7CFC00", // a light gray color for read messages
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  listItemText: {
    fontSize: 16,
    color: "#555",
  },
});

export default InboxScreen;
