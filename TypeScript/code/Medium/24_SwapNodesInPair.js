"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapNodesInPair = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function ConvertToArray(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
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
function PushToListNode(arr) {
    let node = new ListNode(-23, null);
    arr.forEach(i => {
        PushTail(node, i);
    });
    return node;
}
function swapPairs(head) {
    let k = 2;
    let arr = ConvertToArray(head);
    if (arr.length === 1)
        return PushToListNode(arr);
    let remain = arr.length % k;
    let remainArr = arr.splice(arr.length - remain, arr.length - 1);
    // console.log(arr, remainArr)
    let res = [];
    for (let i = -1; i < arr.length; i += k) {
        if (i >= 0) {
            let start = i - k + 1;
            let end = i;
            // console.log(arr[i],'start->', start, 'end ->', end, arr[start], arr[end])
            for (let j = end; j >= start; j--) {
                res.push(arr[j]);
            }
        }
    }
    remainArr.forEach(i => res.push(i));
    // console.log(arr,res)
    let ret = PushToListNode(res);
    return (ret === null || ret === void 0 ? void 0 : ret.val) === -23 ? null : ret;
}
;
function SwapNodesInPair() {
    let l1 = new ListNode(1, null);
    console.log(swapPairs(l1));
}
exports.SwapNodesInPair = SwapNodesInPair;
