const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.itens');
const enlaces = document. querySelectorAll('.itens a')

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
})

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    });
}
function cerrarMenu(){
    enlaces.forEach( enlace =>{
        enlace.addEventListener('click',(e)=>{
        if(e.target.tagName === 'A'){
            navegacion.classList.add('ocultar')
        }
        });

    });
}