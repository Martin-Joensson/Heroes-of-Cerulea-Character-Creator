import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";

import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Monster } from "../pages/Monster";
import { Shop } from "../pages/Shop";
import { Dungeon } from "../pages/Dungeon";

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
      <Route path="/monster" element={<Monster />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/dungeon" element={<Dungeon />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

CeruleaRoutes.propTypes = {
  hero: PropTypes.any,
  setHero: PropTypes.func,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};
