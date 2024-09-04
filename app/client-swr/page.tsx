"use client";
import React from "react";
import useSWR from "swr";
import axios from "axios";
// viết hàm đi lấy data
const getData = (url: string) => axios.get(url).then((res) => res.data);
export default function page() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    getData
  );
  if (error) return <div>Quá trình lấy dữ liệu thất bại</div>;
  if (!data) return <div>Đang tải dữ liệu ...</div>;
  return (
    <div>
      fetching data với thư viện swr
      {data.map((item: any) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}
