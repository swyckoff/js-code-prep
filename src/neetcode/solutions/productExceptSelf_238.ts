'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions, Input } from './types/productExceptSelf_238';
import { reduce } from 'lodash';

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

/*
 * Brainstorming:
 * initial: forall nums: new[n] = reduce rest of array without nums[n]. O(N^2)
 *
 * next: forall nums: map[i] = nums[i]
 *  Time O() | Space O()
 */
function productExceptSelf({ nums }: Input) {
  // Coded in Typescript. Newlines removed by tsc.
  nums;
  const map = new Map<string, number>();
  for (const i in nums) {
    map.set(i, nums[i]);
    console.log(i);
  }
  map;
  // const product = nums.reduce((accumulator, current) => accumulator * current);
  // product;
}

function main() {
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', productExceptSelf(question.input));
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
