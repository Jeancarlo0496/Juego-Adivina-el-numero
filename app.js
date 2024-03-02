let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let listaNumeros = [];

function generarNumero() 
{
    let numeroGenerado = Math. floor(Math. random()*10)+ 1; ///Generacion de numero seudo aleatorio
    numeroSecreto = numeroGenerado /// Reserva del numero generado

   
    if (numeroMaximo === listaNumeros.length) ///limitacion de turnos
        {textoElementos('h1', 'FELICITACIONES')
        textoElementos('p', 'Has Adivinado Todos Los Numeros en el Juego')
        }
    else
        {if (listaNumeros.includes(numeroGenerado)) /// evitar que se repita el numero generado
            return generarNumero()
        
    else listaNumeros.push(numeroGenerado)} 
    return       
}
   

function textoElementos(elemento, texto) /// texto a elementos
{
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;    
}

function verificarIntento()

    {let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
    
    
    if (numeroDeUsuario === numeroSecreto) /// comparacion de numeros
    
        {textoElementos ('h1', 'FELICIDADES!');
        textoElementos('p',`Acertaste el Número Secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`)

        document.getElementById('reiniciar').removeAttribute('disabled');}

        else
        {if (numeroDeUsuario < numeroSecreto)
            textoElementos('p', 'El Número Secreto es Mayor');
        else
            textoElementos('p', 'El Número Secreto es Menor');
        intentos++;}
        limpiarCaja();
       
    return;
    }

function limpiarCaja()
{
    document.querySelector('#numeroUsuario').value = '';
}

function reiniciarJuego()
{
    limpiarCaja();
    inicioJuego();

}

function inicioJuego() // condiciones originales del juego
{
    textoElementos('h1', 'Juego del Número Secreto');
    textoElementos('p', 'Ingrese Un Número del 1 al 10!');
    document.querySelector('#reiniciar').setAttribute('disabled', 'True');
    generarNumero()
    intentos = 1;
}
generarNumero()
textoElementos('h1', 'Juego del Número Secreto');
textoElementos('p', 'Ingrese Un Número del 1 al 10');




