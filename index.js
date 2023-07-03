// let arr = ['amir', 'zokir', 'ravshan', 'Jamshud', 'alex']

// let ln = ''

// arr.forEach(baran => {
//     if(baran.length > ln.length) {
//         ln = baran
//     }
// })

// console.log(ln);

let arr = ['Amir', 'zokir', 'Ravshan', 'Jamshud', 'Alex']

let evenNames = []
let oddNames = []

arr.forEach((name) => {
    if(name.length % 2 === 0) {
        evenNames = name;
    } else {
        evenNames = name
    }
})

console.log(evenNames, oddNames);