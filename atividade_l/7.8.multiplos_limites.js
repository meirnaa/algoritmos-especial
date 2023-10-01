/** 7. Peça ao usuário limite inferior, limite superior e então um número. 
* Mostre cada número entre inferior e superior, inclusive, que seja múltiplo de número.
* 8. Force no anterior que Limite Superior seja maior que o limite inferior
*/

import { get_number_min, get_positive_number, print } from "./utils/input.js"


function main(){
    //Entrada
    let l_inferior = get_positive_number(`Digite um limite inferior: `)
    const l_superior = get_number_min(`Digite um limite superior: `, l_inferior + 1)
    const numero = get_positive_number(`Digite um numero: `) 

    print(`\nMúltiplos de ${numero}:\n`)
    
    //Processamento
    while(l_inferior <= l_superior){

        if(eh_multiplo(l_inferior, numero)){
            print(`${l_inferior}`) //Saída
        }

        l_inferior++
    }
    print(``)
}


function eh_multiplo(candidato, numero){
    return candidato % numero === 0
}


main()