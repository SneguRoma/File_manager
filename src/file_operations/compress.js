import { createBrotliCompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { errorMsg } from "../utils/constants.js";
import path from "path";

export const compress = async (fileForZip, destination) => {
  try {
    const fileRead = path.resolve(fileForZip);
    const { base } = path.parse(fileRead);
    const brotliFile = path.resolve(destination, base + ".gz");
    const gbrotli = createBrotliCompress();
    const source = createReadStream(fileRead);
    const destinationWriteStream = createWriteStream(brotliFile);

    pipeline(source, gbrotli, destinationWriteStream, (err) => {
      if (err) {
        console.log(errorMsg);
        process.exitCode = 1;
      }
    });
    console.log("Data has been compressed!");
  } catch (err) {
    console.log(errorMsg);
  }
};
