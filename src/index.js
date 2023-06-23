import { createInterface } from "readline/promises";
import { homedir } from "os";
import { stdin as input, stdout as output } from "process";
import { newLine } from "./utils/newLine.js";
import path from "path";

const getUser = () => {
  if (process.argv.length > 3) return null;
  let [key, val] = process.argv[2].split("=");

  if (key === "--username") {
    return val.trim();
  }
  return null;
};

const userName = getUser();

if (userName) {
  process.chdir(homedir());

  console.log(path.resolve(process.cwd(), '..'))

  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${process.cwd()}`);

  const rl = createInterface({
    input,
    output,
  });

  rl.on("line", (input) => {
    newLine(input);
  });

  process.on("exit", () =>
    output.write(`Thank you for using File Manager, ${userName}, goodbye!`)
  );
  process.on("error", () => console.log("Operation failed"));
} else {
  console.log("Invalid input");
}
