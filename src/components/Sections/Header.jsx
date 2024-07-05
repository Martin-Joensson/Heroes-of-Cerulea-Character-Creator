import { NavLink } from "react-router-dom";
import elf from "/images/Elf.png";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <>
      <div className="relative flex top-0 left-0 bg-cerulea-gold text-black w-full">
        <NavLink to="/">
          <h1 className="p-2">Heroes of Cerulea - Character Creator</h1>
        </NavLink>
        <img
          src={elf}
          alt="elf"
          className="w-10 h-10 absolute bottom-0 right-2 no-print"
        />
      </div>

      <Navigation />
    </>
  );
};
