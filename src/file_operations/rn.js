import fs from "node:fs";
import path from "path";
import { errorMsg } from "../utils/constants.js";

export const rn = async (pathToFile, newFilename) => {
  const dirPath = path.resolve(pathToFile); 
  fs.rename(dirPath, newFilename, (err) => {
    if (err) console.log(errorMsg);
    console.log("Rename completed!");
  });
};
