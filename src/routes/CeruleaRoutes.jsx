import { Route, Routes } from "react-router-dom";

import { Character } from "../pages/Character";
import { Home } from "../pages/Home";

export const CeruleaRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    );
}