// Code your solutions in this file
function writeCards(cards, message) {
  const carda = [];
  for (let i = 0; i < cards.length; i++) {
     carda.push(`Thank you, ${cards[i]}, for the wonderful ${message} gift!`);
  }
  return carda;
}

function countDown(num){
  let countdown = num;
  while (countdown >= 0) {
    console.log(countdown--);
  }

}

