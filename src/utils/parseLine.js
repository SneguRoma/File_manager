import { up } from "../nwd/up.js";
import { oneCommandArr, invMsg } from "./constants.js";

export const parseLine = (input) => {
  let arrayOfLine = input.trim().split(/\s+/);

  const command = arrayOfLine[0];
  if (
    arrayOfLine.length === 1 &&
    oneCommandArr.some((item) => item === command)
  ) {
    switch (command) {
      case "up":
        up();
        break;
    }
  } else console.log(invMsg);
  console.log(`You are currently in ${process.cwd()}`);
};
