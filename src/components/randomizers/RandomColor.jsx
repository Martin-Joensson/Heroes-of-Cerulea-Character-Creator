export const RandomKin = () => {
  const kinSelection = ["Elf", "Avian", "Geon", "Aquarian", "Seedling"];
  const colorSelection = [
    "Brown",
    "Red",
    "Orange",
    "Yellow",
    "Lime",
    "Green",
    "Teal",
    "Cyan",
    "Blue",
    "Indigo",
    "Purple",
    "Magenta",
    "Pink",
    "White",
    "Grey",
    "Black",
  ];
  const nameSelection = [
    "Iros",
    "Reglo",
    "Eko",
    "Mila",
    "Kodu",
    "Onola",
    "Riya",
    "Alon",
    "Rhys",
    "Eri",
    "Nessa",
    "Magenta",
    "Loaio",
    "Kinela",
    "Jevo",
    "Ethali",
    "Rinu",
  ];
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

  const randomKin = () => {
    let randInt = Math.floor(Math.random() * kinSelection.length);

    return kinSelection[randInt];
  };

  const randomColor = () => {
    let randInt = Math.floor(Math.random() * colorSelection.length);

    return colorSelection[randInt];
  };

  const randomName = () => {
    let randInt = Math.floor(Math.random() * nameSelection.length);

    return nameSelection[randInt];
  };
      const randomSpecialItem = () => {
        let randInt = Math.floor(Math.random() * specialItemSelection.length);

        return specialItemSelection[randInt].itemName;
      };

  return (
    <div>
      A {randomKin()} named {randomName()} with {randomColor()} hair and{" "}
      {randomColor()} clothes. They carry a {randomSpecialItem()}.
    </div>
  );
};
