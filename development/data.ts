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
    name: "Daglig Takk",
    description: "Skriv ned tre ting du er takknemlig for hver dag.",
    completed: false,
  },
  {
    id: "2",
    name: "Lett mosjon",
    description:
      "Gå en tur i frisk luft eller gjør lett trening i minst 30 minutter daglig.",
    completed: false,
  },
  {
    id: "3",
    name: "Meditasjon",
    description:
      "Prøv mindfulness eller guidet meditasjon i 20 minutter daglig.",
    completed: false,
  },
];
