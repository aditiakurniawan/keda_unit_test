function fishBash(n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      output.push("fish bash");
    } else if (i % 3 === 0) {
      output.push("fish");
    } else if (i % 5 === 0) {
      output.push("bash");
    } else {
      output.push(i);
    }
  }
  return output;
}

module.exports = fishBash;
