// ProfileStats.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileStats = ({
  age,
  diagnosis,
  exercisesCompleted,
  exercisesTotal,
  appointmentsCompleted,
  appointmentsTotal,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.titleText}>Alder:</Text>
        <Text style={styles.valueText}>{age}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.titleText}>Diagnose:</Text>
        <Text style={styles.valueText}>{diagnosis}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.titleText}>Øvelser:</Text>
        <Text style={styles.valueText}>
          {exercisesCompleted}/{exercisesTotal}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.titleText}>Avtaler:</Text>
        <Text style={styles.valueText}>
          {appointmentsCompleted}/{appointmentsTotal}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  valueText: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProfileStats;
