'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions } from '../types/QuestionsRoot';

function getFilenameNoExtension(): string {
  const filePath = fileURLToPath(import.meta.url);
  return filePath.split('/').pop().split('.')[0];
}
function getQuiz(): QuestionsRoot {
  const __filename: string = getFilenameNoExtension();
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

/*
 * Copy from neetcode
 */

function containsDuplicate(nums: Array<number>) {
  // Using Typescript to transpile, which removes newline formatting.
  // naive O(n^2): loop twice , find first loop item in second, false if not found.
  // better O(n): loop, dump items into set, compare 2 arrays.
  // better yet worst O(n) possibly O(1):  if duplicate, then return true, stop process.
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

function main() {
  console.log(`Node is: ${process.version}`);
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log(`Input: ${question.input}`);
    console.log('Actual: ');
    containsDuplicate(question.input);
    console.log(`Expected: ${question.expected}`);
  }
}

main();
