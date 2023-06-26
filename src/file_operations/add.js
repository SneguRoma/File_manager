import { errorMsg } from "../utils/constants.js";
import { writeFile } from "node:fs";
import path from "path";

export const add = async (input) => {
  const fileAdd = path.resolve(input);

  writeFile(fileAdd, "", { flag: "ax" }, (err) => {
    if (err) console.log(errorMsg);
    else console.log("Data has been writed!");
  });
};
