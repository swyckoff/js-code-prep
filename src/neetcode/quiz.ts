'use strict';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions } from './types/QuestionsRoot';

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
