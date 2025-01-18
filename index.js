"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uppercase = uppercase;
exports.lowercase = lowercase;
exports.replace = replace;
exports.trim = trim;
exports.split = split;
exports.join = join;
exports.reverse = reverse;
exports.repeat = repeat;
exports.compare = compare;
exports.includes = includes;
function uppercase(string) {
  return string.toUpperCase();
}
function lowercase(string) {
  return string.toLowerCase();
}
function replace(string, search, replace) {
  return string.replace(search, replace);
}
function trim(string) {
  return string.trim();
}
function split(string, separator) {
  return string.split(separator);
}
function join(array, separator) {
  return array.join(separator);
}
function reverse(string) {
  return string.split("").reverse().join("");
}
function repeat(string, count) {
  return string.repeat(count);
}
function compare(string1, string2) {
  return string1.localeCompare(string2);
}
function includes(string, search) {
  return string.includes(search);
}
