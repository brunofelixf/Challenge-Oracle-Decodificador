function sinal() {
  document.querySelector('.blc__img').style.display = 'none';
}

const msg = document.getElementById( 'mensagem');

msg.addEventListener('input', (e)=>{
  let texto = e.target.value
  texto = String(texto)
  var resultado = texto.replace( /e/g, "enter");
  // result = e.target.value.replace(/a/b, 'ai');
  // result = e.target.value.replace(/i/b, 'imes');
  // result = e.target.value.replace(/o/b, 'ober');
  // result = e.target.value.replace(/u/b, 'ufat');

  console.log(resultado);
})
