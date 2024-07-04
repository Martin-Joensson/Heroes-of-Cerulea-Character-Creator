import { RandomKin } from "./randomizers/RandomKin";
import { RandomColor } from "./randomizers/RandomColor";
import { RandomName } from "./randomizers/RandomName";
import { RandomSpecialItem } from "./randomizers/RandomSpecialItem";
import { RandomAttributes } from "./randomizers/RandomAttributes";
import playerTemplate from "../components/data/characterTemplate.json";

export const Button = ({ action, setHero, edit, setEdit }) => {
  const handleClick = (event) => {
    console.log(event);
    let attributes = RandomAttributes();

    if (action === "random") {
      setHero((playerTemplate.player.name = RandomName()));
      setHero((playerTemplate.player.kin = RandomKin()));
      setHero((playerTemplate.player.hair = RandomColor()));
      setHero((playerTemplate.player.clothes = RandomColor()));
      setHero(
        (playerTemplate.player.inventory.specialItem = RandomSpecialItem())
      );
      setHero((playerTemplate.player.stats.might = attributes[0]));
      setHero((playerTemplate.player.stats.bravery = attributes[1]));
      setHero((playerTemplate.player.stats.insight = attributes[2]));
    }

    if (action === "edit") {
      setEdit(!edit);
    }
  };

  return (
    <button className="no-print m-2" onClick={handleClick}>
      Click me for {action}
    </button>
  );
};
