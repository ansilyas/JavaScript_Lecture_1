// Array Introduction :

let marks = [91, 82, 63, 84, false, "not Present"]
// console.log(marks.length)

marks[6] = 90 //(Adding) a new value to the Array 

marks[0] = 96 //Changing the value of any Array
console.log(marks)

//  using For Loop 
let array = ["ans", "ali", "ahmed", "rafay"]
for (let a = 0; a <= array.length; a++) {
    console.log(array[a])
}


// Array Method ;

let num = [1, 2, 3, 43, 5]
let b = num.toString() //Changing the (num) into (string)
console.log(b)

let c = num.join("_") //(Join) this to the previous (Array)
console.log(c, typeof c)

let r = num.pop() //it remove the value from the end 
console.log(num, c)

num.push(100) //use to (add) value to the end of (Array)
console.log(num)

// shift & unshift Method ;
let v = num.shift() //(Remove) the first value of the (array)
console.log(v, num) // also change the (original Array)

let a = num.unshift(201) //it (Add) Value at the (Start) of (Array)
console.log(a, num)






