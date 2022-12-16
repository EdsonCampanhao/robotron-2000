
let calc = document.querySelectorAll('[data-controle]');
let count = document.querySelectorAll('[data-contador]');
let statics = document.querySelectorAll('[data-estatistica]');
let parts = document.querySelectorAll('[data-peca]')
console.log[statics]

calc.forEach((element) => {
    element.addEventListener('click', (evento) => {
        operation(evento.target.dataset.controle, evento.target)
        attEstatistc(evento.target.dataset.peca)
        
       
       
    })
})


function operation(typeOfOperation, count) {
    if (typeOfOperation == '+') {
        count.previousElementSibling.value = Number(count.previousElementSibling.value) + 1
    } else {
        if (count.nextElementSibling.value > 0) {
            count.nextElementSibling.value = Number(count.nextElementSibling.value) - 1
        }
    }
}
function attEstatistc(peca){

    console.log(pecas[peca])
    
    statics.forEach((elemento)=>{

   
        console.log(elemento.textContent)
        console.log(pecas[peca][elemento.dataset.estatistica])

      elemento.textContent=parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatistica]
     
       
  
    }

    )
}