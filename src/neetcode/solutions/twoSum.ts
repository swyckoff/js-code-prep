'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions } from '../templates/types/templateTypes';

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

function replace(input: Array<number>) {
  // TODO work here
}

function main() {
  console.log(`Node is: ${process.version}`);
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', replace(question.input));
    console.log('Expected: ', question.expected);
  }
}

main();
