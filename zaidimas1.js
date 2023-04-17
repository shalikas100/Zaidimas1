function kompiuterioPasirinkimas(){
  let kompiuteris = '';
  let number = Math.random();
  if(number >= 0 && number < 1/3){
    kompiuteris = 'Žirklės';
  } else if(number >= 1/3 && number < 2/3){
    kompiuteris = 'Popierius';
  } else if( number >= 2/3 && number < 1){
    kompiuteris = 'Akmuo';
  }
  return kompiuteris;
};

let statistika = JSON.parse(localStorage.getItem('statistika')) || {
  Laimėjote: 0,
  Lygiosios: 0,
  Pralaimėjote: 0
};


function zaidimas(zaidejoPasirinkimas){
  let kompiuteris = kompiuterioPasirinkimas();
  let rezultatas = '';
  if(zaidejoPasirinkimas === 'Žirklės')
  {
    if(kompiuteris === 'Žirklės'){
      rezultatas = 'Lygiosios';
    } else if(kompiuteris === 'Popierius'){
      rezultatas = 'Laimėjote';
    } else if(kompiuteris === 'Akmuo'){
      rezultatas = 'Pralaimėjote';
    }
  } 
  else if(zaidejoPasirinkimas === 'Popierius')
  {
    if(kompiuteris === 'Žirklės'){
      rezultatas = 'Pralaimėjote';
    } else if(kompiuteris === 'Popierius'){
      rezultatas = 'Lygiosios';
    } else if(kompiuteris === 'Akmuo'){
      rezultatas = 'Laimėjote';
    }
  } 
  else if(zaidejoPasirinkimas === 'Akmuo'){
    if(kompiuteris === 'Žirklės'){
      rezultatas = 'Laimėjote';
    } else if(kompiuteris === 'Popierius'){
      rezultatas = 'Pralaimėjote';
    } else if(kompiuteris === 'Akmuo'){
      rezultatas = 'Lygiosios';
    }
  }

  if(rezultatas === 'Laimėjote'){
    statistika.Laimėjote += 1;
  } else if(rezultatas === 'Lygiosios'){
    statistika.Lygiosios += 1;
  } else if(rezultatas === 'Pralaimėjote'){
    statistika.Pralaimėjote += 1;
  }
  localStorage.setItem('statistika', JSON.stringify(statistika));

  document.querySelector('.rezultatas')
  .innerText = `${rezultatas}`;
  document.querySelector('.pasirinkimai')
  .innerHTML = `<div class="veiksmas-img"><p class="veiksmas-zaidejas">Jūs <img src="Images/${zaidejoPasirinkimas}.png" alt=""></p></div><div class="veiksmas-img"><p class="veiksmas-kompiuteris"><img src="Images/${kompiuteris}.png" alt=""> Kompiuteris</p></div>`;
  atnaujintiStatistika();
  
}

function atnaujintiStatistika(){
document.querySelector('.statistika')
.innerHTML = `<p class="rez">Laimėjote: ${statistika.Laimėjote}</p><p class="rez rez-lygiosios">Lygiosios: ${statistika.Lygiosios}</p><p class="rez">Pralaimėjote: ${statistika.Pralaimėjote}</p>`
}
atnaujintiStatistika();

document.querySelector('.isvalytiStatistika').addEventListener('click', ()=>{
  statistika.Laimėjote = 0;
  statistika.Lygiosios = 0;
  statistika.Pralaimėjote = 0;
  localStorage.removeItem('statistika');

  document.querySelector('.rezultatas')
  .innerText = ``;

  document.querySelector('.pasirinkimai')
  .innerHTML = ``;

  atnaujintiStatistika();
})