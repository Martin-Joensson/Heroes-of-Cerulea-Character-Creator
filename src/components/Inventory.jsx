export const Inventory = ({
  largePouch,
  slot1,
  slot2,
  slot3,
  slot4,
  slot5,
  slot6,
  slot7,
  slot8,
}) => {
  const inventorySize = largePouch ? 8 : 4;

  const invArray = [
    {
      slot: "Slot 1",
      item: slot1,
    },
    { slot: "Slot 2", item: slot2},
    { slot: "Slot 3", item: slot3},
    { slot: "Slot 4", item: slot4},
    { slot: "Slot 5", item: slot5},
    { slot: "Slot 6", item: slot6},
    { slot: "Slot 7", item: slot7},
    { slot: "Slot 8", item: slot8},
  ];

  return (
    <>
      <h3 className="font-enterCommandBold">
        Inventory: <span>{largePouch ? "Large pouch" : "Small pouch"}</span>
      </h3>
      <div className="grid grid-cols-2">
        {invArray.slice(0, inventorySize).map((slot, index) => (
          <div className="border m-1 min-h-14" key={index}>
            <p>{slot.slot}</p>
            <p className="font-enterCommandBold">{slot.item}</p>
          </div>
        ))}
      </div>
    </>
  );
};
