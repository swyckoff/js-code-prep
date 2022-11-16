import { QuestionsRoot, Questions, Input } from './types/validAnagrams_242';
('use strict');
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

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
 * Hash - frequency add and subtract.
 * Time O(n) | Space O(n)
 *o(N). Loop fully s: hash[letter] = count. Loop if t: hash[letter] != s[letter]'s count, false.
 */
function validAnagram({ s, t }: Input): boolean {
  if (s.length != t.length) return false;

  const sCounts = new Map<string, number>();
  for (const letter of s) {
    const count = sCounts.get(letter) ? sCounts.get(letter) : 0;
    sCounts.set(letter, count + 1);
  }

  for (const tLetter of t) {
    if (!sCounts.has(tLetter)) {
      return false;
    }

    const count = sCounts.get(tLetter);
    if (count == 0) {
      return false;
    }
    sCounts.set(tLetter, count - 1);
  }
  return true;
}

function main() {
  console.log(`Node is: ${process.version}`);
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', validAnagram(question.input));
    console.log('Expected: ', question.expected);
  }
}

main();
