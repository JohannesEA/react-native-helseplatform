import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

const CreateAppointmentModal = ({
  modalVisible,
  setModalVisible,
  saveAppointment,
}) => {
  const [newAppointmentType, setNewAppointmentType] = React.useState("");
  const [newAppointmentDatetime, setNewAppointmentDatetime] =
    React.useState("");

  const handleSave = () => {
    saveAppointment(newAppointmentType, newAppointmentDatetime);
    setNewAppointmentType("");
    setNewAppointmentDatetime("");
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
          <Text style={styles.modalTitle}>Ny Avtale</Text>
          <TextInput
            style={styles.input}
            placeholder="Type avtale (e.g. Psykolog)"
            value={newAppointmentType}
            onChangeText={setNewAppointmentType}
          />
          <TextInput
            style={styles.input}
            placeholder="Dato og tid (e.g. 15. august 2023, 10:00)"
            value={newAppointmentDatetime}
            onChangeText={setNewAppointmentDatetime}
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

export default CreateAppointmentModal;
