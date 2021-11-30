let timer = function(num, dot)  {
    setTimeout(() => {
        process.stdout.write(`\r${dot}   `);
      }, num);
}

timer(3000, ".");
timer(5000, ".");
timer(9000, ".");
timer(10000, ".");
timer(15000, ".");
