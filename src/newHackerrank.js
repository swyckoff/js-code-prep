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
  'Enter a hackerrank new filename, without the extension: ',
  function (string) {
    filename = string;
    main(filename.split('\n')[0]);
    exit();
  }
);

function main(filename) {
  createHackerrankFiles(filename);
  replaceFunctionName(filename);
}

function copyHackerrankFile(sourceFilename, destinationPath) {
  copyFileSync(
    `${__dirname}/hackerrank/templates/${sourceFilename}`,
    `${__dirname}/hackerrank/solutions/${destinationPath}`
  );
}

function createHackerrankFiles(filename) {
  copyHackerrankFile('templateQuokkaFree.ts', `${filename}.ts`);
  copyHackerrankFile('input/templateQuestions.json', `input/${filename}.json`);
  copyHackerrankFile('types/templateTypes.ts', `types/${filename}.ts`);
}

function replaceFunctionName(filename) {
  const filePath = `${__dirname}/hackerrank/solutions/${filename}.ts`;
  const filenameWithoutNumber = filename.split('_')[0];

  let contents = readFileSync(filePath, 'utf-8');
  const replacedFunctionName = contents.replace(
    /replace/gi,
    filenameWithoutNumber
  );
  const replacedTypes = replacedFunctionName.replace(/templateTypes/, filename);
  writeFileSync(filePath, replacedTypes);
}
