"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterCombinationPhoneNumber = void 0;
function letterCombinations(digits) {
    if (digits === '')
        return [];
    let phone = [
        '0',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];
    let res = [];
    let queue = [''];
    while (queue.length > 0) {
        let val = queue[0];
        queue.shift();
        if (val.length === digits.length)
            res.push(val);
        else {
            let s = Number(digits.charAt(val.length));
            for (let i = 0; i < phone[s].split('').length; i++)
                queue.push(val + phone[s].charAt(i));
        }
    }
    return res;
}
;
function LetterCombinationPhoneNumber() {
    console.log(letterCombinations('234'));
}
exports.LetterCombinationPhoneNumber = LetterCombinationPhoneNumber;
