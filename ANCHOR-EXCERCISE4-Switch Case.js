/*var tanggal= 26

var bulan=9
var tahun= 2018

switch(bulan) {

  case 1:   { console.log(tanggal +' JANUARI '+ tahun); break; }
  case 2:   { console.log(tanggal +' FEBRUARI '+ tahun); break; }
  case 3:   { console.log(tanggal +' MARET '+ tahun); break; }
  case 4:   { console.log(tanggal +' APRIL '+ tahun); break; }
  case 5:   { console.log(tanggal +' MEI '+ tahun); break; }
  case 6:   { console.log(tanggal +' JUNI '+ tahun); break; }
  case 7:   { console.log(tanggal +' JULI '+ tahun); break; }
  case 8:   { console.log(tanggal +' AGUSTUS '+ tahun); break; }
  case 9:   { console.log(tanggal +' SEPTEMBER '+ tahun); break; }
  case 10:   { console.log(tanggal +' OKTOBER '+ tahun); break; }
  case 11:   { console.log(tanggal +' NOVEMBER '+ tahun); break; }
  case 12:   { console.log(tanggal +' DESEMBER '+ tahun); break; }
}


/**

  pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  contoh 1 (tanggal = 2):
  hari selasa

  contoh (tanggal = 8):
  hari senin

  contoh (tanggal = 17):
  hari rabu


 */

var tanggal = 31
for(var tanggal = 1; tanggal<=31; tanggal++){
  console.log(tanggal='');
  
  if(tanggal %7===1) {
    console.log('tanggal'+ tanggal + ' hari senin');  
  }else if (tanggal %7 ===2) {
    console.log(' hari selasa');
  }else if (tanggal %7=== 3) {
    console.log(' hari rabu');
  } else if (tanggal %7=== 4) {
    console.log(' hari kamis');
  }else if (tanggal %7=== 5) {
    console.log(' hari jumat');
  }else if (tanggal %7=== 6) {
    console.log(' hari sabtu');
  }else if (tanggal %7=== 0 ) {
    console.log(' hari minggu');
  }
}