'use strict';

import { readFileSync } from 'fs';

const file = readFileSync('./src/js/input.txt', 'utf-8');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

let inputString = '' as string; //[1, 1, 0, -1, -1];
// let inputString = '[1, 1, 0, -1, -1]';
let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
//   console.log('input string: ', inputString);
// });
let inputArray = [] as Array<string>;

// process.stdin.on('end', function () {
//   // inputString = inputString.split('\n');
//   inputArray = inputString.split('\n');
//   // console.log('input array: ', inputArray);

//   main();
// });

inputString = file.toString();
inputArray = file.split('\n');

function readLine() {
  return inputArray[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: Array<number>) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  const ratio_pos = (pos / arr.length).toFixed(6);
  console.log(ratio_pos);
  const ratio_neg = (neg / arr.length).toFixed(6);
  console.log(ratio_neg);
  const ratio_zero = (zero / arr.length).toFixed(6);
  console.log(ratio_zero);
}
console.log(process.version);

function main() {
  const line = readLine();
  const trimmed = line.trim();
  const n = parseInt(trimmed, 10);
  // const n = 3; //parseInt(readLine().trim(), 10);
  // const parsed = parseInt('[1');
  // const parsed = parseInt('1]');
  // parsed;
  const arrayline = readLine();
  const replaced = arrayline.replace(/\s+$/g, '');
  const splitted = replaced.split(' ');
  splitted;
  const mapped = splitted.map((arrTemp) => parseInt(arrTemp, 10));
  // const arr = readLine()
  // const arr = '[1,0,-1]'
  // .replace(/\s+$/g, '')
  // .split(' ')
  // .map((arrTemp) => parseInt(arrTemp, 10));

  mapped;
  plusMinus(mapped);
}

main();
