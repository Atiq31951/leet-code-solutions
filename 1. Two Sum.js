const findExactOne = (from, searchItem, objectNums) => {
  let start = from;
  let end = objectNums.length - 1;
  while (start <= end) {
    let mid = Number.parseInt(Math.ceil(start + end) / 2);
    if (objectNums[mid].num === searchItem) {
      return {
        found: true,
        index: mid,
      };
    } else {
      if (objectNums[mid].num > searchItem) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return {
    found: false,
    index: null,
  };
};

var twoSum = function (nums, target) {
  const objectNums = nums.map((item, index) => ({ num: item, index }));
  objectNums.sort((itemA, itemB) => itemA.num - itemB.num);
  for (let i = 0; i < objectNums.length; i++) {
    const returnedObject = findExactOne(
      i + 1,
      target - objectNums[i].num,
      objectNums
    );
    if (returnedObject.found) {
      return [objectNums[i].index, objectNums[returnedObject.index].index];
    }
  }
};

console.log(twoSum([3, 3], 6));
