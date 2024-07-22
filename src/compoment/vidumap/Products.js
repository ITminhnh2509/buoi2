import React, { useState } from "react";
import Product from "./Product";

export default function Products() {
    const [list, setList] = useState([
        { id: 1, name: "Laptop Dell", price: 30_000 },
        { id: 2, name: "Laptop Lenovo", price: 40_000 },
        { id: 3, name: "Laptop Msi", price: 50_000 },
        { id: 4, name: "Laptop Acer", price: 60_000 },
        { id: 5, name: "Laptop Asus", price: 70_000 },
    ]);
    return (
        <div>
            {list.map((item, index) => (
                <Product key={index} pro={item} />
            ))}
        </div>
    );
}
