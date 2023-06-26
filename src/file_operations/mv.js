import { createReadStream, createWriteStream, unlink } from "node:fs";
import { errorMsg } from "../utils/constants.js";
import path from "path";
import { pipeline } from "stream/promises";

export const mv = async (fileToRead, fileToWrite) => {
  const fileRead = path.resolve(fileToRead);
  const { base } = path.parse(fileRead);
  const fileWrite = path.resolve(fileToWrite, base);

  try {
    const readStream = createReadStream(fileRead);
    const wrightStream = createWriteStream(fileWrite);
    await pipeline(readStream, wrightStream);

    unlink(fileRead, (err) => {
      if (err) console.log(errorMsg);
      console.log("Data has been moved!");
    });
  } catch (err) {
    console.log(errorMsg);
  }
};
