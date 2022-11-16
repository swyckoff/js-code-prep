'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions, Input } from './types/twoSum_1';

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
 * Brainstorming: 
  - naive: loop all { loop all { sum 1st+2nd, if == return}}
  - better: loop all { 
    if !> target: 
      values = new array[input.length] = target-curr ;
      while looping if = values.has(input[currentindex]) save index, report pair.

  
  } 

 *  Time O() | Space O()
 */
function twoSum({ nums, target }: Input): Array<number> | undefined {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = numsMap.get(complement);

    if (numsMap.has(complement)) return [i, complementIndex];

    // Save values after looking for the complement to avoid finding the current value / index.
    numsMap.set(nums[i], i);
  }

  return undefined;
}

function main() {
  console.log(`Node is: ${process.version}`);
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', twoSum(question.input));
    console.log('Expected: ', question.expected);
  }
}

main();
