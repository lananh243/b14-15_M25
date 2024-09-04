import axios from "axios";
import React from "react";
async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return res.data;
}
getData();
export default async function page() {
  const comments = await getData();
  return (
    <div>
      Tìm nạp dữ liệu server bằng axios
      {comments.map((item: any) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}
