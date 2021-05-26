const numero1 = process.argv[2];
const numero2 = process.argv[3];

const palabra = process.argv[4] || 'Ana lava lana';

function producto(numero1, numero2) {
    if(numero2 == 0) {
        return 0;
    }
  return numero1 += producto(numero1, numero2-1);
}

function palindromo(palabra) {
  palabra = palabra.toLowerCase().split("").filter(x => {
    if (x !== ' ') {
      return x
    }
  }).join('');
  palindroma = palabra.split("").reverse().join('')
  if(palabra == palindroma) {
    return console.log('Si es un palindromo')
  }
  console.log('No es un palindromo')
}

console.log(producto(parseInt(numero1,10), parseInt(numero2,10)))
console.log(palindromo(palabra))
