// Given a string, find all non-single letter substrings that are palindromes.
const isPalindrome = (s: string) => {
  let start = 0;
  let end = s.length - 1;
  while ( end > start) {
    if (s[start] !== s[end]) {
      return false;
    } 
    start = start + 1;
    end = end - 1;
  }
  return true;
}

const getAllSubstrings = (s: string): string[] => {
  const substrings: string[] = [];

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
      // Generate substrings starting from character at index i
      for (let j = i + 1; j <= s.length; j++) {
          const substring = s.substring(i, j);
          substrings.push(substring);
      }
  }

  return substrings;
}


export const findPalindromes = (input: string) => {
  const palindromes = []; 
  const substrings = getAllSubstrings(input);
  substrings.forEach ( substring => {
    if (substring.length > 1 && isPalindrome(substring)) {
      palindromes.push(substring);
    }
  }) 

  return palindromes;
}
