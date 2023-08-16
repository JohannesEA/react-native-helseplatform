import { Dispatch } from "redux";
import { ExerciseDTO } from "../../types/types";
import {
  getExercisesStart,
  getExercisesSuccess,
  getExercisesError,
  postExercisesStart,
  postExercisesSuccess,
  postExercisesError,
  putExercisesStart,
  putExerciseSuccess,
  putExercisesError,
  deleteExercisesStart,
  deleteExerciseSuccess,
  deleteExerciseError,
} from "../reducers/exercisesReducer";

// Fetch Exercises
export const fetchExercisesAction = (
  exercises: ExerciseDTO[],
  dispatch: Dispatch
) => {
  dispatch(getExercisesStart());
  try {
    dispatch(getExercisesSuccess(exercises));
  } catch (error) {
    console.error("Error when fetching exercises");
    dispatch(getExercisesError(error));
  }
};

// Post Exercise
export const postExerciseAction = (
  exercise: ExerciseDTO,
  dispatch: Dispatch
) => {
  dispatch(postExercisesStart());
  try {
    // TODO: Call API to post the exercise and get back the saved version if necessary
    dispatch(postExercisesSuccess(exercise));
  } catch (error) {
    console.error("Error when posting exercise");
    dispatch(postExercisesError(error));
  }
};

// Put (Update) Exercise
export const putExerciseAction = (
  exercise: ExerciseDTO,
  dispatch: Dispatch
) => {
  dispatch(putExercisesStart());
  try {
    // TODO: Call API to update the exercise
    dispatch(putExerciseSuccess(exercise));
  } catch (error) {
    console.error("Error when updating exercise");
    dispatch(putExercisesError(error));
  }
};

// Delete Exercise
export const deleteExerciseAction = (
  exerciseId: string,
  dispatch: Dispatch
) => {
  dispatch(deleteExercisesStart());
  try {
    // TODO: Call API to delete the exercise by its ID
    dispatch(deleteExerciseSuccess(exerciseId));
  } catch (error) {
    console.error("Error when deleting exercise");
    dispatch(deleteExerciseError(error));
  }
};
