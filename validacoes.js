function verificarVazio(parametro1, parametro2) {
  if (!parametro1 || !parametro2) {    
    return console.log ("Parametros incorretos. Indique parametros corretos") 
  } else{    
    return console.log ("Parametros corretos")      
  }
}

function verificarCaracteresMaximo(parametro) {
  if (parametro.length > 10) {
    return console.log("Palavra acima dos caracteres máximos")
  } else {
    return console.log("Palavra abaixo dos caracteres máximos")
  }
}

function verificarCaracteresMinimo(parametro) {
  if (parametro.length < 2) {
    return console.log("Palavra abaixo dos caracteres mínimos")
  } else {
    return console.log("Palavra acima dos caracteres mínimos")
  }
}

function verificarNumeroInteiro(parametro) {
  if ((Number.isInteger(parametro)) && !parametro == false) {
    console.log("O número é inteiro")
  } else {
    console.log("O número não é inteiro")
  }
}

function verificarTudo() {
  const parametroPalavra = prompt("Digite uma palavra qualquer: ")
  const parametroNumero = Number(prompt("Digite um número qualquer: "))

    verificarVazio(parametroPalavra, parametroNumero)
    verificarVazio(parametroPalavra, parametroNumero)
  
    verificarCaracteresMaximo(parametroPalavra)
    verificarCaracteresMaximo(parametroPalavra)

    verificarCaracteresMinimo(parametroPalavra)
    verificarCaracteresMinimo(parametroPalavra)

    verificarNumeroInteiro(parametroNumero)
    verificarNumeroInteiro(parametroNumero)      

}

verificarTudo()

