"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://localhost:3000/api");
      setUser(res.data);
    };
    getData();
  }, []);
  return (
    <div>
      <table className="m-auto my-32">
        <thead>
          <tr className="border-2 border-solid border-gray-300">
            <th className="border-2 border-solid border-gray-300">Tên</th>
            <th className="border-2 border-solid border-gray-300">Email</th>
            <th className="border-2 border-solid border-gray-300">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item: any) => {
            return (
              <tr
                key={item.id}
                className="border-2 border-solid border-gray-300"
              >
                <td className="border-2 border-solid border-gray-300">
                  {item.name}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.email}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.address.city}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
