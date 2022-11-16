export interface QuestionsRoot {
  data: Questions[];
}

export interface Questions {
  input: Array<number>;
  expected: boolean;
}
