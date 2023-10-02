/**
 * 1. Leia N e escreva todos os números inteiros de 1 a N.
 */
import { get_positive_number, print } from './utils/input.js'


function main(){
    //Entrada
    const numero = get_positive_number('Digite um numero: ') 
    let contador = 1

    //Processamento
    print(``)
    while(contador <= numero){
        print(`> ${contador}`) //Saída
        contador++
    }
}


main()
