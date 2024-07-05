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
