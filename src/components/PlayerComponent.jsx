import PropTypes from "prop-types";
import { useState } from "react";
import playerTemplate from "../components/data/characterTemplate.json";
import { Button } from "../components/Button";

export const PlayerComponent = ({ edit, setEdit, hero, setHero }) => {
  const { player } = playerTemplate;
  const [selectedName, setSelectedName] = useState(player.name);
  const [selectedKin, setSelectedKin] = useState(player.kin);
  const [selectedHair, setSelectedHair] = useState(player.hair);
  const [selectedClothes, setSelectedClothes] = useState(player.clothes);
  const [selectedSpecialItem, setSelectedSpecialItem] = useState(
    player.inventory.specialItem
  );
  const [selectedAttributeValues, setSelectedAttributeValues] = useState({
    select1: player.stats.might,
    select2: player.stats.bravery,
    select3: player.stats.insight,
  });

  let special = player.special.elf;
  let startingWeapon = player.inventory.startWeapon.elf;
  let might = player.stats.might;
  let bravery = player.stats.bravery;

  const kin = ["Elf", "Geon", "Avian", "Aquarian", "Seedling"];
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
  const attributeSelection = [3, 2, 1];
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

  if (player.kin === "Elf") {
    special = player.special.elf;
    startingWeapon = player.inventory.startWeapon.elf;
  }
  if (player.kin === "Geon") {
    special = player.special.geon;
    startingWeapon = player.inventory.startWeapon.geon;
    might = Number(player.stats.might) + 1;
    bravery = Number(player.stats.bravery) - 1;
  }
  if (player.kin === "Avian") {
    special = player.special.avian;
    startingWeapon = player.inventory.startWeapon.avian;
  }
  if (player.kin === "Aquarian") {
    special = player.special.aquarian;
    startingWeapon = player.inventory.startWeapon.aquarian;
  }
  if (player.kin === "Seedling") {
    special = player.special.seedling;
    startingWeapon = player.inventory.startWeapon.seedling;
    might = Number(player.stats.might) - 1;
    bravery = Number(player.stats.bravery) + 1;
  }

  const changeName = (event) => {
    setSelectedName(event.target.value);
    player.name = event.target.value;
  };

  const changeKin = (event) => {
    setSelectedKin(event.target.value);
    player.kin = event.target.value;
  };
  const changeHair = (event) => {
    setSelectedHair(event.target.value);
    player.hair = event.target.value;
  };
  const changeClothes = (event) => {
    setSelectedClothes(event.target.value);
    player.clothes = event.target.value;
  };
  const changeSpecialItem = (event) => {
    setSelectedSpecialItem(event.target.value);
    player.inventory.specialItem = event.target.value;
  };

  const changeAttribute = (event, selectName) => {
    const value = event.target.value;

    if (selectName === "select1") {
      player.stats.might = value;
    }
    if (selectName === "select2") {
      player.stats.bravery = value;
    }
    if (selectName === "select3") {
      player.stats.insight = value;
    }

    setSelectedAttributeValues((prevState) => ({
      ...prevState,
      [selectName]: value,
    }));
  };

  const getFilteredOptions = (currentSelect) => {
    const selectedSet = new Set(
      Object.values(selectedAttributeValues).filter((val) => val !== "")
    );
    return attributeSelection.filter(
      (option) =>
        !selectedSet.has(String(option)) ||
        selectedAttributeValues[currentSelect] === String(option)
    );
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {edit ? (
        <>
          <div className="border bg-cerulea-red text-text-light mx-auto mt-2 rounded-lg p-2 max-w-[500px] flex flex-col items-center">
            <h2 className="text-xl">
              Name: {player.name}
              <form onChange={changeName} onSubmit={preventDefault}>
                <input type="text" placeholder={player.name}></input>
              </form>
            </h2>
            <div className="flex flex-col tablet:grid tablet:grid-cols-2">
              <div className="leftColumn w-52 m-auto">
                <p>
                  Kin:{" "}
                  <select onChange={changeKin} value={selectedKin}>
                    {" "}
                    {kin.map((kin) => (
                      <option key={kin} value={kin}>
                        {kin}
                      </option>
                    ))}
                  </select>
                </p>
                <p>Special: {special}</p>
                <p>
                  Hair:{" "}
                  <select onChange={changeHair} value={selectedHair}>
                    {" "}
                    {colorSelection.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  Clothes:{" "}
                  <select onChange={changeClothes} value={selectedClothes}>
                    {" "}
                    {colorSelection.map((clothes) => (
                      <option key={clothes} value={clothes}>
                        {clothes}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <div className="rightColumn">
                <p>
                  Might:{" "}
                  <select
                    value={selectedAttributeValues.select1}
                    onChange={(e) => changeAttribute(e, "select1")}
                  >
                    <option value="">Select an option</option>
                    {getFilteredOptions("select1").map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  Bravery:{" "}
                  <select
                    value={selectedAttributeValues.select2}
                    onChange={(e) => changeAttribute(e, "select2")}
                  >
                    <option value="">Select an option</option>
                    {getFilteredOptions("select2").map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  Insight:{" "}
                  <select
                    value={selectedAttributeValues.select3}
                    onChange={(e) => changeAttribute(e, "select3")}
                  >
                    <option value="">Select an option</option>
                    {getFilteredOptions("select3").map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </p>
                <p>---</p>
                <p>Hearts: {player.hearts}</p>
                <p>Energy: {player.energy}</p>
              </div>
            </div>
            <div className="bottomRow flex gap-4">
              <p>Inventory: {player.inventory.space}</p>
              <p>Weapon: {startingWeapon}</p>
              <p>
                Special Item:{" "}
                <select
                  onChange={changeSpecialItem}
                  value={selectedSpecialItem}
                >
                  {" "}
                  {specialItemSelection.map((item) => (
                    <option key={item.itemName} value={item.itemName}>
                      {item.itemName}
                    </option>
                  ))}
                </select>
              </p>
              <p>Snacks: {player.inventory.snacks}</p>
              <p>Keys: {player.inventory.keys}</p>
              <p>Gems: {player.inventory.gems}</p>
              <p>Trinity: {player.inventory.trinity}</p>
            </div>
          </div>
          {edit ? null : (
            <Button
              action={"random"}
              hero={hero}
              setHero={setHero}
              setEdit={setEdit}
            />
          )}

          <Button
            action={"edit"}
            hero={hero}
            setHero={setHero}
            edit={edit}
            setEdit={setEdit}
          />
        </>
      ) : (
        <>
          <div className="border mx-auto mt-2 rounded-lg p-2 max-w-[500px] flex flex-col items-center">
            <h2 className="text-xl">Name: {player.name}</h2>
            <div className="flex flex-col tablet:grid tablet:grid-cols-2">
              <div className="leftColumn w-52 m-auto">
                <p>
                  <span className="text-cerulea-blue">Kin: </span> {player.kin}
                </p>
                <p>Special: {special}</p>
                <p>Hair: {player.hair}</p>
                <p>Clothes: {player.clothes}</p>
              </div>
              <div className="rightColumn">
                <p>Might: {might}</p>
                <p>Bravery: {bravery}</p>
                <p>Insight: {player.stats.insight}</p>
                <p>---</p>
                <p>Hearts: {player.hearts}</p>
                <p>Energy: {player.energy}</p>
              </div>
            </div>
            <div className="bottomRow flex flex-col tablet:flex-row gap-4">
              <p>Inventory: {player.inventory.space}</p>
              <p>Weapon: {startingWeapon}</p>
              <p>Special Item: {player.inventory.specialItem}</p>
              <p>Snacks: {player.inventory.snacks}</p>
              <p>Keys: {player.inventory.keys}</p>
              <p>Gems: {player.inventory.gems}</p>
              <p>Trinity: {player.inventory.trinity}</p>
            </div>
          </div>
          {edit ? null : (
            <Button
              action={"random"}
              hero={hero}
              setHero={setHero}
              setEdit={setEdit}
            />
          )}

          <Button
            action={"edit"}
            hero={hero}
            setHero={setHero}
            edit={edit}
            setEdit={setEdit}
          />
        </>
      )}
    </>
  );
};

PlayerComponent.propTypes = {
  hero: PropTypes.obj,
  setHero: PropTypes.func,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};
