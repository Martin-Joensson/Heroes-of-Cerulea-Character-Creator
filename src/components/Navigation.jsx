import { NavLink, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap bg-cerulea-gold mb-10">
      <NavLink to="/">
        <button
          aria-label="Link to Character generator"
          className="nav-button bg-cerulea-blue"
        >
          Home
        </button>
      </NavLink>
      <NavLink to="/character">
        <button
          aria-label="Link to Character generator"
          className="nav-button bg-cerulea-green"
        >
          Character Generator
        </button>
      </NavLink>
      <NavLink to="/">
        <button
          aria-label="Link to Character generator"
          className="nav-button bg-cerulea-green"
        >
          Monster/Boss Generator
        </button>
      </NavLink>
      <NavLink to="/">
        <button
          aria-label="Link to Character generator"
          className="nav-button bg-cerulea-green"
        >
          Shop/Treasure Generator
        </button>
      </NavLink>
      <NavLink to="/">
        <button
          aria-label="Link to Character generator"
          className="nav-button bg-cerulea-green"
        >
          Dungeon Generator
        </button>
      </NavLink>
    </div>
  );
};
