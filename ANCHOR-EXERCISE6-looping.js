
 


//1. Melakukan Looping Menggunakan While

var love = 2;
console.log("LOOPING PERTAMA")
while (love <= 20) {
    console.log(love + " - I love coding")

    love += 2;
}

var become = 20;
console.log("LOOPING KEDUA")
while (become >= 2) {
    console.log( become + " - I will become fullstack developer")

    become -= 2
}

//////////////////////////////////////////////////////////////////////////////
console.log('')

//2. Melakukan Looping Menggunakan for

console.log("LOOPING PERTAMA")
for (var cinta = 1; cinta <= 20; cinta++) {
    console.log(cinta + " - I love coding")
}
console.log("LOOPING KEDUA")
for (var menjadi = 20; menjadi >= 1; menjadi--) {
    console.log(menjadi + " - I will become fullstack developer")
}


//3. Melakukan Looping Menggunakan for 

for(var mantab = 1; mantab < 101; mantab++) {
if(mantab % 2===0)
   console.log('GENAP');
    else
   	console.log('GANJIL');
  }

// KELIPATAN 3

for(var mantab = 1; mantab < 100; mantab += 2) {
    if(mantab % 3===0) {
      console.log( mantab + ' KELIPATAN 3')
    }
  }

// KELIPATAN 6

for(var mantab = 1; mantab < 100; mantab +=5) {
    if(mantab % 6===0) {
      console.log( mantab + ' KELIPATAN 6')
    }
}

// KELIPATAN 9

for(var mantab = 1; mantab < 100; mantab +=9) {
    if(mantab % 10===0) {
      console.log(mantab + ' KELIPATAN 10')
    }
}