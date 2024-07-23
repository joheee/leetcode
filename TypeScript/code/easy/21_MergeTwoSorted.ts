class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function insertionSort(res: ListNode | null, n: number): ListNode {
    const newNode = new ListNode(n);

    if (!res || n < res.val) {
        newNode.next = res;
        return newNode; // Return the new head of the list
    } else {
        let curr = res;
        while (curr.next !== null && n >= curr.next.val) {
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;
        return res; // Return the original head of the list
    }
}


function mergeTwoListRec(list1: ListNode | null, list2: ListNode | null, res: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) return res;

    if (list1 === null && list2) {
        res = insertionSort(res, list2.val);
        return mergeTwoListRec(list1, list2.next, res);
    }
    if (list2 === null && list1) {
        res = insertionSort(res, list1!.val);
        return mergeTwoListRec(list1!.next, list2, res);
    }

    const min = Math.min(list1!.val, list2!.val);
    const max = Math.max(list1!.val, list2!.val);

    res = insertionSort(res, min);
    res = insertionSort(res, max);

    return mergeTwoListRec(list1!.next, list2!.next, res);
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    return mergeTwoListRec(list1,list2, null)
}

function print(l:ListNode | null) {
    let curr = l
    while(curr !== null) {
        console.log(curr.val)
        curr = curr.next
    } 
}

export function MergeTwoSorted(){
    let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
    // let list1 = new ListNode(-9, new ListNode(3, null))
    let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
    
    // let list1 = new ListNode(1)
    // let list2 = null
    let l = mergeTwoLists(list1,list2)
    console.log(l)
    print(l)
}