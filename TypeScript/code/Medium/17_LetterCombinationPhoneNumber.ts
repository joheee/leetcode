function letterCombinations(digits: string): string[] {
    if(digits === '') return []

    let phone = [
        '0',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ]

    let res : string[] = []
    let queue:string[] =['']
 
    while(queue.length > 0) {
        let val = queue[0]
        queue.shift()
        if(val.length === digits.length) res.push(val)
        else {
            let s = Number(digits.charAt(val.length))
            for(let i=0;i<phone[s].split('').length;i++) queue.push(val + phone[s].charAt(i))
        }
    }
    return res
};

export function LetterCombinationPhoneNumber(){
    console.log(letterCombinations('234'))
}