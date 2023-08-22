import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const PsykoseSymptomScreen = () => {
  const symptoms = [
    {
      id: "1",
      name: "Hallusinasjoner",
      description: "Høre, se, føle ting som ikke er der.",
    },
    {
      id: "2",
      name: "Vrangforestillinger",
      description:
        "Falske overbevisninger som ikke kan endres med logisk resonnement.",
    },
    {
      id: "3",
      name: "Uorganisert tale",
      description: "Usammenhengende eller uforståelig tale.",
    },
    // Add more symptoms as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Psykose</Text>
      <Text style={styles.text}>
        Psykose er en tilstand hvor en person kan oppleve psykotiske symptomer
        som hallusinasjoner eller vrangforestillinger. Disse symptomene kan
        forstyrre individets oppfatning av virkeligheten og kan være skremmende
        for den som opplever dem. Det er viktig å søke profesjonell behandling
        ved tegn på psykose.
      </Text>
      <Text style={styles.title}>Symptomer på psykose</Text>
      <FlatList
        style={styles.list}
        data={symptoms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{item.name}</Text>
            <Text style={styles.listItemText}>{item.description}</Text>
          </View>
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
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
    color: "#f4f4f8",
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // for Android shadow
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

export default PsykoseSymptomScreen;
