const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const campoA = document.getElementById("campoA").value;
    
    const campoB = document.getElementById("campoB").value;
    
    const mensagemA = "O numero do campo B precisa ser maior que o do campo A";
    const mensagemB = "Formulario Validado";
    const mensagemC = "Os numeros são iguais";
    const mensagemErrorA = "Digite um numero no Campo A";
    const mensagemErrorB = "Digite um numero no Campo B"; 
    if(campoA == ''){
        document.querySelector('.messageErrorA').innerHTML = mensagemErrorA;
    }else if(campoB == ''){
        document.querySelector('.messageErrorB').innerHTML = mensagemErrorB;
    }
    else if(parseInt(campoA) > parseInt(campoB)){
        document.querySelector('.campoAmaior').innerHTML = mensagemA;
        document.querySelector('.messageErrorB').innerHTML = "";
        document.querySelector('.messageErrorA').innerHTML = "";
    }
    else if(parseInt(campoB) > parseInt(campoA)){
        document.querySelector('.campobmaior').innerHTML = mensagemB;
        document.querySelector('.messageErrorB').innerHTML = "";
        document.querySelector('.messageErrorA').innerHTML = "";
    }
    else{
        document.querySelector('.camposIguais').innerHTML = mensagemC;
        document.querySelector('.messageErrorB').innerHTML = "";
        document.querySelector('.messageErrorA').innerHTML = "";
    }
})

