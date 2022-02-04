import { deleteOne } from "./ArrayUtils";

export class WordChecker {
  word;
  allowedWords;

  constructor(word, allowedWords) {
      this.word = word;
      this.allowedWords = allowedWords;
  }

  isAllowedWord(word) {
    return this.allowedWords.includes(word);
  }

  gradeWord(word) {
    const result = Array(word.length).fill("grey");
    const letters = [...this.word];
    for (let i = 0; i < result.length; i++) {
      if (word[i] === this.word[i]) {
        deleteOne(letters, word[i]);
        result[i] = "green";
      }
    }

    for (let i = 0; i < result.length; i++) {
      if (result[i] === "grey" && letters.includes(word[i])) {
        deleteOne(letters, word[i]);
        result[i] = "yellow";
      }
    }

    return result;
  }
}
