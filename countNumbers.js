/***

Objetivo:

  Imprima los números del 1 a 100, separados por coma.

  - Pero para múltiplos de tres imprima “M-3” en lugar del número

  - Para los múltiplos de cinco imprima “M-5”

  - Para números que son múltiplos de tres y cinco, escriba “M-3-5”

  - Para los demas imprima solo el numero.

 Ejemplo:

  1,2,M-3,4,M-5,M-3,7,8,M-3,M-5,11,M-3,13,14,M-3-5,......
   */

 function printNumbers(numberLimit){
  const numbers = Array.from({length: numberLimit}, (_, i) => i+1 )

  const result = numbers.map(num =>
    num % 3 === 0 && num % 5 === 0 ? 'M-3-5'
    : num % 3 === 0 ? "M-3"
    : num % 5 === 0 ? "M-5"
    : num
  ).join(',')

  
  return result
 }

 console.log(printNumbers(100))
