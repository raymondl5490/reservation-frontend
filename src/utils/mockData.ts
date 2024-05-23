import { Provider } from "../types/Provider";

export const providers: Provider[] = [
  {
    id: 1,
    name: "Jamie Stevenson",
    schedule: [
      {
        date: "2024-05-25",
        slots: [
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "08:15",
          "08:30",
          "08:45",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
        ],
      },
      { date: "2024-05-26", slots: ["10:00", "11:00"] },
    ],
  },
  {
    id: 2,
    name: "Alex Johnson",
    schedule: [
      { date: "2024-05-25", slots: ["12:00", "12:15"] },
      { date: "2024-05-26", slots: ["11:00", "11:15"] },
    ],
  },
];

export const clients = [{ id: 1, name: "Client A" }];
