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
    <div>
      <div className="mx-10">
        <RandomItem
          listName={"Shop Items"}
          numberOfItems={inStock}
          itemList={shopItems.shopItems}
        />
        <RandomItem
          listName={"Treasure Items"}
          numberOfItems={1}
          itemList={generalItems.generalItems}
        />
      </div>
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
      <button
        className="p-2 bg-cerulea-red action-button"
        onClick={howManyItemsInStock}
      >
        <p className="font-enterCommandBold">Randomize Items</p>
        <p className="font-enterCommandItalic">Removes current items</p>
      </button>
      <p>{inStock} items in stock in the shop.</p>
    </div>
  );
};
