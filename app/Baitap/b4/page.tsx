import axios from "axios";
import React from "react";

async function errData() {
  try {
    const res = await axios.get(
      "https111://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  } catch (error) {
    return "404 - Trang không tồn tại";
  }
}

export default async function Page() {
  const result = await errData();

  return (
    <div className="p-6">
      {Array.isArray(result)
        ? result.map((item: any) => <li key={item.id}>{item.name}</li>)
        : result}
    </div>
  );
}
