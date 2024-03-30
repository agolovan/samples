export const getFactorial = (n: number) => {
  if (n === 1) {
    return 1;
  } else {
    return n * getFactorial( n -1 );
  }
}