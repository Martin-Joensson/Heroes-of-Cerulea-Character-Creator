export const RandomAttributes = () => {
  const attributeSelection = [3, 2, 1];
  const array = attributeSelection;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

  return attributeSelection;
};
