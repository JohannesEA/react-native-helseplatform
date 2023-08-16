import { createSlice } from "@reduxjs/toolkit";
import { IAppointment, RestStatus } from "../../types/types";
import { APPOINTMENTS } from "../../development/data";

const initialState: IAppointment = {
  appointments: APPOINTMENTS,
  status: RestStatus.IDLE,
  error: undefined,
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    // Fetching
    getAppointmentsStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    getAppointmentsSuccess: (state, action) => {
      state.appointments = action.payload;
      state.status = RestStatus.SUCCESS;
    },
    getAppointmentsError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Posting
    postAppointmentsStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    postAppointmentsSuccess: (state, action) => {
      state.appointments.push(action.payload);
      state.status = RestStatus.SUCCESS;
    },
    postAppointmentsError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Updating/Putting
    putAppointmentsStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    putAppointmentSuccess: (state, action) => {
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
      state.status = RestStatus.SUCCESS;
    },
    putAppointmentsError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Deleting
    deleteAppointmentsStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    deleteAppointmentSuccess: (state, action) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
      state.status = RestStatus.SUCCESS;
    },
    deleteAppointmentError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },
  },
});

export const {
  getAppointmentsStart,
  getAppointmentsSuccess,
  getAppointmentsError,
  postAppointmentsStart,
  postAppointmentsSuccess,
  postAppointmentsError,
  putAppointmentsStart,
  putAppointmentSuccess,
  putAppointmentsError,
  deleteAppointmentsStart,
  deleteAppointmentSuccess,
  deleteAppointmentError,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
