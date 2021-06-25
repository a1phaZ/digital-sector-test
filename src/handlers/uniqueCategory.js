export function uniqueCategory(data) {
  const categories = data.map(({category}) => category);
  const unique = new Set(categories);
  return [...unique];
}
