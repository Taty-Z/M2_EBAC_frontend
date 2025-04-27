const campoA = document.getElementById('numero-A')
const campoB = document.getElementById('numero-B')
const formulario = document.getElementById('form-ex')



function validaValor(){
    if(campoB.value - campoA.value> 0){
        return true
    }else{
        return false
    }
}

const container = document.getElementById('container')
const novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = ''


formulario.addEventListener('submit',function(e){
    e.preventDefault()
    
    if(validaValor()){

        novoParagrafo.textContent = `Ok, ${campoB.value} é maior do que ${campoA.value}!! Atualize a página para recomeçar.`
        container.appendChild(novoParagrafo)
        campoA.value = ''
        campoB.value = ''
        

    }else{

        novoParagrafo.textContent = 'Atenção: O Número B precisa ser maior do que o Número A. Por favor, atualize a página para recomeçar.'
        container.appendChild(novoParagrafo)

    }

})

