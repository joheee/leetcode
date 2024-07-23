"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeTwoSorted = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function insertionSort(res, n) {
    const newNode = new ListNode(n);
    if (!res || n < res.val) {
        newNode.next = res;
        return newNode; // Return the new head of the list
    }
    else {
        let curr = res;
        while (curr.next !== null && n >= curr.next.val) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        return res; // Return the original head of the list
    }
}
function mergeTwoListRec(list1, list2, res) {
    if (list1 === null && list2 === null)
        return res;
    if (list1 === null && list2) {
        res = insertionSort(res, list2.val);
        return mergeTwoListRec(list1, list2.next, res);
    }
    if (list2 === null && list1) {
        res = insertionSort(res, list1.val);
        return mergeTwoListRec(list1.next, list2, res);
    }
    const min = Math.min(list1.val, list2.val);
    const max = Math.max(list1.val, list2.val);
    res = insertionSort(res, min);
    res = insertionSort(res, max);
    return mergeTwoListRec(list1.next, list2.next, res);
}
function mergeTwoLists(list1, list2) {
    return mergeTwoListRec(list1, list2, null);
}
function print(l) {
    let curr = l;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}
function MergeTwoSorted() {
    let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    // let list1 = new ListNode(-9, new ListNode(3, null))
    let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    // let list1 = new ListNode(1)
    // let list2 = null
    let l = mergeTwoLists(list1, list2);
    console.log(l);
    print(l);
}
exports.MergeTwoSorted = MergeTwoSorted;
