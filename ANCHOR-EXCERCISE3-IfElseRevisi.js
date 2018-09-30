var nama = 'tono '
var peran= 'penyihir '

if (nama === '' && peran === ''){
  console.log('nama harus diisi')
}
  else if(peran==''){
  console.log('halo ' + nama + 'pilih peranmu untuk memulai game!');
  }
  else if(peran==='ksatria '){
    console.log(' selamat datang di dunia proxytia ' + nama);
    console.log('halo '+ peran +''+ nama+ ' ,kau dapat menyerang!');
  }
  else if(peran ==='dokter '){
    console.log('selamat datang di dunia proxytia ' + nama);
    console.log('halo ' + peran + ''+ nama + ' obati teman temanmu');
  }
  else if (peran === 'penyihir '){
    console.log('selamat datang di dunia proxytia '+ nama);
    
    console.log('halo '+ peran +''+ nama + ' ciptakan keajaiban' );
  }