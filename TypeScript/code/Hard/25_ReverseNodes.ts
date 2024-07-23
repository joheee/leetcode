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
    return node
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(k === 1) return head

    let arr = ConvertToArray(head)
    let remain = arr.length % k

    let remainArr = arr.splice(arr.length-remain, arr.length-1)
    // console.log(arr, remainArr)

    let res = []
    for(let i=-1;i<arr.length;i+=k) {
        if(i >= 0) {
            let start = i-k+1
            let end = i
            // console.log(arr[i],'start->', start, 'end ->', end, arr[start], arr[end])
            for(let j=end;j>=start;j--){
                res.push(arr[j])
            }
        }
    }
    remainArr.forEach(i => res.push(i))
    // console.log(arr,res)

    return PushToListNode(res)
};

export function ReverseNodes(){
    let l1 = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
    console.log(reverseKGroup(l1, 2))
}