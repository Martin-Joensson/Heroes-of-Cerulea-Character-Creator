import heart from "/images/heart-solid.svg";
import bolt from "/images/bolt-lightning-solid2.svg";
import heartOutline from "/images/heart-outline.svg";
import boltOutline from "/images/bolt-lightning-outline.svg";

export const Icons = ({ filled, icon }) => {
    let iconFilled = heart;
    let iconOutline = heartOutline;

    if (icon === "bolt") {
        iconFilled = bolt;
        iconOutline = boltOutline;
    }

  return (
    <img className="w-2" src={filled ? iconFilled : iconOutline} />
  );
};
