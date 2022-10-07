import { NEXT_SCREEN } from "../constants";

export function moveScreen() {
  return {
    type: NEXT_SCREEN,
  };
}