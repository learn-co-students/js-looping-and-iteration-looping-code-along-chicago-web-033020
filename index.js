// Code your solutions in this file
function writeCards(names, event) {
    let msgs_array = []

    for (let index = 0; index < names.length; index++) {
        msgs_array.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`)
    }

    return msgs_array;
}

// function countDown(num) {
//     i = 0;

//     while (i <= num) {
//         num - i;
//         i++;
//     }
// }

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }

    console.log(num)
}