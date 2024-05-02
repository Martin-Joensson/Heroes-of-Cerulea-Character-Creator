import { useState } from "react";
import "./assets/fonts/EnterCommand.ttf";
import "./assets/fonts/EnterCommand-Bold.ttf";
import "./assets/fonts/EnterCommand-Italic.ttf";
import { PlayerComponent } from "./components/PlayerComponent";

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
      <p className="font-enterCommand text-sm">Find me in APP.jsx Small</p>
      <p className="font-enterCommand text-base">Find me in APP.jsx Base</p>
      <p className="font-enterCommand text-lg">Find me in APP.jsx Large</p>
      <p className="font-enterCommand text-xl">Find me in APP.jsx XL</p>
      <p className="font-enterCommand text-2xl">Find me in APP.jsx XXL</p>
      <p className="font-enterCommand text-4xl">Find me in APP.jsx XXXL</p>
      <PlayerComponent />
    </>
  );
};
