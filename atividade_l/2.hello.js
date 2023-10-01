import { print } from "./utils/input.js"


function main(){
    print(`Início\n`)
   
    let contador = 1

    while(contador <= 10){
        print(`${contador} - Hello`)
        contador++
    }

    print(`\nFim\n`)
}


main()