import { createReadStream, createWriteStream } from "node:fs";
import { errorMsg } from "../utils/constants.js";
import path from "path";
import { pipeline } from "stream/promises";

export const cp = async (fileToRead, fileToWrite) => {
  const fileRead = path.resolve(fileToRead);
  const { base } = path.parse(fileRead);
  const fileWrite = path.resolve(fileToWrite, base);
  try {
    const readStream = createReadStream(fileRead, "utf-8");
    const wrightStream = createWriteStream(fileWrite, "utf-8");
    await pipeline(readStream, wrightStream);    
    console.log("Data has been copied!");
  } catch (err) {
    console.log(errorMsg);
  }
};
