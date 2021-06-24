export const generateKey = (prefix, max = 100, min = 0) => {
  return `${prefix}_${Math.random() * (max - min) + min}`;
}
