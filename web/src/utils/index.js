import _deburr from "lodash.deburr";

/**
 * Clean a word (special letters, whitespaces from ends and lower-case)
 * @param word
 * @returns {string}
 */
export const cleanWord = word => _deburr(word.toLowerCase()).trim()

/**
 * Check if elem is in word
 * @param elem: {string}
 * @param word: {string}
 * @returns {boolean}
 */
export const isFound = (elem, word) => cleanWord(elem).indexOf(word) > -1
