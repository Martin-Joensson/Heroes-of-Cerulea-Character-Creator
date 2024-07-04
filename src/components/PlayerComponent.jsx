import playerTemplate from "../components/data/characterTemplate.json";

export const PlayerComponent = ({hero, edit}) => {
  const { player } = hero.player || playerTemplate;
  console.log(edit )

  let special = player.special.elf;
  let startingWeapon = player.inventory.startWeapon.elf;
  let might = player.stats.might;
  let bravery = player.stats.bravery;

  if (player.kin === "Elf") {
    special = player.special.elf;
    startingWeapon = player.inventory.startWeapon.elf;
  }
  if (player.kin === "Geon") {
    special = player.special.geon;
    startingWeapon = player.inventory.startWeapon.geon;
    might = player.stats.might + 1;
    bravery = player.stats.bravery - 1;
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
    might = player.stats.might - 1;
    bravery = player.stats.bravery + 1;
  }

  return (
    <div className="border mx-auto mt-2 rounded-lg p-2 max-w-[450px] flex flex-col items-center">
      <h2 className="text-xl">Name: {player.name}</h2>
      <div className="grid grid-cols-2">
        <div className="leftColumn w-52 m-auto">
          <p>Kin: {player.kin}</p>
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
      <div className="bottomRow flex gap-4">
        <p>Inventory: {player.inventory.space}</p>
        <p>Weapon: {startingWeapon}</p>
        <p>Special Item: {player.inventory.specialItem}</p>
        <p>Snacks: {player.inventory.snacks}</p>
        <p>Keys: {player.inventory.keys}</p>
        <p>Gems: {player.inventory.gems}</p>
        <p>Trinity: {player.inventory.trinity}</p>
      </div>
    </div>
  );
};
