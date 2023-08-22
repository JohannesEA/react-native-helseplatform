import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CreateAppointmentModal from "../../components/modals/CreateAppointmentModal";
import { AppointmentDTO } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { appointmentsSelector } from "../../redux/selectors/appointmentsSelector";
import {
  postAppointmentAction,
  putAppointmentAction,
} from "../../redux/actions/appointmentActions";

const AppointmentScreen = () => {
  const dispatch = useDispatch();
  const { appointments, status, error } = useSelector(appointmentsSelector);
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleAppointmentToggle = (id: string) => {
    const appointmentToToggle: AppointmentDTO = appointments.find(
      (app) => app.id === id
    );

    if (appointmentToToggle) {
      const updatedAppointment = {
        ...appointmentToToggle,
        completed: !appointmentToToggle.completed,
      };
      putAppointmentAction(updatedAppointment, dispatch);
    }
  };
  const handleSaveAppointment = (type: string, datetime: string) => {
    const newAppointment: AppointmentDTO = {
      id: (appointments.length + 1).toString(),
      type: type,
      datetime: datetime,
      completed: false,
    };

    postAppointmentAction(newAppointment, dispatch);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avtaleliste</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAppointmentToggle(item.id)}>
            <View style={[styles.listItem, item.completed && styles.completed]}>
              <Text style={styles.listItemTitle}>{item.type}</Text>
              <Text style={styles.listItemText}>{item.datetime}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.createButtonText}>Lag ny avtale</Text>
      </TouchableOpacity>

      <CreateAppointmentModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        saveAppointment={handleSaveAppointment}
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
    elevation: 2, // for Android shadow
  },
  completed: {
    backgroundColor: "#A8E6CF", // a light green color for completed appointments
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
  createButton: {
    backgroundColor: "#4CAF50", // Change this color as needed
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  createButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f8",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default AppointmentScreen;
