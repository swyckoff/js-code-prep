'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFile, readFileSync } from 'fs';
import {
  QuestionsRoot,
  Questions,
  Input
} from './types/topKFrequentElements_347';
import { formatWithOptions } from 'util';

function getFilenameNoExtension(): string | undefined {
  const filePath = fileURLToPath(import.meta.url);
  return filePath.split('/').pop()?.split('.')[0];
}
function getQuiz(): QuestionsRoot {
  const __filename: string | undefined = getFilenameNoExtension();
  const quiz: string = readFileSync(
    `./src/neetcode/solutions/input/${__filename}.json`,
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

// 1st solution (best):
// const map = new Map();
// for (const num of nums) {
//   let count = 0;
//   if (map.has(num)) {
//     count = map.get(num);
//   }
//   map.set(num, ++count);
// }
// const values = [...map];
// // Sort for ascending values
// values.sort((a, b) => a[1] - b[1]);
// const output = [];
// for (let i = 0; i < k; i++) {
//   output.push(values.pop()[0]);
// }
// return output;

// 3rd solution. Slower than first.
// function topKFrequentElements({ nums, k }: Input) {
//   const frequencyMap = new Map<number, number>();

//   for (const num of nums) {
//     const count = frequencyMap.get(num) + 1 || 1;
//     frequencyMap.set(num, count);
//   }
//   const values = [...frequencyMap];
//   const output = values
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(([key]) => key);

//   return output;
// }

/*
 * Brainstorming:
 * naive: map w/ key=number, value = frequency. array of values, and sort, return k of them. O(n * log n)
 *
 *
 *  Time Limits: O(n log n)
 *  Time O(n log n) | Space O(n)
 */
function topKFrequentElements({ nums, k }: Input) {
  // Time: O(n), Space O(n)
  const frequencyMap = nums.reduce((accumulator, curr) => {
    accumulator;
    return accumulator.set(curr, accumulator.get(curr) + 1 || 1);
  }, new Map());

  // Time: O(n * log n), Space O(n)?
  return [...frequencyMap]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((elem) => elem[0]);
}

function main() {
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', topKFrequentElements(question.input));
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
