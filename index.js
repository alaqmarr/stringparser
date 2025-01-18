export function uppercase(string) {
  return string.toUpperCase();
}
export function lowercase(string) {
  return string.toLowerCase();
}
export function replace(string, search, replace) {
  return string.replace(search, replace);
}
export function trim(string) {
  return string.trim();
}
export function split(string, separator) {
  return string.split(separator);
}
export function join(array, separator) {
  return array.join(separator);
}
export function reverse(string) {
  return string.split("").reverse().join("");
}
export function repeat(string, count) {
  return string.repeat(count);
}
export function slice(string, start, end) {
  return string.slice(start, end);
}
export function compare(string1, string2) {
  return string1.localeCompare(string2);
}
export function includes(string, search) {
  return string.includes(search);
}
