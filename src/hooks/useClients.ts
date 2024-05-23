import { useState, useEffect } from "react";
import { clients } from "../utils/mockData";
import { Client } from "../types/Client";

export const useClients = () => {
  const [data, setData] = useState<Client[]>([]);

  useEffect(() => {
    setData(clients);
  }, []);

  return { data };
};
