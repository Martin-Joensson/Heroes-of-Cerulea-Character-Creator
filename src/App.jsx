import { useState } from "react";
import "./assets/fonts/EnterCommand.ttf";
import "./assets/fonts/EnterCommand-Bold.ttf";
import "./assets/fonts/EnterCommand-Italic.ttf";
import { PlayerComponent } from "./components/PlayerComponent";
import { Header } from "./components/Sections/Header";
import { Button } from "./components/Button";
import playerTemplate from "./components/data/characterTemplate.json";
import { Footer } from "./components/Sections/Footer";
import { CeruleaRoutes } from "./routes/CeruleaRoutes";

export const App = () => {
  const [hero, setHero] = useState({ playerTemplate });
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Header />
      <CeruleaRoutes />
      <PlayerComponent hero={hero} setHero={setHero} edit={edit} />
      {edit ? null : (
        <Button
          action={"random"}
          hero={hero}
          setHero={setHero}
          setEdit={setEdit}
        />
      )}

      <Button
        action={"edit"}
        hero={hero}
        setHero={setHero}
        edit={edit}
        setEdit={setEdit}
      />
      <Footer />
    </>
  );
};
