import heart from "/images/heart-solid.svg";
import bolt from "/images/bolt-lightning-solid.svg";

export const Container = (type, filled) => {
  console.log("Container type:", type);

  console.log("Containers to be filled:", filled);

  const containerLength = 12;

  const iconClass = "w-2 h-2";

    const populate = (icon) => {
        for (let runs = 0; runs < containerLength; runs++){
          <img className={iconClass} src={icon} />
        }
    }
  return (
    <div className="flex">
          Container
        {populate(heart)}
      <img className={iconClass} src={heart} />
      <img className={iconClass} src={bolt} />
    </div>
  );
};
