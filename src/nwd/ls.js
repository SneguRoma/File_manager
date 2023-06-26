import { readdir } from "node:fs";
import { errorMsg } from "../utils/constants.js";

export const ls = async () => {
  readdir(process.cwd(), { withFileTypes: true }, (err, data) => {
    if (err) console.log(errorMsg);
    const directories = data
      .filter((file) => file.isDirectory())
      .map((file) => {
        return { Name: file.name, Type: "directory" };
      })
      .sort();
    const files = data
      .filter((file) => file.isFile())
      .map((file) => {
        return { Name: file.name, Type: "file" };
      })
      .sort();
    const list = directories.concat(files);
    console.table(list);
  });
};
