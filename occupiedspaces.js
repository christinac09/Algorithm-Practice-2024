function occupiedBothDays(N, yesterday, today) {
  if (
    yesterday.length !== today.length ||
    yesterday.length !== N ||
    today.length !== N
  ) {
    return "error: lengths are wrong";
  }

  let same = 0;
  for (i = 0; i < N; i++) {
    if (yesterday[i] === today[i] && yesterday[i] === "C") {
      same++;
    }
  }
  return same;
}
let N = 5;
let yesterday = "CC..C";
let today = ".CC..";
console.log(occupiedBothDays(N, yesterday, today));
