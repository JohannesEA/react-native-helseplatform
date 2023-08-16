import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { exercisesSelector } from "../../redux/selectors/exercisesSelector";
import { ExerciseDTO } from "../../types/types";
import {
  putExerciseAction,
  postExerciseAction,
} from "../../redux/actions/exercisesActions";
import CreateExerciseModal from "../../components/modals/CreateExerciseModal";
import LottieView from "lottie-react-native";

const HomeExerciseScreen = () => {
  const dispatch = useDispatch();
  const { exercises, status, error } = useSelector(exercisesSelector);
  const [showSuccessAnimation, setShowSuccessAnimation] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleExerciseToggle = (exercise: ExerciseDTO) => {
    const toggledExercise: ExerciseDTO = {
      ...exercise,
      completed: !exercise.completed,
    };
    if (!exercise.completed) {
      setShowSuccessAnimation(true);
      setTimeout(() => {
        setShowSuccessAnimation(false);
      }, 2500); // Assuming the animation duration is 2.5 seconds
    }
    putExerciseAction(toggledExercise, dispatch);
  };
  const handleSaveExercise = (exercise: ExerciseDTO) => {
    postExerciseAction(exercise, dispatch); // Assuming you have a postExerciseAction
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* {showSuccessAnimation ? (
        <View style={styles.lottieAnimationContainer}>
          <LottieView
            duration={3000} // 3 seconds
            loop={false}
            autoPlay
            resizeMode="cover" // This ensures the animation covers its container
            style={styles.lottieAnimation}
            source={require("../../assets/animations/successAnimation.json")}
          />
        </View>
      ) : ( */}
      <>
        <Text style={styles.title}>Hjemmeøvelser for psykose</Text>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleExerciseToggle(item)}>
              <View
                style={[styles.listItem, item.completed && styles.completed]}
              >
                <Text style={styles.listItemTitle}>{item.name}</Text>
                <Text style={styles.listItemText}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.createButtonText}>Lag ny øvelse</Text>
        </TouchableOpacity>

        <CreateExerciseModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          saveExercise={handleSaveExercise}
        />
      </>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // for Android shadow
  },
  completed: {
    backgroundColor: "#A8E6CF", // a light green color for completed exercises
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
    backgroundColor: "#4CAF50", // You can adjust this color as needed
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  createButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  lottieAnimationContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center", // Center children on the cross axis (horizontally)
    justifyContent: "center", // Center children on the main axis (vertically)
  },

  lottieAnimation: {
    width: "100%",
    height: "100%",
  },
});

export default HomeExerciseScreen;
