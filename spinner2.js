const spinner2 = function () {
  let array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
  let time = 500;
  for (const symbol of array) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}   `);
    }, time);
    time += 100;
  }
};

spinner2();

