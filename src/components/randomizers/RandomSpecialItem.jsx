export const RandomSpecialItem = () => {
  const specialItemSelection = [
    {
      itemName: "Lantern",
      itemDesc: "Lights up dark places. Can immolate objects.",
    },
    { itemName: "Bow", itemDesc: "Ranged weapon. Infinite arrows." },
    {
      itemName: "Boomerang",
      itemDesc:
        "Can retrieve small items from a long distance. Successful attacks STUN monsters (not bosses) for the current and upcoming ROUND.",
    },
    {
      itemName: "Magic Cape",
      itemDesc:
        "Spend 1 ENERGY to make yourself invulnerable for the current and upcoming ROUND.",
    },
  ];
  const randomSpecialItem = () => {
    let randInt = Math.floor(Math.random() * specialItemSelection.length);

    return specialItemSelection[randInt].itemName;
  };

  return <>{randomSpecialItem()}</>;
};
