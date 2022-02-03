const isLetter = (key) => key.length === 1;
const isBackspace = (key) => key === "Backspace";
const isEnter = (key) => key === "Enter";
const identity = (x) => x;

export const updateBoardState = (key) => {
  if (isLetter(key)) return (boardState) => boardState.addLetter(key);
  else if (isBackspace(key)) return (boardState) => boardState.eraseLetter();
  else if (isEnter(key)) return (boardState) => boardState.checkWord();
  else return identity;
};
