import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const PsykoseSymptomScreen = ({ navigation }: any) => {
  const symptoms = [
    {
      id: "1",
      name: "Følelse av håpløshet",
      description:
        "En overveldende følelse av tomhet, mørke og fremtidsløshet.",
    },
    {
      id: "2",
      name: "Mangel på interesse",
      description:
        "Tap av interesse eller glede ved aktiviteter som tidligere var gledesfylte.",
    },
    {
      id: "3",
      name: "Kronisk tretthet",
      description: "Følelse av å være fysisk og mentalt utmattet hele tiden.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Depresjon</Text>
      <Text style={styles.text}>
        Depresjon er en psykisk lidelse som påvirker hvordan du føler, tenker og
        handler. Symptomer på depresjon kan inkludere følelser av tristhet eller
        håpløshet, tap av interesse eller glede av aktiviteter, og
        vanskeligheter med å tenke, konsentrere seg eller ta beslutninger. Det
        er viktig å søke profesjonell behandling ved tegn på depresjon.
      </Text>
      <Text style={styles.title}>Symptomer på depresjon</Text>
      <FlatList
        style={styles.list}
        data={symptoms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("Symptomovelser")}
          >
            <Text style={styles.listItemTitle}>{item.name}</Text>
            <Text style={styles.listItemText}>{item.description}</Text>
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
