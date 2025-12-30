let n = 9;
// a
console.log("a.");
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
}

// b
console.log("b.");
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

// c
console.log("c.");
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

// d
console.log("d.");
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
