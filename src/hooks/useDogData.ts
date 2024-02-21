import { useContext } from "react";
import { DogDataContext } from "../context/DogDataContext";

export const useDogData = () => {
  return useContext(DogDataContext);
};
