import { get_number, print } from "./utils/input.js"


function main(){
    //Entrada
    let multiplo = get_number(`Digite um numero: `)
    
    //Processamento
    while(multiplo % 7 !== 0){
        multiplo = get_number(`\nDigite um numero: `)
    }

    //Saída
    print(`\nO número ${multiplo} é múltiplo de 7\n`)
}


main()