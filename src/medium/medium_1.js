import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {
  sum += array[i];
 }
 return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
 array = array.sort();
 let mid = Math.floor((array.length)/2);
 let med;
 if (array.length % 2 !== 0) {
  med = array[mid];
 }
 else {
  med = (array[mid-1] + array[mid])/2
 }
 return med;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
 array = array.sort();
 let length, max, min, median, mean, sum, vari, std
 length = array.length;
 min = array[0];
 max = array[length-1];
 median = getMedian(array);
 sum = getSum(array);
 mean = sum / length;
 vari = variance(array, mean);
 std = Math.sqrt(vari);

 return {
  min: min,
  median: median,
  max: max,
  variance: vari,
  mean: mean,
  length: length,
  sum: sum,
  standard_deviation: std
 };
}

