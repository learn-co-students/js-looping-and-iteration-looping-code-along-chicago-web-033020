// Code your solutions in this file
function writeCards(names, event) {
  let final_array = [];
  for (let i = 0; i < names.length; i++) {
    final_array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return final_array;
}

function countDown(pos_integer) {
  while (pos_integer >= 0) {
    console.log(pos_integer);
    pos_integer--;
  }
}