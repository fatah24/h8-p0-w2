function konversiMenit(menit) {
  var hour = Math.floor(menit / 60)
  var minuteCal = menit / 60 - Math.floor(menit / 60)
  var minute = Math.round(minuteCal * 60)
    if(minute < 10) {
      minute = '0' + minute
    }
  return hour+ ':' +minute
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120));