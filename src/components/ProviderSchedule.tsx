import React from "react";
import { useProviders } from "../hooks/useProviders";

const ProviderSchedule: React.FC = () => {
  const { data: providers } = useProviders();

  return (
    <div>
      <h2>Provider Schedule</h2>
      {providers.map((provider) => (
        <div key={provider.id}>
          <h3>{provider.name}</h3>
          {provider.schedule.map((schedule, index) => (
            <div key={index}>
              <p>Date: {schedule.date}</p>
              <ul>
                {schedule.slots.map((slot, idx) => (
                  <li key={idx}>{slot}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProviderSchedule;
