import fs from "node:fs";
import path from "path";
import { errorMsg } from "../utils/constants.js";

export const rn = async (path_to_file, new_filename) => {
  const dirPath = path.resolve(path_to_file); 
  fs.rename(dirPath, new_filename, (err) => {
    if (err) console.log(errorMsg);
    console.log("Rename completed!");
  });
};
