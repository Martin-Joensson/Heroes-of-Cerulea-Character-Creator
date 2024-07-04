import { useState } from "react";
import "./assets/fonts/EnterCommand.ttf";
import "./assets/fonts/EnterCommand-Bold.ttf";
import "./assets/fonts/EnterCommand-Italic.ttf";
import { PlayerComponent } from "./components/PlayerComponent";
import { Header } from "./components/Sections/Header";
import { Button } from "./components/Button";
import { RandomCharacter } from "./components/Sections/RandomCharacter";
import playerTemplate from "./components/data/characterTemplate.json";

export const App = () => {
  const [hero, setHero] = useState({ playerTemplate });
  console.log(hero)

  // Function expression to handle the input change and update the 'name' state to showcase how reactive data works in React through the use of hooks
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:"); // Show an alert to receive a value from the user
    if (newName) {
      setHero.name(newName); // Update the name state with the new name if a value is provided
    }
  };

  return (
    <>
      <Header />
      <PlayerComponent hero={hero} setHero={setHero} />

      <RandomCharacter />
      <Button action={"random"} hero={hero}  setHero={setHero} />
    </>
  );
};
