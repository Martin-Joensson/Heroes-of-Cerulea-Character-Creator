import { Route, Routes } from "react-router-dom";

import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const CeruleaRoutes = ({ hero, setHero, edit, setEdit }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/character"
        element={
          <Character
            hero={hero}
            setHero={setHero}
            edit={edit}
            setEdit={setEdit}
          />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
