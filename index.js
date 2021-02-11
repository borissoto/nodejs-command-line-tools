#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  // EITHER
  // err === an error object, wihc means something went wrong
  // OR
  // err === null, which menas everything is OK

  if (err) {
    //   error handling code here
    console.log(err);
  }
  // console.log(filenames);

  // BAD CODE HERE!
  const allStats = Array(filenames.length).fill(null);
  for (let filename of filenames) {
    const index = filenames.indexOf(filename);
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;

      const ready = allStats.every((stats) => {
        return stats;
      });

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
  // BAD CODE COMPLETE
});

// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter());
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript.js');

// console.log(newCounterObject.getCounter());
