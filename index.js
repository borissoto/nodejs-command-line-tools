#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// OPTION CODE #2  Method #2
// const util = require('util');
// const lstat = util.promisify(fs.lstat);
// OPTION CODE #2  Method #2
// OPTION CODE #2 Method#3
const { lstat } = fs.promises;
// OPTION CODE #2 Method #3

// console.log(process.argv);
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  // EITHER
  // err === an error object, wihc means something went wrong
  // OR
  // err === null, which menas everything is OK

  if (err) {
    //   error handling code here
    console.log(err);
  }
  // console.log(filenames);

  // OPTION CODE #3 "Good solution"
  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });
  const allStats = await Promise.all(statPromises);
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);
    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.bold.greenBright(filenames[index]));
    }
  }
  // OPTION CODE #3 "Good solution"

  // OPTION CODE #2 Method #1#2#3
  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);
  //     console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // OPTION CODE #2 Method #1#2#3

  // OPTION CODE HERE!
  // const allStats = Array(filenames.length).fill(null);
  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename);
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     allStats[index] = stats;

  //     const ready = allStats.every((stats) => {
  //       return stats;
  //     });

  //     if (ready) {
  //       allStats.forEach((stats, index) => {
  //         console.log(filenames[index], stats.isFile());
  //       });
  //     }
  //   });
  // }
  // OPTION CODE COMPLETE
});

// OPTION CODE #2 Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
// COMPLETE OPTION CODE #2

// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter());
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript.js');

// console.log(newCounterObject.getCounter());
