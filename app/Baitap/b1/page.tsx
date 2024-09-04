import React from "react";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
}
export default async function page() {
  const posts = await getData();
  return (
    <div className="p-6">
      <p className="text-xl font-bold">List of Posts</p>
      {posts.slice(0, 15).map((item: any) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}
