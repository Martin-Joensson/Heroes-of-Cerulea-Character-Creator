import PropTypes from "prop-types";
// import { useState } from "react";
// import heart from "/images/heart-solid.svg";
// import bolt from "/images/bolt-lightning-solid2.svg";
// import heartOutline from "/images/heart-outline.svg";
// import boltOutline from "/images/bolt-lightning-outline.svg";
import { Icons } from "./Icons";

export const Container = ({ type, edit, containerLength, filled, setFilled }) => {
  //const [filledIcons, setFilledIcons] = useState(filled);

  //const containerLength = 12;

  const decrease = () => {
    if (filled != 0) {
      setFilled(filled - 1);
    }
  };

  const increase = () => {
    if (filled != containerLength) {
      setFilled(filled + 1);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        
          <button className="hover:opacity-50 w-4" onClick={decrease}>
            -
          </button>
      
        <div className="w-20 grid grid-cols-6 gap-0">
          {Array.from({ length: containerLength }, (_, index) => (
            <Icons key={index} icon={type} filled={index < filled} />
          ))}
        </div>

          <button className="hover:opacity-50 w-4" onClick={increase}>
            +
          </button>
      </div>
    </>
  );
};

Container.propTypes = {
  type: PropTypes.any,
  containerLength: PropTypes.number,
  edit: PropTypes.bool,
  filled: PropTypes.func,
  setFilled: PropTypes.func,
};
