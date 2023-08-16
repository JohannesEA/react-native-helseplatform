import { createSlice } from "@reduxjs/toolkit";
import { IExercise, RestStatus } from "../../types/types";
import { EXERCISES } from "../../development/data";

const initialState: IExercise = {
  exercises: EXERCISES,
  status: RestStatus.IDLE,
  error: undefined,
};

export const exerciseSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    // Fetching
    getExercisesStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    getExercisesSuccess: (state, action) => {
      state.exercises = action.payload;
      state.status = RestStatus.SUCCESS;
    },
    getExercisesError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Posting
    postExercisesStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    postExercisesSuccess: (state, action) => {
      state.exercises.push(action.payload);
      state.status = RestStatus.SUCCESS;
    },
    postExercisesError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Updating/Putting
    putExercisesStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    putExerciseSuccess: (state, action) => {
      const index = state.exercises.findIndex(
        (exercise) => exercise.id === action.payload.id
      );
      if (index !== -1) {
        state.exercises[index] = action.payload;
      }
      state.status = RestStatus.SUCCESS;
    },
    putExercisesError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Deleting
    deleteExercisesStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    deleteExerciseSuccess: (state, action) => {
      state.exercises = state.exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
      state.status = RestStatus.SUCCESS;
    },
    deleteExerciseError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },
  },
});

export const {
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
} = exerciseSlice.actions;

export default exerciseSlice.reducer;
