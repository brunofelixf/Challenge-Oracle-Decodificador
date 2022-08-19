document.querySelector('.criptografar').addEventListener('click',()=>{cript()})
document.querySelector('.descriptografar').addEventListener('click',()=>{descript()})

function cript() {
  
  document.querySelector('.blc__img').style.display = 'none';
  document.querySelector('.btn__copiar').style.visibility = 'visible';

  const msg = document.getElementById( 'mensagem');

  let texto = msg.value
  let char = texto.split('');
  var resultado ='';
  
  char.forEach(c => {
    switch (c) {
      case 'e':
        resultado += 'enter';
        break;
      case 'a':
        resultado += 'ai';
        break;
      case 'i':
        resultado += 'imes';
        break;
      case 'o':
        resultado += 'ober';
        break;
      case 'u':
        resultado += 'ufat';
        break;
    
      default:
        resultado += c
        break;
    }
  });

  console.log(resultado);

  let result = document.querySelector('.texto__criptografado')
  result.innerHTML = resultado
}

function descript() {
  
  document.querySelector('.blc__img').style.display = 'none';
  document.querySelector('.btn__copiar').style.visibility = 'visible';

  const msg = document.getElementById( 'mensagem');

  let texto = msg.value
  let resultado = '';
  
  resultado = texto.replace(/enter/g, 'e');
  resultado = resultado.replace(/ai/g, 'a');
  resultado = resultado.replace(/imes/g, 'i');
  resultado = resultado.replace(/ober/g, 'o');
  resultado = resultado.replace(/ufat/g, 'u');

  console.log(resultado);

  let result = document.querySelector('.texto__criptografado')
  result.innerHTML = resultado
}
