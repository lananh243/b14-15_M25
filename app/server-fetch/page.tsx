import React from "react";
// dùng fetch đi lấy dữ liệu và render dữ liệu ở phía server
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = res.json();
  return data;
}
export default async function page() {
  const comments = await getData();
  return (
    <div>
      tim nap du lieu server voi fetch
      {comments.map((item: any) => {
        return <li>{item.name}</li>;
      })}
    </div>
  );
}
