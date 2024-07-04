export const RandomName = () => {
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

  let randInt = Math.floor(Math.random() * nameSelection.length);

  return nameSelection[randInt];
};
