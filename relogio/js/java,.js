// DOM
const horas = document.querySelector('#horas') 
const minutos = document.querySelector('#minutos') 
const segundos = document.querySelector('#segundos') 
const daa = document.querySelector('#daa') 
const mes = document.querySelector('#mes') 
const ano = document.querySelector('#ano') 
const texto = document.querySelector('#texto') 

// EVENTO
setInterval(relogio,1000)

//FUNÇÃO
function relogio() {
    let dia = new Date()

    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()    
    let dat = dia.getDate()
    let month = dia.getMonth() +1
    let year = dia.getFullYear()
    
    if (dat<10){
        dat = "0"+dat
    }
    
    if (month<10){
        month = "0"+month
    }
    

    if (hr<10){
        hr = "0"+hr
    }
    
    if (min<10){
        min = "0"+min
    }
    
    if (seg<10){
        seg = "0"+seg
    }

    if (hr>=5 && hr<12) {
        texto.textContent = 'Bom Dia!'
    } else if(hr>=12 && hr<18){
        texto.textContent = 'Boa Tarde!'
        
    } else{
        texto.textContent = 'Boa Noite!'

    }
    
    

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    daa.textContent=dat
    mes.textContent=month
    ano.textContent=year

}

