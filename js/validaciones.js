document.addEventListener("DOMContentLoaded",e =>{
    numeroMayor()
})

const numeroMayor = () =>{
    const number1 = document.getElementById("number1")
    const number2 = document.getElementById("number2")

    const submit = document.getElementById("submit")

    let number11
    let number22

    submit.addEventListener("click",e =>{
        e.preventDefault()

        number11 = Number(number1.value)
        number22 = Number(number2.value)


        if(number11 == '' || number22 == '') return alert("INGRESA NÚMERO DE GOLES")
            if(number11 == number22) return alert("EMPATE")    
            if(number11 > number22){
                tarjeta(" Argentina con "+ number11 + " goles")
            }  
            if(number22 > number11){
                tarjeta(" Francia con " + number22 + " goles")
            }            
    })
}

const tarjeta = (submit) =>{
    const tarjeta = document.createElement("p")
    tarjeta.textContent = `EL EQUIPO GANADOR CON MÁS GOLES: ${submit}`
    tarjeta.classList.add("tarjeta")
    document.body.appendChild(tarjeta)

    setTimeout(()=>{
        document.body.removeChild(tarjeta)
    },3000)
}