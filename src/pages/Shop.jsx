import { GeneralItem } from "../components/GeneralItem";
import { useState } from "react";

export const Shop = () => {
const [inStock, setInStock] = useState(0)

  const howManyItemsInStock = () => {
    const inStockVar = 4;
    setInStock( Math.floor(Math.random() * inStockVar + 1 + 1));
  };

  return (
    <div className="">
      <p>Shop - Not ready yet</p>
          <button onClick={howManyItemsInStock}>In Stock? {inStock} items</button>
          <GeneralItem inStock={ inStock} />
    </div>
  );
};
