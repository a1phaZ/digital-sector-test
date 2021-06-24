/**
 * Универсальная фильтрация
 * @param array
 * @param base
 * @param str
 * @returns {*}
 */
export default function filterData(array, base, str) {
  return array.filter((item) => item[base].toLowerCase().indexOf(str.toLowerCase()) > -1);
}
