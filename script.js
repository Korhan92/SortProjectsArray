const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, , "75"];

function sort(params) {
    let bosDizi = []
    for (let i = 0; i < params.length; i++) {
        return bosDizi[i] = params[i]

    }
}
console.log(sort(arrCase1))

function handleFilter(arr) {
    let diziNumber = []
    arr.forEach(element => {
        if (typeof element === "number") {
            diziNumber.push(element)

        }


    })
 return diziNumber
}

console.log(handleFilter(arrCase1))
console.log(handleFilter(arrCase2))

function typeNumber(arr) {
   return arr.filter(item => typeof item === "number" )
    
}
console.log(typeNumber(arrCase1))



