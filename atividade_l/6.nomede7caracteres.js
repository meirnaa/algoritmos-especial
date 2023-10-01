import { get_name, print } from "./utils/input.js"


function main(){
    //Entrada
    let nome = get_name(`Nome: `)
    
    //Processamento
    while(nome.length !== 7){
        nome = get_name(`Nome: `)
    }

    //Saída
    print(`\nO nome digitado tem 7 caracteres!\n`)
}


main()