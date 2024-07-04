import playerTemplate from "../components/data/characterTemplate.json";

export const PlayerComponent = (hero, setHero) => {
  const { player } = hero.player || playerTemplate;
  console.log("Player componenet:", player);

  return (
    <div className="border rounded-lg p-2 flex flex-col items-center">
      <h2 className="text-xl">Name: {player.name}</h2>
      <div className="grid grid-cols-2">
        <div className="leftColumn">
          <p>Kin: {player.kin}</p>
          <p>Special: {player.special}</p>
          <p>Hair: {player.hair}</p>
          <p>Clothes: {player.clothes}</p>
        </div>
        <div className="rightColumn">
          <p>Might: {player.stats.might}</p>
          <p>Bravery: {player.stats.bravery}</p>
          <p>Insight: {player.stats.insight}</p>
          <p>Hearts: {player.hearts}</p>
          <p>Energy: {player.energy}</p>
        </div>
      </div>
      <div className="bottomRow flex gap-4">
        <p>Inventory: {player.inventory.space}</p>
        <p>Weapon: {player.inventory.startWeapon}</p>
        <p>Special Item: {player.inventory.specialItem}</p>
        <p>Snacks: {player.inventory.snacks}</p>
        <p>Keys: {player.inventory.keys}</p>{" "}
        <p>Gems: {player.inventory.gems}</p>{" "}
        <p>Trinity: {player.inventory.trinity}</p>
      </div>
    </div>
  );
};
