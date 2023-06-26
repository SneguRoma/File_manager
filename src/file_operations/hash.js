import { createReadStream } from "node:fs";
import { errorMsg } from "../utils/constants.js";
import path from "path";

const { createHash } = await import("node:crypto");

export const hash = async (input) => {
  try {
    const fileRead = path.resolve(input);
    const stream = createReadStream(fileRead);
    const hash = createHash("sha256");

    stream.on("readable", () => {
      const data = stream.read();
      if (data) hash.update(data);
      else {
        console.log(`${fileRead} hash - ${hash.digest("hex")} `);
      }
    });
  } catch (err) {
    console.log(errorMsg);
  }
};
