export const GeneralItem = () => {
  const generalItems = [
    {
      name: "Particular key",
      description:
        "Only opens a particular lock. Doesn't have to be an actual key or an actual lock.",
    },
    {
      name: "Bottle",
      description: "Can hold a potion, bug, or pixie.",
    },
    {
      name: "Power Bracelet",
      description: "+1D for non-combat strength rolls.",
    },
    {
      name: "Hero's Shield",
      description: "+1D for DEFEND rolls.",
    },
    {
      name: "Dowsing Rod",
      description: "Vibrates in rooms where something is hidden.",
    },
    {
      name: "Magic Flute",
      description:
        "The user can summon a portal to the closest town. The portal stays open until heroes travel back through it. If a new portal opens, the previous portal closes.",
    },
    {
      name: "Large Pouch",
      description:
        "Grants a total of 8 inventory slots. Replaces a small pouch.",
    },
    {
      name: "Hero's Tunic",
      description: "+1D for non-combat acrobatic rolls.",
    },
    {
      name: "Shock Ring",
      description: "Grants immunity to electricity.",
    },
    {
      name: "Frost Ring",
      description: "Grants immunity to cold.",
    },
    {
      name: "Flame Ring",
      description: "Grants immunity to fire.",
    },
    {
      name: "Hero's Bow",
      description: "+1D for ranged ATTACK rolls. Unlimited arrows.",
    },
    {
      name: "Hero's Sword",
      description: "+1D for melee ATTACK rolls.",
    },
    {
      name: "Hero's Armor",
      description:
        "Any time the wearer would lose a HEART, they lose half a HEART instead. (Use a pen to draw lines down the middle of your HEART symbols).",
    },
    {
      name: "Big Sword",
      description: "Successful attacks deplete 2 monster HEARTS.",
    },
    {
      name: "Monster Mask",
      description:
        "Monsters (but not bosses) ignore the wearer as long as the wearer doesn’t attack.",
    },
  ];
  return (
    <div className="border mb-10">
      <h2>General Items</h2>
      <div className="flex flex-col">
        {generalItems.map((item, index) => (
          <div className="border p-2 m-2" key={index}>
            <p className="font-enterCommandBold"> {item.name}</p>
            <p className="leading-none">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
