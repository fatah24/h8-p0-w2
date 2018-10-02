function balikKata(kata) {
  var reverse = '';
  for(var i = kata.length -1 ; i > -1; i--) {
  reverse += kata[i];
  } return reverse
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));