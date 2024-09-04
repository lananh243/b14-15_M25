import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
  );
  return res.data.hourly.temperature_2m;
}

export default async function Page() {
  const temperature = await getData();

  return (
    <div className="p-6">
      <ul>
        {temperature.map((item: any) => (
          <li key={item.id}> {item}°C</li>
        ))}
      </ul>
    </div>
  );
}
