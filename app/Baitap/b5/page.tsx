"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    };
    getData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr className="border-2 border-solid border-gray-300">
            <th className="border-2 border-solid border-gray-300">Tên</th>
            <th className="border-2 border-solid border-gray-300">Giá</th>
            <th className="border-2 border-solid border-gray-300">Mô tả</th>
            <th className="border-2 border-solid border-gray-300">Phân loại</th>
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
                  {item.title}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.price}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.description}
                </td>
                <td className="border-2 border-solid border-gray-300">
                  {item.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
