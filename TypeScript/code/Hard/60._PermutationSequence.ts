function getPermutation(n: number, k: number): string {
    const sb: string[] = [];
    const nums: number[] = [];
    const fact: number[] = []; // fact[i] := i!
  
    for (let i = 1; i <= n; ++i) nums.push(i);
  
    fact[0] = 1;
    for (let i = 1; i <= n; ++i) fact[i] = fact[i - 1] * i;
  
    --k; // 0-indexed
  
    for (let i = n - 1; i >= 0; --i) {
      const j = Math.floor(k / fact[i]);
      k %= fact[i];
      sb.push(nums[j].toString());
      nums.splice(j, 1);
    }
  
    return sb.join('');
}

export function PermutationSequence(){
    console.log(getPermutation(3,3))
}
