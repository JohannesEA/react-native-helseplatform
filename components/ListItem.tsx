import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.emoji}>⚪️</Text>
      <View style={styles.textContainer}>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  listItemText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ListItem;
