import { NEXT_SCREEN } from "../constants";

export function moveScreen() {
    console.log("increment");
  return {
    type: NEXT_SCREEN,
  };
}