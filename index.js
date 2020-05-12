
function writeCards(name){
  let array = [];
  let i = 0;
  while (i < name.length){
    array.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    i++
  } 
  return array
}


function countDown(count){
  while (count > 0){
   console.log(count);
   count -= 1;
  }
  console.log(count)
}
 