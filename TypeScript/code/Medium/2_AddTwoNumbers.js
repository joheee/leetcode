"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTwoNumbers = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function PushTail(list, num) {
    if ((list === null || list === void 0 ? void 0 : list.val) === -23) {
        list.val = num;
    }
    else {
        let curr = list;
        while ((curr === null || curr === void 0 ? void 0 : curr.next) !== null) {
            curr = curr.next;
        }
        curr.next = new ListNode(num, null);
    }
}
function ConvertToArray(list) {
    let curr = list;
    let arr = [];
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}
function CalculateAddition(arrL1, arrL2) {
    let len = arrL1.length > arrL2.length ? arrL1.length : arrL2.length;
    let arr = [];
    let isCarry = false;
    for (let i = 0; i < len; i++) {
        let l1 = Number.isNaN(arrL1[i]) || arrL1[i] === undefined ? 0 : arrL1[i];
        let l2 = Number.isNaN(arrL2[i]) || arrL2[i] === undefined ? 0 : arrL2[i];
        let sum = l1 + l2;
        if (sum > 9)
            isCarry = true;
        arr.push(sum);
    }
    return {
        arr: arr,
        isCarry: isCarry
    };
}
function FixCarry(arr, i, length) {
    if (i === length - 1) {
        if (arr[i] > 9) {
            arr[i] = arr[i] % 10;
            arr.push(1);
        }
        return arr;
    }
    if (arr[i] > 9) {
        arr[i] = arr[i] % 10;
        arr[i + 1] = arr[i + 1] + 1;
    }
    return FixCarry(arr, i + 1, length);
}
function PushToListNode(arr) {
    let node = new ListNode(-23, null);
    arr.forEach(i => {
        PushTail(node, i);
    });
    return node;
}
function addTwoNumbers(l1, l2) {
    let arrL1 = ConvertToArray(l1);
    let arrL2 = ConvertToArray(l2);
    let result = CalculateAddition(arrL1, arrL2);
    let arr = result.isCarry ? FixCarry(result.arr, 0, result.arr.length) : result.arr;
    console.log(arr);
    return PushToListNode(arr);
}
;
function AddTwoNumbers() {
    let l1 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9, null))));
    let l2 = new ListNode(2, new ListNode(4, new ListNode(9, null)));
    // let l1 = new ListNode(0, null)
    // let l2 = new ListNode(2, null)
    // let l1 = new ListNode(2,new ListNode(4, new ListNode(3, null)))
    // let l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))
    // addTwoNumbers(l1,l2)
    console.log(addTwoNumbers(l1, l2));
}
exports.AddTwoNumbers = AddTwoNumbers;
