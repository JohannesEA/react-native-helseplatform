// NextAppointment.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NextAppointment = ({ appointment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Neste avtale</Text>
      <Text style={styles.text}>
        {appointment.with}, {appointment.date} kl. {appointment.time}.{" "}
        {appointment.plan}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#333",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
});

export default NextAppointment;
