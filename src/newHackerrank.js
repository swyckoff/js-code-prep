'use strict';
import { closeSync, copyFile, openSync } from 'fs';
import * as readline from 'node:readline';
import { dirname } from 'path';
import { exit } from 'process';
import { fileURLToPath } from 'url';

function getPath() {
  return dirname(fileURLToPath(import.meta.url));
}

console.log(process.version);

const __dirname = getPath();

__dirname;

let filename = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  'Enter a hackerrank new filename, without the extension: ',
  function (string) {
    filename = string;
    main(filename.split('\n')[0]);
    exit();
  }
);

function main(filename) {
  createHackerrankFiles(filename);
}

function createHackerrankFiles(filename) {
  copyFile(
    `${__dirname}/src/hackerrank/template.ts`,
    `${__dirname}/src/hackerrank/${filename}.ts`,
    (err) => {
      if (err) {
        console.error(`Error: ${err}`);
      }
    },
    'utf-8'
  );
  closeSync(openSync(`${__dirname}/src/hackerrank/input/${filename}.txt`, 'w'));
}
