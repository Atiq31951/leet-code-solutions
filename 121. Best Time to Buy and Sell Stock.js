var maxProfit = function (prices) {
  let maxx = -1000000000000;
  let minArray = [];
  let maxArray = [];
  const len = prices.length;

  minArray[0] = prices[0];
  for (let i = 0; i < len; i++) {
    maxArray[i] = 0;
  }

  maxArray[len - 1] = prices[len - 1];

  for (let i = 1; i < len; i++) {
    minArray[i] = Math.min(minArray[i - 1], prices[i]);
    maxArray[len - i - 1] = Math.max(maxArray[len - i], prices[len - i - 1]);
  }
  for (let i = 0; i < len; i++) {
    maxx = Math.max(maxx, maxArray[i] - minArray[i]);
  }
  return maxx;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
