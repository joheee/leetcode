"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveNthNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function removeNthFromEnd(head, n) {
    let len = 0;
    let prv = null;
    let cur = head;
    while (cur) {
        cur = cur.next;
        len++;
    }
    len -= n;
    cur = head;
    while (len) {
        prv = cur;
        cur = cur.next;
        len--;
    }
    if (cur === head)
        head = head.next || null;
    else
        prv.next = cur.next;
    return head;
}
function print(l) {
    let curr = l;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}
function RemoveNthNode() {
    let list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
    let l = removeNthFromEnd(list2, 2);
    print(l);
}
exports.RemoveNthNode = RemoveNthNode;
