import { EOL, homedir, userInfo,arch } from "node:os";
import { cpu } from "./cpu.js";

export const os = (input) => {
  const command = input.slice(2);
  
  switch (command) {
    case "EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "cpus":
      cpu();
      break;
    case "homedir":
      console.log('homedir is - ', homedir());
      break;
    case "username":
      console.log('username is - ', userInfo().username);
      break;
    case "architecture":
      console.log('architecture is - ', arch());
      break;
  }
}