import { NavLink } from "react-router-dom";
import group from "/images/hammer.png";
import logo from "/images/Logo.png";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <>
      <div className="relative top-0 left-0 bg-cerulea-gold text-black w-full">
        <NavLink to="/">
          <img src={group} alt="elf" className="w-40 m-auto no-print" />
          <p className="">COMPATIBLE WITH</p>
          <img
            src={logo}
            alt="Heroes of Cerulea logo"
            className="w-40 m-auto"
          />
          <h1 className="text-xxl no-print p-2 m-auto text-text-light">
            Heroes of Cerulea - Digital tools
          </h1>
        </NavLink>
      </div>

      <Navigation />
    </>
  );
};
