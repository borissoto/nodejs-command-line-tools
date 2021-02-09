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

  console.log(filenames);
});

// const counterObject = require('./myscript.js');

// console.log(counterObject.getCounter());
// counterObject.incrementCounter();
// console.log(counterObject.getCounter());

// const newCounterObject = require('./myscript.js');

// console.log(newCounterObject.getCounter());
