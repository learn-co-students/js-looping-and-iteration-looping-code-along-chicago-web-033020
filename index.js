function writeCards(arr, event) {
  let new_arr = []
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return new_arr
}

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i--);
  }
}