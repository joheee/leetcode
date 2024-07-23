"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZigzagConversion = void 0;
function convert(string, numRows) {
    if (numRows === 1)
        return string;
    const result = [];
    const cycleLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < string.length; j += cycleLen) {
            result.push(string[j]);
            if (i !== 0 && i !== numRows - 1) {
                const nextIdx = j + cycleLen - 2 * i;
                if (nextIdx < string.length) {
                    result.push(string[nextIdx]);
                }
            }
        }
    }
    return result.join('');
}
function ZigzagConversion() {
    let s = "PAYPALISHIRING";
    console.log(convert(s, 3));
}
exports.ZigzagConversion = ZigzagConversion;
