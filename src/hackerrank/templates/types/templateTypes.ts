export interface QuestionsRoot {
  data: Questions[];
}
export interface Questions {
  input: Input;
  expected: boolean;
}
export interface Input {
  ar: number[];
  n: number;
}
