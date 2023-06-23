export function newLine(input) {
  if (input.indexOf(".exit") != -1 && input.trim().split(' ').length === 1) {
    rl.close();
    process.exit();
  }
  else {
    console.log('Invalid input');
  }
}