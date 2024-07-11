import { useState } from "react";
import "./assets/fonts/EnterCommand.ttf";
import "./assets/fonts/EnterCommand-Bold.ttf";
import "./assets/fonts/EnterCommand-Italic.ttf";
import { Header } from "./components/Sections/Header";

import playerTemplate from "./components/data/characterTemplate.json";
import { Footer } from "./components/Sections/Footer";
import { CeruleaRoutes } from "./routes/CeruleaRoutes";
import { Container } from "./components/Container";

export const App = () => {
  const player = playerTemplate.player;
  const [hero, setHero] = useState(player);
  const [edit, setEdit] = useState(false);
  const [filledIcons, setFilledIcons] = useState(3);

  return (
    <div className="relative min-h-[100vh] ">
      <div className="pb-28">
        <Header />
        <CeruleaRoutes
          hero={hero}
          setHero={setHero}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <Footer />
    </div>
  );
};
