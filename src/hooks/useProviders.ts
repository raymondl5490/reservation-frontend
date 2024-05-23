import { useState, useEffect } from "react";
import { providers } from "../utils/mockData";
import { Provider } from "../types/Provider";

export const useProviders = () => {
  const [data, setData] = useState<Provider[]>([]);

  useEffect(() => {
    setData(providers);
  }, []);

  return { data };
};
