"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMedianDataStream = void 0;
class MedianFinder {
    constructor() {
        this.arr = [];
    }
    addNum(num) {
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
    }
    findMedian() {
        if (this.arr.length === 0)
            return 0;
        if (this.arr.length % 2 === 0) {
            let val = this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1];
            return val / 2;
        }
        return this.arr[Math.floor(this.arr.length / 2)];
    }
}
function FindMedianDataStream() {
    var obj = new MedianFinder();
    obj.addNum(1);
    obj.addNum(2);
    console.log(obj.findMedian());
    obj.addNum(3);
    console.log(obj.findMedian());
    obj.addNum(4);
    console.log(obj.findMedian());
}
exports.FindMedianDataStream = FindMedianDataStream;
