import { parseLine } from "./parseLine.js";

export function newLine(input, rl) {
  if (input.indexOf(".exit") != -1 && input.trim().split(' ').length === 1) {
    rl.close();
    process.exit();
  }
  else {
    parseLine(input).then(console.log(`You are currently in ${process.cwd()}`));
  }
}