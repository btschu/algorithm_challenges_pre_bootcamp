// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.

function sum_even_numbers() {
    var sum = 0
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    console.log(sum)
    return sum
}

sum_even_numbers()