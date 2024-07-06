import PropTypes from "prop-types";
import { PlayerComponent } from "../components/PlayerComponent";

export const Character = ({ hero, setHero, edit, setEdit }) => {
  return (
    <PlayerComponent
      hero={hero}
      setHero={setHero}
      edit={edit}
      setEdit={setEdit}
    />
  );
};

Character.propTypes = {
  hero: PropTypes.any,
  setHero: PropTypes.func,
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
};
