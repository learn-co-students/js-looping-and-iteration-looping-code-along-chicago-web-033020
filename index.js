// Code your solutions in this file
function writeCards(arrayOfStringNames, eventName) {
    let cardArray = []
    for (let counter = 0; counter < arrayOfStringNames.length; counter++) {
        cardArray.push(`Thank you, ${arrayOfStringNames[counter]}, for the wonderful ${eventName} gift!`);
    }
    return cardArray
};

function countDown(integer){
    while ( integer > 0 ) {
        console.log(integer);
        integer--
    }
    console.log( integer )
}
