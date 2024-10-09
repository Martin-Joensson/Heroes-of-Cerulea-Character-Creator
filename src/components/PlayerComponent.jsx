import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Container } from "./Container";
import { Inventory } from "./Inventory";

export const PlayerComponent = ({ edit, setEdit, hero, setHero }) => {
  const player = hero;
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
  const [largePouch, setLargePouch] = useState(false);
  const [snacks, setSnacks] = useState(player.inventory.snacks);
  const [keys, setKeys] = useState(player.inventory.keys);
  const [gems, setGems] = useState(player.inventory.gems);
  const [trinity, setTrinity] = useState(player.inventory.trinity);

  const [hearts, setHearts] = useState(player.hearts);
  const [energy, setEnergy] = useState(player.energy);
  const [maxHearts, setMaxHearts] = useState(player.maxHearts);
  const [maxEnergy, setMaxEnergy] = useState(player.maxEnergy);

  useEffect(() => {
    setSelectedName(hero.name);
    setSelectedKin(hero.kin);
    setSelectedHair(hero.hair);
    setSelectedClothes(hero.clothes);
    setSelectedSpecialItem(hero.inventory.specialItem);
    setHearts(hero.hearts);
    setEnergy(hero.energy);
    setMaxHearts(hero.maxHearts);
    setMaxEnergy(hero.maxEnergy);
    setSelectedAttributeValues({
      select1: hero.stats.might,
      select2: hero.stats.bravery,
      select3: hero.stats.insight,
    });
    setLargePouch(false);
    setSnacks(hero.inventory.snacks);
    setKeys(hero.inventory.keys);
    setGems(hero.inventory.gems);
    setTrinity(hero.inventory.trinity);
  }, [hero]);

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
          <div className="border bg-cerulea-green text-text-light mx-auto mt-2 rounded-lg p-2 max-w-[500px] flex flex-col items-center">
            <h2 className="text-xl">
              <form onChange={changeName} onSubmit={preventDefault}>
                <label>Name: </label>
                <input type="text" placeholder={selectedName}></input>
              </form>
            </h2>
            <div className="flex flex-col tablet:grid tablet:grid-cols-2">
              <div className="leftColumn w-52 m-auto">
                <div>
                  Kin:{" "}
                  <select onChange={changeKin} value={selectedKin}>
                    {" "}
                    {kin.map((kin) => (
                      <option key={kin} value={kin}>
                        {kin}
                      </option>
                    ))}
                  </select>
                </div>
                <div>Special: {special}</div>
                <div>
                  Hair:{" "}
                  <select onChange={changeHair} value={selectedHair}>
                    {" "}
                    {colorSelection.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  Clothes:{" "}
                  <select onChange={changeClothes} value={selectedClothes}>
                    {" "}
                    {colorSelection.map((clothes) => (
                      <option key={clothes} value={clothes}>
                        {clothes}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="rightColumn">
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>---</div>
                <div>
                  Hearts:{" "}
                  <Container
                    type="heart"
                    edit={edit}
                    filled={hearts}
                    setFilled={setHearts}
                    containerLength={maxHearts}
                  />
                  Max:
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setMaxHearts(maxHearts - 1)}
                  >
                    -
                  </button>
                  {maxHearts}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setMaxHearts(maxHearts + 1)}
                  >
                    +
                  </button>{" "}
                </div>
                <div>
                  Energy:{" "}
                  <Container
                    type="bolt"
                    edit={edit}
                    filled={energy}
                    setFilled={setEnergy}
                    containerLength={maxEnergy}
                  />
                  Max:
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setMaxEnergy(maxEnergy - 1)}
                  >
                    -
                  </button>
                  {maxEnergy}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setMaxEnergy(maxEnergy + 1)}
                  >
                    +
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="w-full justify-center">
              {" "}
              <Inventory
                largePouch={largePouch}
                size={player.inventory.space}
                slot1={startingWeapon}
                slot2={
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
                }
                slot3={
                  <form onChange={changeName} onSubmit={preventDefault}>
                    <label> Add item: </label>
                    <input type="text" placeholder={player.name}></input>
                  </form>
                }
              />
              <button
                className="bg-[#242424] p-2"
                onClick={() => setLargePouch(!largePouch)}
              >
                {largePouch ? "Remove large pouch?" : "Add large pouch?"}
              </button>
            </div>
            <div className="bottomRow flex gap-4">
              <div>
                Snacks:{" "}
                <div className="flex">
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setSnacks(snacks - 1)}
                  >
                    -
                  </button>{" "}
                  {snacks}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setSnacks(snacks + 1)}
                  >
                    +
                  </button>{" "}
                </div>
              </div>
              <div>
                Keys:{" "}
                <div className="flex">
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setKeys(keys - 1)}
                  >
                    -
                  </button>{" "}
                  {keys}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setKeys(keys + 1)}
                  >
                    +
                  </button>{" "}
                </div>
              </div>
              <div>
                Gems:{" "}
                <div className="flex">
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setGems(gems - 1)}
                  >
                    -
                  </button>{" "}
                  {gems}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setGems(gems + 1)}
                  >
                    +
                  </button>{" "}
                </div>
              </div>
              <div>
                Trinity:{" "}
                <div className="flex">
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setTrinity(trinity - 1)}
                  >
                    -
                  </button>{" "}
                  {trinity}
                  <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setTrinity(trinity + 1)}
                  >
                    +
                  </button>{" "}
                </div>
              </div>
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
                <p>
                  <span className="text-cerulea-blue">Special:</span> {special}
                </p>
                <p>---</p>
                <p>
                  <span className="text-cerulea-blue">Hair:</span> {player.hair}
                </p>
                <p>
                  <span className="text-cerulea-blue">Clothes:</span>{" "}
                  {player.clothes}
                </p>
              </div>
              <div className="rightColumn">
                <p>
                  <span className="text-cerulea-green">Might:</span> {might}
                </p>
                <p>
                  <span className="text-cerulea-green">Bravery:</span> {bravery}
                </p>
                <p>
                  <span className="text-cerulea-green">Insight:</span>{" "}
                  {player.stats.insight}
                </p>

                <div>
                  <span className="text-cerulea-red">Hearts:</span>{" "}
                  <div>
                    <Container
                      type="heart"
                      edit={edit}
                      filled={hearts}
                      setFilled={setHearts}
                      containerLength={maxHearts}
                    />
                  </div>
                </div>
                <div>
                  <span className="text-cerulea-gold">Energy:</span>{" "}
                  <Container
                    type="bolt"
                    edit={edit}
                    filled={energy}
                    setFilled={setEnergy}
                    containerLength={maxEnergy}
                  />
                </div>
              </div>
            </div>
            <div className="w-full justify-center">
              {" "}
              <Inventory
                largePouch={largePouch}
                size={player.inventory.space}
                slot1={startingWeapon}
                slot2={player.inventory.specialItem}
              />
            </div>
            <div className="bottomRow flex flex-col mt-4 tablet:flex-row tablet:gap-4">
              <div>
                Snacks:{" "}
                <div className="flex justify-center">
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setSnacks(snacks - 1)}
                  >
                    -
                  </button>{" "} */}
                  {snacks}
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setSnacks(snacks + 1)}
                  >
                    +
                  </button>{" "} */}
                </div>
              </div>
              <div>
                Keys:{" "}
                <div className="flex justify-center">
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setKeys(keys - 1)}
                  >
                    -
                  </button>{" "} */}
                  {keys}
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setKeys(keys + 1)}
                  >
                    +
                  </button>{" "} */}
                </div>
              </div>
              <div>
                Gems:{" "}
                <div className="flex justify-center">
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setGems(gems - 1)}
                  >
                    -
                  </button>{" "} */}
                  {gems}
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setGems(gems + 1)}
                  >
                    +
                  </button>{" "} */}
                </div>
              </div>
              <div>
                Trinity:{" "}
                <div className="flex justify-center">
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setTrinity(trinity - 1)}
                  >
                    -
                  </button>{" "} */}
                  {trinity}
                  {/* <button
                    className="hover:opacity-50 w-4"
                    onClick={() => setTrinity(trinity + 1)}
                  >
                    +
                  </button>{" "} */}
                </div>
              </div>
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
          <Button
            action={"print"}
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
  hero: PropTypes.any,
  setHero: PropTypes.func,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};
