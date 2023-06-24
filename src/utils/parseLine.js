import { up } from "../nwd/up.js";
import { cd } from "../nwd/cd.js";
import { ls } from "../nwd/ls.js";
import { oneCommandArr, twoCommandArr, invMsg } from "./constants.js";

export const parseLine = async (input) => {
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
      case "ls":
        await ls();
        break;
    }
  } else   if (
    arrayOfLine.length === 2 &&
    twoCommandArr.some((item) => item === command)
  ) {
    switch (command) {
      case "cd":
        console.log(arrayOfLine[1])
        cd(arrayOfLine[1]);
        break;
    }
  } else console.log(invMsg);
  
};
