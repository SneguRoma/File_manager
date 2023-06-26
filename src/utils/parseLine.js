import { up } from "../nwd/up.js";
import { cd } from "../nwd/cd.js";
import { ls } from "../nwd/ls.js";
import { cat } from "../file_operations/cat.js";
import { add } from "../file_operations/add.js";
import { rn } from "../file_operations/rn.js";
import { cp } from "../file_operations/cp.js";
import { mv } from "../file_operations/mv.js";
import { rm } from "../file_operations/rm.js";
import {
  oneCommandArr,
  twoCommandArr,
  threeCommandArr,
  invMsg,
} from "./constants.js";

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
  } else if (
    arrayOfLine.length === 2 &&
    twoCommandArr.some((item) => item === command)
  ) {
    switch (command) {
      case "cd":
        cd(arrayOfLine[1]);
        break;
      case "cat":
        await cat(arrayOfLine[1]);
        break;
      case "add":
        await add(arrayOfLine[1]);
        break;
      case "rm":
        await rm(arrayOfLine[1]);
        break;
    }
  } else if (
    arrayOfLine.length === 3 &&
    threeCommandArr.some((item) => item === command)
  ) {
    switch (command) {
      case "rn":
        rn(arrayOfLine[1], arrayOfLine[2]);
        break;
      case "cp":
        await cp(arrayOfLine[1], arrayOfLine[2]);
        break;
      case "mv":
        await mv(arrayOfLine[1], arrayOfLine[2]);
        break;
    }
  } else console.log(invMsg);
};
