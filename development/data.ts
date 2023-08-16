import { AppointmentDTO, ExerciseDTO } from "../types/types";

export const APPOINTMENTS: AppointmentDTO[] = [
  {
    id: "1",
    type: "Psykolog",
    datetime: "15. august 2023, 10:00",
    completed: false,
  },
  {
    id: "2",
    type: "Lege",
    datetime: "17. august 2023, 14:00",
    completed: false,
  },
  {
    id: "3",
    type: "Hjemmeøvelser",
    datetime: "Hver dag, 20 minutter",
    completed: false,
  },
];

export const EXERCISES: ExerciseDTO[] = [
  {
    id: "1",
    name: "Dyp pust",
    description: "Gjør dette i 10 minutter daglig.",
    completed: false,
  },
  {
    id: "2",
    name: "Progressiv muskelavslapning",
    description: "15 minutter daglig.",
    completed: false,
  },
  {
    id: "3",
    name: "Mindfulness-meditasjon",
    description: "20 minutter daglig.",
    completed: false,
  },
];
