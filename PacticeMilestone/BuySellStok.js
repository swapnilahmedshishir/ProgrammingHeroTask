// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

const maxProfit = (k, prices) => {
  const n = prices.length;

  if (n === 0 || k === 0) {
    return 0;
  }

  if (k >= Math.floor(n / 2)) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      profit += Math.max(prices[i] - prices[i - 1], 0);
    }

    return profit;
  }

  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
    }
  }

  return dp[k][n - 1];
};

const k = 15;
const prices = [2, 5, 4, 1, 9, 5];
console.log(maxProfit(k, prices));
