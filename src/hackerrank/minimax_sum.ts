'use strict';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

function getFilenameNoExtension(): string {
  const filePath = fileURLToPath(import.meta.url);
  return filePath.split('/').pop().split('.')[0];
}

const __filename = getFilenameNoExtension();

const file = readFileSync(`./src/hackerrank/input/${__filename}.txt`, 'utf-8');

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
  // sort
  // min = 0..3
  // max = 1..4
  const sorted = arr.sort(); //?
  console.log(
    `${sorted.slice(0, 4).reduce((int, sum) => int + sum)} ${sorted
      .slice(1, 5)
      .reduce((int, sum) => int + sum)}`
  );
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
  replaced;
  const noBrackets = replaced.replace(/\[(.*)\]/g, '$1');
  noBrackets;
  const splitted = noBrackets.split(' ');
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
