import { RandomItem } from "../components/RandomItem";
import { useState } from "react";
import shopItems from "../components/data/shopItems.json";
import generalItems from "../components/data/generalItems.json";

export const Shop = () => {
  const [inStock, setInStock] = useState(3);

  const howManyItemsInStock = () => {
    const inStockVar = 4;
    setInStock(Math.floor(Math.random() * inStockVar + 1 + 1));
  };

  return (
    <div className="">
      <p>Shop - Not ready yet</p>
      <button onClick={howManyItemsInStock}>In Stock? {inStock} items</button>
      <RandomItem numberOfItems={inStock} itemList={shopItems.shopItems} />
      {/* {generalItems.generalItems.map((item, index) => (
        <div className="border p-2 m-2" key={index}>
          <p className="font-enterCommandBold"> {item.name}</p>
          <p className="leading-none">{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
      {shopItems.shopItems.map((item, index) => (
        <div className="border p-2 m-2" key={index}>
          <p className="font-enterCommandBold"> {item.name}</p>
          <p className="leading-none">{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))} */}
    </div>
  );
};
