import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { exercisesSelector } from "../../redux/selectors/exercisesSelector";
import { putExerciseAction } from "../../redux/actions/exercisesActions";

const SymptomDetailsScreen = () => {
  const { exercises } = useSelector(exercisesSelector);
  const dispatch = useDispatch();

  const handleExerciseToggle = (exercise) => {
    const toggledExercise = {
      ...exercise,
      completed: !exercise.completed,
    };
    putExerciseAction(toggledExercise, dispatch);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Øvelser for Depresjon</Text>
      <Text style={styles.text}>
        Disse øvelsene kan hjelpe deg med å få kontroll på depresjonssymptomene
        dine.
      </Text>
      <FlatList
        style={styles.list}
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.listItem,
              { backgroundColor: item.completed ? "#7CFC00" : "#fff" },
            ]}
            onPress={() => handleExerciseToggle(item)}
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

export default SymptomDetailsScreen;
