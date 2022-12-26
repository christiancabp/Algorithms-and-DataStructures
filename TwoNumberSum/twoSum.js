// Complexity analisys
// O(nlog(n)) time | O(1) space

function twoNumberSum(array, targetSum) {
  if (array.length < 2) return [];

  // Sort array.
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });

  // Create two index pointers
  let left = 0;
  let right = sortedArray.length - 1;

  // While loop until pointers intersect starting from opposite sides of the array
  while (left < right) {
    if (sortedArray[left] + sortedArray[right] === targetSum) {
      return [sortedArray[left], sortedArray[right]];
    }
    if (sortedArray[left] + sortedArray[right] > targetSum) {
      right -= 1;
    }
    if (sortedArray[left] + sortedArray[right] < targetSum) {
      left += 1;
    }
  }
  return [];
}

module.exports = {
  twoNumberSum,
};
