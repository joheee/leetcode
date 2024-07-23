class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
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

function ConvertToArray(list: ListNode | null) : number[] {
    let curr = list
    let arr = []
    while(curr !== null) {
        arr.push(curr!.val)
        curr = curr!.next
    }
    return arr
}

interface CalculateAdditionInterface {
    arr:number[],
    isCarry:boolean
}

function CalculateAddition(arrL1:number[], arrL2:number[]) : CalculateAdditionInterface {
    let len = arrL1.length > arrL2.length ? arrL1.length : arrL2.length
    let arr : number[] = []
    let isCarry = false
    for(let i=0;i<len;i++){
        let l1 = Number.isNaN(arrL1[i]) || arrL1[i] === undefined ? 0 : arrL1[i]
        let l2 = Number.isNaN(arrL2[i]) || arrL2[i] === undefined ? 0 : arrL2[i]
        let sum = l1 + l2
        if(sum > 9) isCarry = true
        arr.push(sum)
    }
    return {
        arr:arr,
        isCarry:isCarry
    }
}

function FixCarry(arr:number[], i:number, length:number) : number[] {
    if(i === length - 1) {
        if(arr[i] > 9) {
            arr[i] = arr[i] % 10
            arr.push(1)
        }
        return arr
    }

    if(arr[i] > 9) {
        arr[i] = arr[i] % 10
        arr[i+1] = arr[i+1] + 1
    }

    return FixCarry(arr,i+1,length)
}

function PushToListNode(arr:number[]) : ListNode | null {
    let node = new ListNode(-23, null)
    arr.forEach(i => {
        PushTail(node,i)
    })
    return node
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let arrL1 = ConvertToArray(l1)
    let arrL2 = ConvertToArray(l2)

    arrL1.reverse()
    arrL2.reverse()

    let result = CalculateAddition(arrL1,arrL2)
    
    let arr = result.isCarry ? FixCarry(result.arr,0,result.arr.length) : result.arr

    arr.reverse()
    // console.log(arr)
    return PushToListNode(arr)
};

export function AddTwoNumber(){
    // let l1 = new ListNode(7,new ListNode(2, new ListNode(4, new ListNode(3, null))))
    // let l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))

    // let l1 = new ListNode(0, null)
    // let l2 = new ListNode(5,new ListNode(6, new ListNode(4, null)))
    
    let l1 = new ListNode(8,new ListNode(9, new ListNode(9, null)))
    let l2 = new ListNode(2, null)

    // addTwoNumbers(l1,l2)
    console.log(addTwoNumbers(l1,l2))
}
