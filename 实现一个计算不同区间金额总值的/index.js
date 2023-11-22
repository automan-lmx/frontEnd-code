function price(number) {
  const config = [
    { right: [1, 5], fee: 30 },
    { right: [5, 10], fee: 20 },
    { right: [10, 30], fee: 15 },
    { right: [30, 120], fee: 12 },
    { right: [120, Infinity], fee: 10 },
  ];

  let total = 0;
  let remaining = number;

  for (const {
    right: [lower, upper],
    fee,
  } of config) {
    if (remaining <= 0) break;

    const count = Math.min(upper, remaining) - lower;
    if (count > 0) {
      total += count * fee;
      remaining -= count;
    }
  }

  return total;
}

console.log(price(3)); // 应输出 90
console.log(price(6)); // 应输出 160
console.log(price(20)); // 应输出 190
