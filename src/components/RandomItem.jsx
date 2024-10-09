import PropTypes from "prop-types";

export const RandomItem = ({ numberOfItems, itemList }) => {
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
      Random item{" "}
      {selectedItems.map((item, index) => (
        <div className="border p-2 m-2" key={index}>
          <p className="font-enterCommandBold"> {item.name}</p>
          <p className="leading-none">{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

RandomItem.propTypes = {
  numberOfItems: PropTypes.any,
  itemList: PropTypes.array,
};
