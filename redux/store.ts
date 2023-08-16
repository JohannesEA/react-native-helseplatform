import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./reducers/appointMentReducer";
import exercisesReducer from "./reducers/exercisesReducer";

export const store = configureStore({
  reducer: {
    appointments: AppointmentReducer,
    exercises: exercisesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
