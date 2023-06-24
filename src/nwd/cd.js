import path from "path";
import { errorMsg } from "../utils/constants.js";

export const cd = (input) => {
  try {
    let selectDirectory = path.resolve(input);

    if (input.endsWith(":") && input.length === 2) {
      selectDirectory = path.parse(selectDirectory).root;
    }

    process.chdir(selectDirectory);
  } catch (err) {
    console.log(errorMsg);
  }
};
