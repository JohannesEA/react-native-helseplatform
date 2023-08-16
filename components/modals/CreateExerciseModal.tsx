import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

const CreateExerciseModal = ({
  modalVisible,
  setModalVisible,
  saveExercise,
}) => {
  const [exerciseName, setExerciseName] = React.useState("");
  const [exerciseDescription, setExerciseDescription] = React.useState("");

  const handleSave = () => {
    saveExercise({
      id: Date.now().toString(),
      name: exerciseName,
      description: exerciseDescription,
      completed: false,
    });
    setExerciseName("");
    setExerciseDescription("");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Ny Øvelse</Text>
          <TextInput
            style={styles.input}
            placeholder="Navn på øvelse"
            value={exerciseName}
            onChangeText={setExerciseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Beskrivelse"
            value={exerciseDescription}
            onChangeText={setExerciseDescription}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Lagre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    padding: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    alignItems: "center",
    position: "relative",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#999",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#4C9FAB",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CreateExerciseModal;
