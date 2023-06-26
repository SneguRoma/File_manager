import { createBrotliDecompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { errorMsg } from "../utils/constants.js";
import path from "path";

export const decompress = async (fileFromZip, destination) => {
  try {
    const fileRead = path.resolve(fileFromZip);
    const { name } = path.parse(fileRead);
    const brotliFile = path.resolve(destination, name);
    const gbrotli = createBrotliDecompress();
    const source = createReadStream(fileRead);
    const destinationWriteStream = createWriteStream(brotliFile);

    pipeline(source, gbrotli, destinationWriteStream, (err) => {
      if (err) {
        console.log(errorMsg);
        process.exitCode = 1;
      }
    });
    console.log("Data has been decompressed!");
  } catch (err) {
    console.log(errorMsg);
  }
};

