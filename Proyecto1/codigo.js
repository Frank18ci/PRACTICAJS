const btnNumeros = document.getElementsByClassName('btn-num');
const textoNumero = document.getElementById('numero');
const btnEliminar = document.getElementById('btnEliminar');
const btnEliminarUno = document.getElementById('btnEliminarUno');
const btnIgual = document.getElementById('btn-igual');
btnEliminar.addEventListener('click', () => {
    textoNumero.value = '';
});
btnEliminarUno.addEventListener('click', () => {
    if(textoNumero.value.length > 0)
        textoNumero.value = textoNumero.value.substring(0, textoNumero.value.length-1);
});
for(let i = 0; i < btnNumeros.length; i++){
    btnNumeros[i].addEventListener('click', () => {
        let valor = textoNumero.value;
        valor += btnNumeros[i].textContent.trim();
        textoNumero.value = valor;
    });
}
btnIgual.addEventListener('click', () => {
    let valor = textoNumero.value;
    textoNumero.value = evaluaArimetica(valor);
});
function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
   }
   console.log( evaluaArimetica('12/5*9+9.4*2') );