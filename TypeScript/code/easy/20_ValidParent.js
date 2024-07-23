"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidParent = void 0;
function isValid(s) {
    let temp = [];
    let store = { ')': '(', '}': '{', ']': '[' };
    for (let i = 0; i < s.length; i++) {
        if (temp.length < 1)
            temp.push(s[i]);
        else if (temp[temp.length - 1] !== store[s[i]]) {
            temp.push(s[i]);
        }
        else
            temp.pop();
    }
    return !(temp.length > 0);
}
;
function ValidParent() {
    let s = '()[]{}';
    // let s = "{[]}"
    console.log(isValid(s));
}
exports.ValidParent = ValidParent;
