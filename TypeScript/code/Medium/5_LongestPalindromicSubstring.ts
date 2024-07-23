function  updatedString(str: string): string {
    let newString = ['#'];
    for (let char of str) {
        newString.push(char, '#');
    }
    return newString.join('');
}
  
function longestPalindrome(str: string): string {
    let string = updatedString(str);
    let LPS: number[] = new Array(string.length).fill(0);
    let C = 0;
    let R = 0; 

    for (let i = 0; i < string.length; i++) {
        let iMirror = 2 * C - i;
        if (R > i) {
        LPS[i] = Math.min(R - i, LPS[iMirror]);
        } else {
        LPS[i] = 0;
        }
        try {
        while (string[i + 1 + LPS[i]] === string[i - 1 - LPS[i]]) {
            LPS[i]++;
        }
        } catch (e) {}

        if (i + LPS[i] > R) {
        C = i;
        R = i + LPS[i];
        }
    }

    let r = Math.max(...LPS);
    let c = LPS.indexOf(r);
    return string.slice(c - r, c + r).replace(/#/g, '')
}

export function LongestPalindromicSubstring(){
    console.log(longestPalindrome('cbbd'))
}