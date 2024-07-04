export const RandomColor = () => {
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

  let randInt = Math.floor(Math.random() * colorSelection.length);

  return colorSelection[randInt];
};
