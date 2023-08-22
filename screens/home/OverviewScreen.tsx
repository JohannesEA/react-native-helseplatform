import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Avatar } from "react-native-paper";
import { exercisesSelector } from "../../redux/selectors/exercisesSelector";
import { useDispatch, useSelector } from "react-redux";
import { appointmentsSelector } from "../../redux/selectors/appointmentsSelector";
import { logOutUserAction } from "../../redux/actions/userActions";

const OverviewScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const data = ["Symptomer", "Hjemmeoppgaver", "Avtaler", "Inboks"];
  const { exercises } = useSelector(exercisesSelector);
  const { appointments } = useSelector(appointmentsSelector);

  // Sample profile data
  const userProfile = {
    name: "Ola Normann",
    age: 32,
    diagnosis: "Psykose",
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
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Avatar.Image
            size={100}
            source={require("../../assets/images/user.png")}
          />
        </View>
        <Text style={styles.nameText}>{userProfile.name}</Text>
        <Text style={styles.detailText}>Alder: {userProfile.age}</Text>
        <Text style={styles.detailText}>Diagnose: {userProfile.diagnosis}</Text>
        <Text style={styles.statText}>
          Øvelser: {userProfile.exercisesCompleted}/{exercises.length}
        </Text>
        <Text style={styles.statText}>
          Avtaler: {userProfile.appointmentsCompleted}/{appointments.length}
        </Text>
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
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logg ut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023059",
    padding: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // To center the image in the profileContainer
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  nameText: {
    color: "#f4f4f8",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  detailText: {
    color: "#f4f4f8",
    fontSize: 18,
    marginBottom: 5,
    alignSelf: "center",
  },
  statText: {
    color: "#f4f4f8",
    fontSize: 16,
    marginTop: 10,
    alignSelf: "center",
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
  logoutButton: {
    position: "absolute", // Position the button absolutely to the parent View
    bottom: 20, // Position at the bottom with a margin of 20
    left: 20, // Left margin of 20
    right: 20, // Right margin of 20
    backgroundColor: "#f98987",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
  },
  logoutButtonText: {
    fontSize: 18,
    color: "#333",
  },
});

export default OverviewScreen;
