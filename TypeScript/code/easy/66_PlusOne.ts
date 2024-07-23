function plusOne(digits: number[]): number[] {
    digits.reverse()
    digits[0]++
    
    let i = 0
    while(digits[i] > 9) {
        digits[i] = digits[i] % 10
        i++
        if(digits[i] === undefined) digits.push(1)
        else digits[i]++
    }

    digits.reverse()
    return digits
}

export function PlusOne(){
    let digits = [9]
    // let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    console.log(plusOne(digits))
}