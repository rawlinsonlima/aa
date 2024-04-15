/*
Fatoração do código do exercício 2
    
Fómula do IMC:
IMC = peso /  (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obesidade Grave.

obs: nesse e nos próximos exercícios trabalharei atribuindo nomes em inglês
*/

function imcCalculate(weight, heightInMeters){
    return weight / Math.pow(heightInMeters,2)
}

function bmiCondition (BMI) {
    if (BMI  < 18.5) {
        return "Abaixo do peso";
    }else if ( BMI >= 18.5 && BMI <= 25 ){
        return "com Peso Normal";
    }else if (BMI > 25 && BMI <= 30){
        return "Acima do peso";
    }else if (BMI > 30 && BMI <= 40){
        return "Obeso";
    } else if (BMI > 40){
        return "Obesidade grave";
    }
}

// main * * * função anonima auto execultada
(function (){
    let name = "Rosi Neide";
    let weight = 75;
    let heightInMeters = 1.90;
    let BMI = imcCalculate(weight, heightInMeters);
    console.log(`O Paciente ${name} está com o IMC de ${BMI.toFixed(2)} e se classifica na condiçao de ${bmiCondition(BMI)}`)
})();


