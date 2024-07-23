class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function ConvertToArray(head:ListNode | null) : number [] {
    let arr : number[] = []
    let curr = head
    while(curr) {
        arr.push(curr.val)
        curr = curr.next
    }
    return arr
}

function PushTail(list:ListNode | null, num: number) {
    if(list?.val === -23) {
        list.val = num
    } else {
        let curr = list
        while(curr?.next !== null) {
            curr = curr!.next
        }
        curr.next = new ListNode(num, null)
    }
}

function PushToListNode(arr:number[]) : ListNode | null {
    let node = new ListNode(-23, null)
    arr.forEach(i => {
        PushTail(node,i)
    })
    return node.val === -23 ? null : node
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    
    if(lists.length === 0) return null

    let res : number [] = []

    lists.forEach(i => {
        let arr = ConvertToArray(i)
        arr.forEach(j => {
            res.push(j)
        })
    })

    res.sort((a,b) => a-b)

    return PushToListNode(res)
};

export function MergeSortedList(){
    let l1 = new ListNode(1,new ListNode(4, new ListNode(5, null)))
    let l2 = new ListNode(1,new ListNode(3, new ListNode(4, null)))
    let l3 = new ListNode(2,new ListNode(6, null))
    console.log(mergeKLists([l1,l2,l3]))
}