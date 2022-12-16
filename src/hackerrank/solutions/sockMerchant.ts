'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions, Input } from './types/sockMerchant';

function getFilenameNoExtension(): string | undefined {
  const filePath = fileURLToPath(import.meta.url);
  return filePath.split('/').pop()?.split('.')[0];
}
function getQuiz(): QuestionsRoot {
  const __filename: string | undefined = getFilenameNoExtension();
  const quiz: string = readFileSync(
    `./src/hackerrank/solutions/input/${__filename}.json`,
    'utf-8'
  );
  const typedQuiz: QuestionsRoot = JSON.parse(quiz);
  return typedQuiz;
}
export function parseQuizForQuestions(): Questions[] {
  const quiz = getQuiz();

  return quiz.data;
}
// END QUOKKADELIMITER

/*
 * Brainstorming: 

 *  Time O() | Space O()
 */
function socksMerchant({ n, ar }: Input) {
  // Coded in Typescript. Newlines removed by tsc.
  ar;
  n;

  // Step 1
  const sockCounts: { [key: number]: number } = {};
  // const sockCounts = {};

  // Step 2
  for (const sock of ar) {
    sockCounts[sock] = (sockCounts[sock] || 0) + 1;
  }

  // Step 3
  let numPairs = 0;
  ar;
  Object.values(sockCounts);
  console.log(
    '🚀 ~ file: sockMerchant.ts:50 ~ socksMerchant ~ Object.values(sockCounts);',
    Object.values(sockCounts)
  );
  for (const count of Object.values(sockCounts)) {
    count;
    numPairs += Math.floor(count / 2);
    numPairs;
  }

  // Step 4
  numPairs;
  return numPairs;
}

function main() {
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', socksMerchant(question.input));
    console.log('Expected: ', question.expected);
  }
}

function checkNodeVersion() {
  const nodeVersion = readFileSync('.nvmrc', 'utf-8');
  const sanitizedVersion = process.version.split('v')[1];
  console.log(`Node is: ${sanitizedVersion}`);
  if (sanitizedVersion !== nodeVersion) {
    throw new Error(
      `Node mismatch... Nvmrc: '${nodeVersion}', Node: '${process.version}'`
    );
  }
}

checkNodeVersion();
main();
