'use strict';
import { copyFile } from 'fs';
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
  'Enter a needcode new filename, without the extension: ',
  function (string) {
    filename = string;
    main(filename.split('\n')[0]);
    exit();
  }
);

function main(filename) {
  createNeetcodeFiles(filename);
}

function onError(err) {
  if (err) {
    console.error(`Error: ${err}`);
  }
}

function createNeetcodeFiles(filename) {
  copyFile(
    `${__dirname}/neetcode/template-quokka-free.ts`,
    `${__dirname}/neetcode/solutions/${filename}.ts`,
    onError,
    'utf-8'
  );
  copyFile(
    `${__dirname}/neetcode/template-questions.json`,
    `${__dirname}/neetcode/solutions/input/${filename}.json`,
    onError,
    'utf-8'
  );
}
