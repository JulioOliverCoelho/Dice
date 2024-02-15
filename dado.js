const getRandomIntergerInclusive= (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min
  var number =(getRandomIntergerInclusive(1, 2))

  localStorage.setItem("result", number)
// CHAMA A FUNÇÃO PRA MUDAR COR E PASSA O VALOR SALVO NA LocalStorage 
mudarCor(localStorage.getItem("cor"))


  function girar(){
    
  /* botões para mudar de cor */
  const b1 = window.document.querySelector('div#b1')
  const b2 = document.querySelector('div#b2')
  const b3 = document.querySelector('div#b3')

  const ponto4= window.document.querySelector('div.ponto4')
  const ponto2= window.document.querySelector('div.ponto2')
  const ponto3= window.document.querySelector('div.ponto3')
  const ponto5= window.document.querySelector('div.ponto5')
  const ponto6= window.document.querySelector('div.ponto6')
  const ponto7= window.document.querySelector('div.ponto7')
  const ponto1= window.document.querySelector('div.ponto')
  
  const txt = window.document.querySelector('div.titulo')
  const res = document.getElementById('txt_res').value
  const adv = window.document.querySelector('div#adv')
  const fot = window.document.getElementById('footer')
  const progresso = document.querySelector(".barra div")
  

  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  
  }

  switch(number){
  case 0:
      adv.innerHTML= `[ERRO], o computador sorteou o número 0`
      adv.style.color='red'
      break
  case 1:
  txt.style.color='black'
  txt.innerHTML=`Você tirou o número 1`
  ponto4.style.background='black'
  ponto1.style.background='transparent'
  ponto2.style.background='transparent'
  ponto3.style.background='transparent'
  ponto7.style.background='transparent'
  ponto5.style.background='transparent'
  ponto6.style.background='transparent'
  
      if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  
  }
      break
  case 2:
  
  txt.innerHTML=`Você tirou o número 2`
  ponto3.style.background='black'
  ponto5.style.background='black'
  ponto1.style.background='transparent'
  ponto2.style.background='transparent'
  ponto7.style.background='transparent'
  ponto4.style.background='transparent'
  ponto6.style.background='transparent'

  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  }
      break
  case 3:
  txt.style.color='black'
  txt.innerHTML=`Você tirou o número 3`
  ponto3.style.background='black'
  ponto5.style.background='black'
  ponto1.style.background='transparent'
  ponto2.style.background='transparent'
  ponto7.style.background='transparent'
  ponto4.style.background='black'
  ponto6.style.background='transparent'
  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  }
      break
  case 4:
  txt.style.color='black'
  txt.innerHTML=`Você tirou o número 4`
  ponto4.style.background='transparent'
  ponto1.style.background='black'
  ponto2.style.background='transparent'
  ponto3.style.background='black'
  ponto7.style.background='black'
  ponto5.style.background='black'
  ponto6.style.background='transparent'
  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  }
      break
  case 5:
  txt.style.color='black'
  txt.innerHTML=`Você tirou o número 5`
  ponto4.style.background='black'
  ponto1.style.background='black'
  ponto2.style.background='transparent'
  ponto3.style.background='black'
  ponto7.style.background='black'
  ponto5.style.background='black'
  ponto6.style.background='transparent'

  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  }
      break
  case 6:
  txt.style.color='black'
  txt.innerHTML=`Você tirou o número 6`
  ponto4.style.background='transparent'
  ponto1.style.background='black'
  ponto2.style.background='black'
  ponto3.style.background='black'
  ponto7.style.background='black'
  ponto5.style.background='black'
  ponto6.style.background='black'  
  if (res == number){
  txt.innerHTML=`Parabéns você acertou!!!`
  txt.style.color='#ffffff'
  adv.style.color='transparent';
  document.body.style.background='#008000'
  fot.style.color='#ffffff'
  }
      break
  default:
  txt.innerHTML=`[ERRO], o computador sorteou um número inválido`  
  txt.style.color='red'
      break
return girar()
  }
  }

function mudarCor(cor){
  const corDiv = document.querySelector('div.square')
  if(cor == 0){
    corDiv.style.background='#fff'
  } else if(cor == 1){
    corDiv.style.background='#b8b8b8'
  } else if(cor == 2){
    corDiv.style.background='#50d8cbf7'
  } else if(cor == 3){
    corDiv.style.background='#f80e0eed'
  }
  
  localStorage.setItem("cor", cor)
}



  
