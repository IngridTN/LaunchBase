// Verificar se a pessoa é maior de 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

const idade = 18

if(idade >= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear a entrada')
}

if(idade === 17) {
  console.log('Volte quando tiver 18 anos')
}


// Outra forma:

const idade = 18

if(!(idade >= 18) || idade === 17) {
  console.log('Bloquear a entrada')
} else {
  console.log('Deixar entrar')
}
