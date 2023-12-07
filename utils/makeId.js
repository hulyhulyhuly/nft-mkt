export const makeId = (length) => {
  let result = '';

  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const charsLen = chars.length;

  for (let i = 0; i < length; i += 1) {
    result += chars.charAt(Math.floor(Math.random() * charsLen));
  }

  return result;
};
