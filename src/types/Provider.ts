export interface Schedule {
  date: string;
  slots: string[];
}

export interface Provider {
  id: number;
  name: string;
  schedule: Schedule[];
}
