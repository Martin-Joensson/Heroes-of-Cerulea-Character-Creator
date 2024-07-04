import { RandomKin } from "./randomizers/RandomKin";
import { RandomColor } from "./randomizers/RandomColor";
import { RandomName } from "./randomizers/RandomName";
import { RandomSpecialItem } from "./randomizers/RandomSpecialItem";
import playerTemplate from "../components/data/characterTemplate.json";

export const Button = ({ action, hero, setHero }) => {
  console.log(hero);

  const handleClick = () => {
    if (action === "random") {
      setHero((playerTemplate.player.name = RandomName()));
      setHero((playerTemplate.player.kin = RandomKin()));
      setHero((playerTemplate.player.hair = RandomColor()));
      setHero((playerTemplate.player.clothes = RandomColor()));
      setHero((playerTemplate.player.inventory.specialItem = RandomSpecialItem()));
      console.log(RandomKin());
      console.log(RandomColor());
      console.log(RandomName());
      console.log(RandomSpecialItem());
    }
  };

  return <button onClick={handleClick}>Click me for {action}</button>;
};
