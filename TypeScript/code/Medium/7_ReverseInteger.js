"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseInteger = void 0;
function reverse(x) {
    let str = x.toString();
    let strArr = str.split('');
    strArr.reverse();
    let strJoin = strArr.join('');
    let res = x < 0 ? -1 * parseInt(strJoin) : parseInt(strJoin);
    if (res >= Math.pow(2, 31) || res <= -Math.pow(2, 31)) {
        return 0;
    }
    return res;
}
;
function ReverseInteger() {
    console.log(reverse(1463847412));
}
exports.ReverseInteger = ReverseInteger;
