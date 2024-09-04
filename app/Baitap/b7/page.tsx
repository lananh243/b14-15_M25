import React from "react";
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
}
export default async function page() {
  const products = await getData();
  return (
    <div className="p-6">
      <select name="" id="">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <span>---------</span>
      <select name="" id="">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
      </select>
      <button>Lọc</button>
      <p className="text-xl font-bold">Danh sách sản phẩm</p>
      {products.map((item: any) => {
        return (
          <ul>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <b>***************************</b>
          </ul>
        );
      })}
    </div>
    /*
      
    */
  );
}

let user = [
  { id: 1, age: 45 },
  { id: 2, age: 21 },
  { id: 3, age: 13 },
  { id: 4, age: 21 },
];
let result = user.filter((item: any) => {
  return item.age >= 20 && item.age <= 30;
});
