'use strict';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
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
  'Enter a neetcode new filename, without the extension: ',
  function (string) {
    filename = string;
    main(filename.split('\n')[0]);
    exit();
  }
);

function main(filename) {
  createNeetcodeFiles(filename);
  replaceFunctionName(filename);
}

function copyNeedcodeFile(sourceFilename, destinationPath) {
  copyFileSync(
    `${__dirname}/neetcode/templates/${sourceFilename}`,
    `${__dirname}/neetcode/solutions/${destinationPath}`
  );
}

function createNeetcodeFiles(filename) {
  copyNeedcodeFile('templateQuokkaFree.ts', `${filename}.ts`);
  copyNeedcodeFile('input/templateQuestions.json', `input/${filename}.json`);
  copyNeedcodeFile('types/templateTypes.ts', `types/${filename}.ts`);
}

function replaceFunctionName(filename) {
  const filePath = `${__dirname}/neetcode/solutions/${filename}.ts`;
  const filenameWithoutNumber = filename.split('_')[0];

  let contents = readFileSync(filePath, 'utf-8');
  const replacedFunctionName = contents.replace(
    /replace/gi,
    filenameWithoutNumber
  );
  const replacedTypes = replacedFunctionName.replace(/templateTypes/, filename);
  writeFileSync(filePath, replacedTypes);
}
