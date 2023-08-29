import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ListItem from "../../components/ListItem";

const TherapistScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/images/user.png")}
        />
        <Text style={styles.nameText}>Psykolog Kristoffer Land</Text>
        <Text style={styles.detailText}>Utdanning: SDU Odense, Danmark.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kristoffer sin erfaring:</Text>
        <ListItem text="Bred erfaring innen akuttpsykiatrise problemstillinger" />
        <ListItem text="Videreutdanning i EMDR-traumeterapi" />
        <ListItem text="Erfaring fra fengselspsykiatri og traume og belastningsrelaterte lidelser" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kunnskapsfelt:</Text>
        <ListItem text="Psykotraumatologi" />
        <ListItem text="Akuttpsykiatri" />
        <ListItem text="Mentaliseringsbasert terapi" />
        <ListItem text="Fengselspsykiatri" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023059",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  detailText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#fff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  listItem: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff",
  },
});

export default TherapistScreen;
