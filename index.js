document.querySelector('.criptografar').addEventListener('click',()=>{cript()})

function cript() {
  
  document.querySelector('.blc__img').style.display = 'none';

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
}
