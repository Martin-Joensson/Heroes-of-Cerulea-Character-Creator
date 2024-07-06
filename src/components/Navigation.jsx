import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="w-full no-print flex flex-wrap bg-cerulea-gold mb-10">
      <NavLink className="flex-grow bg-cerulea-blue" to="/">
        <button
          aria-label="Link to Character generator"
          className="nav-button w-full "
        >
          Home
        </button>
      </NavLink>
      <NavLink className="flex-grow bg-cerulea-green" to="/character">
        <button
          aria-label="Link to Character generator"
          className="nav-button w-full "
        >
          Character Generator
        </button>
      </NavLink>
      <NavLink className="hidden flex-grow bg-cerulea-green" to="/monster">
        <button
          aria-label="Link to Character generator"
          className="nav-button flex-grow w-full "
        >
          Monster/Boss Generator
        </button>
      </NavLink>
      <NavLink className="hidden flex-grow bg-cerulea-green" to="/shop">
        <button
          aria-label="Link to Character generator"
          className="nav-button flex-grow w-full "
        >
          Shop/Treasure Generator
        </button>
      </NavLink>
      <NavLink className="hidden flex-grow bg-cerulea-green" to="/dungeon">
        <button
          aria-label="Link to Character generator"
          className="nav-button flex-grow w-full "
        >
          Dungeon Generator
        </button>
      </NavLink>
    </div>
  );
};
