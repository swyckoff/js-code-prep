'use strict';
export interface QuestionsRoot {
  data: Questions[];
}
export interface Questions {
  input: number[];
  expected: boolean;
}
