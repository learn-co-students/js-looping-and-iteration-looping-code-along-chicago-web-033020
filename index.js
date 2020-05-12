// Code your solutions in this file
array = [ 'Lisa', 'Kaitlin', 'Jan' ]
const birthday = "birthday"
const startNum = 0

function writeCards(array, birthday) {
let thankYou = []
for ( let i = 0; i < array.length; i++ ) {
    thankYou.push( `Thank you, ${array[i]}, for the wonderful ${birthday} gift!` )
  }
  return thankYou
}


function countDown( startNum ) {
    while ( startNum > 0 ) {
      console.log( startNum );
      startNum -= 1;
    }
    console.log( startNum );
  }





