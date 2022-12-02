'use strict';
// QUOKKA limitation for free is no import from project imports.
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { QuestionsRoot, Questions, Input } from './types/groupAnagrams_49';
import { group } from 'console';

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
 * naive: sort all strings, compare sorted strings and save indexes in buckets that match. 
 * 
 * better: loop all { create anagrams[0] = loop[0], for loop[1] if anagram of anagrams[0] add to anagrams[0] array, else anagrams[1] = loop[1]...} Potentially O(N^2) | O(N)
 * 
 * better: loop all { create anagrams[0] = loop[0], for loop[1] if anagram of anagrams[0] add to anagrams[0] array, else anagrams[1] = loop[1]...} O(N) | O(N)
 * better: loops all { }
 *  }

 *  Time O(N*K) | Space O(N * K)
 */
function groupAnagrams({ strs }: Input): string[][] {
  if (!strs) {
    return [[]];
  }

  const groupedAnagrams: string[][] = [];
  groupedAnagrams.push([strs[0]]);

  const rest = strs.slice(1);
  // Time O(N)
  for (const next of rest) {
    groupedAnagrams;
    if (!matchesExistingAnagramsWithMutation(groupedAnagrams, next)) {
      groupedAnagrams.push([next]);
    }
  }

  groupedAnagrams;
  return groupedAnagrams;
}

function matchesExistingAnagramsWithMutation(
  groupedAnagrams: string[][],
  possibleAnagram: string
): boolean {
  // Time O(K)
  for (const group of groupedAnagrams) {
    if (validAnagram(group[0], possibleAnagram)) {
      group.push(possibleAnagram);
      return true;
    }
  }

  return false;
}

// Compare with frequency
function validAnagram(source: string, possibleAnagram: string): boolean {
  if (source.length != possibleAnagram.length) return false;

  const sCounts = new Map<string, number>();
  for (const letter of source) {
    const count = sCounts.get(letter) ? sCounts.get(letter) : 0;
    sCounts.set(letter, count + 1);
  }

  for (const possibleAnagramLetter of possibleAnagram) {
    if (!sCounts.has(possibleAnagramLetter)) {
      return false;
    }

    const count = sCounts.get(possibleAnagramLetter);
    if (count == 0) {
      return false;
    }
    sCounts.set(possibleAnagramLetter, count - 1);
  }
  return true;
}

function main() {
  console.log(`Node is: ${process.version}`);
  const questions = parseQuizForQuestions();

  for (const question of questions) {
    console.log('Input: ', question.input);
    console.log('Actual: ', groupAnagrams(question.input));
    console.log('Expected: ', question.expected);
  }
}

main();
