import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import { exercisesSelector } from "../../redux/selectors/exercisesSelector";
import { useDispatch, useSelector } from "react-redux";
import { appointmentsSelector } from "../../redux/selectors/appointmentsSelector";
import { logOutUserAction } from "../../redux/actions/userActions";
import NextAppointment from "../../components/NextAppointment";
import ProfileStats from "../../components/ProfileStats";

const OverviewScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const data = [
    "Behandler",
    "Symptomer",
    "Hjemmeoppgaver",
    "Avtaler",
    "Inboks",
  ];
  const { exercises } = useSelector(exercisesSelector);
  const { appointments } = useSelector(appointmentsSelector);

  const [nextAppointment, setNextAppointment] = React.useState({
    with: "psykolog Kristoffer Land",
    date: "30.08.23",
    time: "09:00",
    plan: "Plan for timen er å fortsette med eksponeringsøvelser.",
  });

  // Sample profile data
  const userProfile = {
    name: "Ola Normann",
    age: 32,
    diagnosis: "Depresjon",
    exercisesCompleted: exercises.filter((exercise) => exercise.completed)
      .length, // Sample data, replace with data from your reducer
    appointmentsCompleted: appointments.filter(
      (appointment) => appointment.completed
    ).length, // Sample data, replace with data from your reducer
  };

  const handleLogout = () => {
    logOutUserAction(dispatch);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={require("../../assets/images/user.png")}
        />
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logg ut</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          <ProfileStats
            age={userProfile.age}
            diagnosis={userProfile.diagnosis}
            exercisesCompleted={userProfile.exercisesCompleted}
            exercisesTotal={exercises.length}
            appointmentsCompleted={userProfile.appointmentsCompleted}
            appointmentsTotal={appointments.length}
          />
          <NextAppointment appointment={nextAppointment} />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item: boxTitle }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate(boxTitle)}
            >
              <Text style={styles.listItemText}>{boxTitle}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  logoutButton: {
    backgroundColor: "#f98987",
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#333",
  },
  listItem: {
    backgroundColor: "#f4f4f8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
  },
  listItemText: {
    fontSize: 18,
    color: "#333",
  },
});

export default OverviewScreen;
