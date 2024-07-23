function convertMap(word: string): { [key: string]: number } {
  let hMap: { [key: string]: number } = {};
  word.split("").forEach((c) => {
    if (hMap[c] === undefined) hMap[c] = 0;
    hMap[c]++;
  });
  return hMap;
}
function min(a: number, b: number): number {
  return a >= b ? b : a;
}
function commonChars(words: string[]): string[] {
  let arr: string[] = [];
  // O(words[0].length)
  let hMap: { [key: string]: number } = convertMap(words[0]);

  // O(words.length - 1)
  words.slice(1).forEach((word) => {
    // O((word.length + hMap.length))
    let wordMap: { [key: string]: number } = convertMap(word);
    for (let key in hMap) {
      hMap[key] = min(hMap[key], wordMap[key] || 0);
    }
  });
  
  // O(hMap.length)
  // O((words.length - 1) * (word.length + hMap.length) + hMap.length)
  // O(words.length * word.length)
  for (let key in hMap) {
    for (let i = 0; i < hMap[key]; i++) {
      arr.push(key);
    }
  }

  return arr;
}

export function FindCommonCharacters() {
  const words = ["bella", "label", "roller"];
  console.log(commonChars(words));
}
