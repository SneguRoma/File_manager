import { createReadStream } from "node:fs";
import path from "path";
import { stdout } from "node:process";
import { errorMsg } from "../utils/constants.js";

export const cat = async (input) => {
  try {
    const fileRead = path.resolve(input);
    const stream = createReadStream(fileRead, "utf-8");
    stream.pipe(stdout);
    stream.on("end", console.log);
  } catch (err) {
    console.log(errorMsg);
  }
};
