export function uppercase(string: string) {
  return string.toUpperCase();
}
export function lowercase(string: string) {
  return string.toLowerCase();
}
export function replace(string: string, search: string, replace: string) {
  return string.replace(search, replace);
}
export function trim(string: string) {
  return string.trim();
}
export function split(string: string, separator: string) {
  return string.split(separator);
}
export function join(array: String[], separator: string) {
  return array.join(separator);
}
export function reverse(string: string) {
  return string.split("").reverse().join("");
}
export function repeat(string: string, count: number) {
  return string.repeat(count);
}
export function compare(string1: string, string2: string) {
  return string1.localeCompare(string2);
}
export function includes(string: string, search: string) {
  return string.includes(search);
}
