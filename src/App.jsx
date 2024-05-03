import { useState } from "react";
import "./assets/fonts/EnterCommand.ttf";
import "./assets/fonts/EnterCommand-Bold.ttf";
import "./assets/fonts/EnterCommand-Italic.ttf";
import { PlayerComponent } from "./components/PlayerComponent";
import { Header } from "./components/Sections/Header";
import { RandomKin } from "./components/randomizers/RandomKin";
import { Button } from "./components/Button";

export const App = () => {
  const [name, setName] = useState("Hero");

  // Function expression to handle the input change and update the 'name' state to showcase how reactive data works in React through the use of hooks
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:"); // Show an alert to receive a value from the user
    if (newName) {
      setName(newName); // Update the name state with the new name if a value is provided
    }
  };

  return (
    <>
      <Header />
      <PlayerComponent />

      <RandomKin />
      <Button action={"random"} />
    </>
  );
};
