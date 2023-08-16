export interface AppointmentDTO {
  id: string;
  type: string;
  datetime: string;
  completed: boolean;
}

export interface IAppointment {
  appointments: AppointmentDTO[];
  status: RestStatus;
  error: Error | undefined;
}

export interface ExerciseDTO {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface IExercise {
  exercises: ExerciseDTO[];
  status: RestStatus;
  error: Error | undefined;
}

export enum RestStatus {
  IDLE = "idle",
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}
