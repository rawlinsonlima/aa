// Função escreva meu nome.

function writeMyName(name){
    console.log('Meu nome é ' + name);
}

// Função de Verificação
function confirmAge(years) {
    if (years >= 18) {
        return console.log('e sou maior de idade')
    } else {
        return console.log('e sou menor de idade')
    }
}

writeMyName('Rawlinson');
confirmAge(25);

/*
Fatoração do código do exercício 3

Elabore um algorítimo que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta e a escolha das condições de pagamento.
Utilioize os Códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
   1 - À vista Débito = recebe 10% de desconto;
   2 - À vista dinheiro ou PIX = recebe 15% de desconto;
   3 - Em duas vezes no Cartão de crédito = preço normal
   4 - Acima de duas vezes = juros  de 10%


obs: nesse e nos próximos exercícios trabalharei atribuindo nomes em inglês

*/

function productCost(tagPrice, paymentForm){
    if (paymentForm === 1) {
    return console.log(tagPrice - (tagPrice * 0.1));
} else if (paymentForm === 2) {
    return console.log(tagPrice - (tagPrice * 0.15));
} else if (paymentForm === 3) {
    console.log(tagPrice);
} else if (paymentForm === 4) {
    console.log(tagPrice + (tagPrice * 0.1));
} else {
    console.log("Forma de pagamento inexistente, favor corrigir e tentar novamente");
}
}


productCost(100, 8);