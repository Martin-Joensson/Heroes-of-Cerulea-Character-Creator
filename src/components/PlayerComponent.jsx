export const PlayerComponent = () => {
  const player = {
    name: "Link",
    player: "you",
    kin: "Elf",
    special: "You can spend 1 ENERGY ahead of an ACTION ROLL to get +1D.",
    hair: "Blond",
    clothes: "Green",
    stats: 
      {
        might: 2,
        bravery: 3,
        insight: 1,
      },
    
    hearts: 3,
    energy: 3,
    inventory: {
      startWeapon: "Sword",
      specialItem: "Lantern",
      space: 4,
      snacks: 0,
      meals: 0,
      keys: 0,
      gems: 15,
      trinity: 0,
    },
  };

  console.log("Player componenet:", player);
  return (
    <div className="border rounded-lg p-2 flex flex-col">
      <h2 className="text-xl">My little Bio:</h2>
      <div className="grid grid-cols-2">
        <div className="leftColumn">
          <p>Name: {player.name}</p>
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
