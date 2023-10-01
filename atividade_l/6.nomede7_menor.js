import { get_name, print } from "./utils/input.js"


function main(){
    //Entrada
    let nome = get_name(`Nome: `)
    let menor_nome = nome
    
    //Processamento
    while(nome.length !== 7){
        nome = get_name(`Nome: `)

        if(menor_nome.length > nome.length){
            menor_nome = nome
        }
    }

    //Saída
    print(`\nMenor nome: ${menor_nome}\n`)
}


main()