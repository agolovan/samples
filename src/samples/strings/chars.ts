// React typescript version - how this I would do in reality for simple code
export const findFirstNotRepeatedCharacter = (s: string) => {
  const charsProcessed: Array<string> = [];
  for (let index = 0; index < s.length; index++) {
    const currentChar = s[index];
    if (!charsProcessed.includes(currentChar) && !s.substring(index + 1).includes(currentChar)) {
      if (currentChar.trim()) {
        return currentChar;
      }
    }
    charsProcessed.push(currentChar);
  }
  return undefined;
};


// Arrays ( or we could use Map) version
export const findFirstNotRepeatedCharacterArraysVersion = (s: string) => {
  // TODO: Could just use Map instead arrays
  const charsProcessed: Array<string> = [];
  const charCountProcessed: Array<number> = [];
  for (let index = 0; index < s.length; index++) {
    const currentChar = s[index];
    if (currentChar !== ' ') {
      const i = charsProcessed.indexOf(currentChar);
      if (i === -1) {
        charsProcessed.push(currentChar);
        charCountProcessed.push(1);
      } else {
        charCountProcessed[i] = charCountProcessed[i] + 1;
      }
    }
  }

  const getFirstNonRepeatedChar = () => {
    for (let i = 0; i < charCountProcessed.length; i++) {
      if (charCountProcessed[i] === 1) {
        return charsProcessed[i];
      }
    }
    return undefined;
  }

  return getFirstNonRepeatedChar();
};

