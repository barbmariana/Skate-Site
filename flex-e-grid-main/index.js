let botaoMenu=document.querySelector('.cabecalho1')
let menu=document.querySelector('.menuLateral')

botaoMenu.addEventListener('click', function(){
menu.classList.toggle('menuLateralAtivo')
})