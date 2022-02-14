import { BUY_PASTAS } from "./pastasTypes";
import { EAT_PASTAS } from "./pastasTypes";

export const buyPastas = () => {
  return {
    type: BUY_PASTAS,
  };
};

export const eatPastas = () => {
  return {
    type: EAT_PASTAS,
  };
};
