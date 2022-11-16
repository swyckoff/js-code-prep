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

function copyNeedcodeFile(sourceFilename, destinationPath) {
  copyFile(
    `${__dirname}/neetcode/templates/${sourceFilename}`,
    `${__dirname}/neetcode/solutions/${destinationPath}`,
    onError,
    'utf-8'
  );
}

function createNeetcodeFiles(filename) {
  copyNeedcodeFile('templateQuokkaFree.ts', `${filename}.ts`);
  copyNeedcodeFile('input/templateQuestions.json', `input/${filename}.json`);
  copyNeedcodeFile('types/templateTypes.ts', `types/${filename}.ts`);
}
