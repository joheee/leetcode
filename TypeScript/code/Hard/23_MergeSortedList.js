"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSortedList = void 0;
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
    return node.val === -23 ? null : node;
}
function mergeKLists(lists) {
    if (lists.length === 0)
        return null;
    let res = [];
    lists.forEach(i => {
        let arr = ConvertToArray(i);
        arr.forEach(j => {
            res.push(j);
        });
    });
    res.sort((a, b) => a - b);
    return PushToListNode(res);
}
;
function MergeSortedList() {
    let l1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
    let l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    let l3 = new ListNode(2, new ListNode(6, null));
    console.log(mergeKLists([l1, l2, l3]));
}
exports.MergeSortedList = MergeSortedList;
