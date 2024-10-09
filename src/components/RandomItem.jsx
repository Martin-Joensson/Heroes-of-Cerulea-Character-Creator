import PropTypes from "prop-types";

export const RandomItem = ({ numberOfItems, itemList, listName }) => {
  console.log("nr Items: ", numberOfItems, "List: ", itemList);

  const selectedItems = [];

  const RandomNumber = () => {
    return Math.floor(Math.random() * itemList.length);
  };

  const SelectItems = () => {
    while (selectedItems.length < numberOfItems) {
      console.log("Selected items length:", selectedItems.length);
      let item = itemList[RandomNumber()];

      if (!selectedItems.includes(item)) {
        selectedItems.push(item);
      }
    }
  };

  SelectItems();

  console.log("Selected items: ", selectedItems);

  return (
    <div>
      <h2>{listName}</h2>
      <div className="grid grid-cols-2">
        {selectedItems.map((item, index) => (
          <div className="border p-2 m-2" key={index}>
            <p className="font-enterCommandBold text-cerulea-green">
              {" "}
              {item.name}
            </p>
            <p className="leading-none">{item.description}</p>
            <p className="text-cerulea-gold">{item.price} gold</p>
          </div>
        ))}
      </div>
    </div>
  );
};

RandomItem.propTypes = {
  numberOfItems: PropTypes.any,
  itemList: PropTypes.array,
  listName: PropTypes.string,
};
