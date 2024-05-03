import { RandomKin } from "./randomizers/RandomKin";

export const Button = ({ action }) => {
  console.log(action);

  return <button onClick={RandomKin}>Click me for {action}</button>;
};
