import { unlink } from "node:fs";
import { errorMsg } from "../utils/constants.js";
import path from "path";

export const rm = async (file) => {
  const fileToRemove = path.resolve(file);

  unlink(fileToRemove, (err) => {
    if (err) console.log(errorMsg);
    console.log("Data has been removed!");
  });
};
