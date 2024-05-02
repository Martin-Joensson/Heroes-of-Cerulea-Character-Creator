export const PlayerComponent = () => {
  const player = {
    name: "Link",
    player: "you",
    kin: "Elf",
    special: "You can spend 1 ENERGY ahead of an ACTION ROLL to get +1D.",
    hair: "Blond",
    clothes: "Green",
    stats: [
      {
        might: 2,
        bravery: 3,
        insight: 1,
      },
    ],
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
    <div className="border rounded-lg p-2">
      <h2 className="text-xl">My little Bio:</h2>
      <p>Name: {player.name}</p>
      <p>Special: {player.special}</p>
      <p>Hair: {player.hair}</p>
      <p>Clothes: {player.clothes}</p>
      <p>Weapon: {player.inventory.startWeapon}</p>
    </div>
  );
};
