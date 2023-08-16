import { Dispatch } from "redux";
import { AppointmentDTO } from "../../types/types";
import {
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
} from "../reducers/appointMentReducer";

// Fetch Appointments
export const fetchAppointmentsAction = (
  appointments: AppointmentDTO[],
  dispatch: Dispatch
) => {
  dispatch(getAppointmentsStart());
  try {
    dispatch(getAppointmentsSuccess(appointments));
  } catch (error) {
    console.error("Error when fetching appointments");
    dispatch(getAppointmentsError(error));
  }
};

// Post Appointment
export const postAppointmentAction = (
  appointment: AppointmentDTO,
  dispatch: Dispatch
) => {
  dispatch(postAppointmentsStart());
  try {
    // TODO: Call API to post the appointment and get back the saved version if necessary
    dispatch(postAppointmentsSuccess(appointment));
  } catch (error) {
    console.error("Error when posting appointment");
    dispatch(postAppointmentsError(error));
  }
};

// Put (Update) Appointment
export const putAppointmentAction = (
  appointment: AppointmentDTO,
  dispatch: Dispatch
) => {
  dispatch(putAppointmentsStart());
  try {
    // TODO: Call API to update the appointment
    dispatch(putAppointmentSuccess(appointment));
  } catch (error) {
    console.error("Error when updating appointment");
    dispatch(putAppointmentsError(error));
  }
};

// Delete Appointment
export const deleteAppointmentAction = (
  appointment: AppointmentDTO,
  dispatch: Dispatch
) => {
  dispatch(deleteAppointmentsStart());
  try {
    // TODO: Call API to delete the appointment by its ID
    dispatch(deleteAppointmentSuccess(appointment.id));
  } catch (error) {
    console.error("Error when deleting appointment");
    dispatch(deleteAppointmentError(error));
  }
};
