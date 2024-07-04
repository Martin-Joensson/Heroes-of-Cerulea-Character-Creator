export const RandomKin = () => {
  const kinSelection = ["Elf", "Avian", "Geon", "Aquarian", "Seedling"];

  let randInt = Math.floor(Math.random() * kinSelection.length);

  return kinSelection[randInt];
};
