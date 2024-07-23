const romanMap: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  if (s.length === 1) return romanMap[s.charAt(0)];

  let res = 0;
  let prev_val = 0;
  // O(n)
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    let curr_val = romanMap[c];
    if (curr_val > prev_val) res += curr_val - 2 * prev_val;
    else res += curr_val;
    prev_val = curr_val;
  }

  return res;
}

export function RomanToInteger() {
  const s: string = "MCMXCIVIM";
  console.log(romanToInt(s));
}
