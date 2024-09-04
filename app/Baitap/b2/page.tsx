import axios from "axios";
import { table } from "console";
import React from "react";
async function getData() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
getData();
export default async function page() {
  const products = await getData();
  return (
    <div>
      <table className="m-auto my-10">
        <thead>
          <tr className="border-2 border-solid border-gray-300">
            <th className="border-2 border-solid border-gray-300">STT</th>
            <th className="border-2 border-solid border-gray-300">Tên</th>
            <th className="border-2 border-solid border-gray-300">Giá</th>
            <th className="border-2 border-solid border-gray-300">Ảnh</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item: any) => {
            return (
              <tr
                key={item.id}
                className="border-2 border-solid border-gray-300"
              >
                <td className="border-2 border-solid border-gray-300">
                  {item.id}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.title}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.price}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  <img src={item.image} alt="" className="w-52 h-52" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
