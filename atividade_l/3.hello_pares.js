import { print } from "./utils/input.js"


function main(){
    print(`Início\n`)
   
    let contador = 1

    while(contador <= 10){
        if(eh_par(contador)){
            print(`${contador} - Hello *`) 
        }else{
            print(`${contador} - Hello`)
        }
        contador++
    }

    print(`\nFim\n`)
}


function eh_par(numero){
    return numero % 2 === 0
}


main()