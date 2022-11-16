'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions, Input } from './types/templateTypes';

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

 *  Time O() | Space O()
 */
function replace(input: Input) {
  // TODO work here
  input;
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
