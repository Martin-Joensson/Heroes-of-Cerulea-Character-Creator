import PropTypes from "prop-types";

import { RandomKin } from "./randomizers/RandomKin";
import { RandomColor } from "./randomizers/RandomColor";
import { RandomName } from "./randomizers/RandomName";
import { RandomSpecialItem } from "./randomizers/RandomSpecialItem";
import { RandomAttributes } from "./randomizers/RandomAttributes";

export const Button = ({ action, setHero, edit, setEdit }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleClick = () => {
    let attributes = RandomAttributes();

    const updateHeroProperty = (key, value) => {
      setHero((prevHero) => ({
        ...prevHero,
        [key]: value,
      }));
    };

    const updateHeroNestedProperty = (key, subKey, value) => {
      setHero((prevHero) => ({
        ...prevHero,
        [key]: {
          ...prevHero[key],
          [subKey]: value,
        },
      }));
    };

    if (action === "random") {
      updateHeroProperty("name", RandomName());
      updateHeroProperty("kin", RandomKin());
      updateHeroProperty("hair", RandomColor());
      updateHeroProperty("clothes", RandomColor());
      updateHeroProperty("hearts", 3);
      updateHeroProperty("maxHearts", 3);
      updateHeroProperty("energy", 3);
      updateHeroProperty("maxEnergy", 3);
      updateHeroNestedProperty("inventory", "specialItem", RandomSpecialItem());
      updateHeroNestedProperty("stats", "might", attributes[0]);
      updateHeroNestedProperty("stats", "bravery", attributes[1]);
      updateHeroNestedProperty("stats", "insight", attributes[2]);
      updateHeroNestedProperty("inventory", "gems", 15);
    }

    if (action === "edit") {
      setEdit(!edit);
    }

    if (action === "print") {
      window.print();
    }
  };

  return (
    <button className="action-button no-print m-2" onClick={handleClick}>
      {edit ? "Save" : <>{capitalizeFirstLetter(action)}</>}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.string,
  setHero: PropTypes.func,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};
