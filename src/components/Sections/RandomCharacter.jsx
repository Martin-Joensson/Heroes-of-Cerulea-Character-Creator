import { RandomColor } from '../randomizers/RandomColor'
import { RandomKin } from '../randomizers/RandomKin'
import { RandomName } from '../randomizers/RandomName'
import { RandomSpecialItem } from '../randomizers/RandomSpecialItem'

export const RandomCharacter = () => {
    const randHairColor = RandomColor();
    const randClothesColor = RandomColor();
    const randName = RandomName();
    const randSpecialItem = RandomSpecialItem();
    const randKin = RandomKin();


  return (
      <div>{randHairColor}{randClothesColor}</div>
  )
}
