// Tarea Ejercicios-----------------------------------------------------------------------------------------------------------------------------------------

//E1- Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.-----------------------------------------------------------
let array = [3, 5, 7, 1, 6];
console.log(Math.max(...array));

//E2- María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:------------------------------------
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let mariaArray = [-1, 3, 4, 2, 6];
console.log(Math.min(...mariaArray));

//E3 Escribir una función que permita saber si un número se repite dentro de un arreglo.---------------------------------------------------------------------

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

let myArray = [1, 22, 5, 14, 24, 31, 27, 15, 105, 22];

function duplicated(Array) {
  for (var i = 0; i < Array.length; i++) {
    //Excute the process for each element within the array
    for (var j = 0; j < Array.length; j++) {
      //This helps us to compare values with each other
      if (i != j) {
        //Avoid a comparison between the same element
        if (Array[i] == Array[j]) {
          return `El ${Array[i]} se encuentra más de una vez en [${Array}]`; // means there are duplicate values
        }
      }
    }
  }
  return `No hay números repetidos en [${Array}]`; // means there are no duplicate values.
}
console.log(duplicated(myArray));

//E4 Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

let arr = [1, 2, 5, 14, 24, 31, 50, 105];

const shuffledArr = (array) => array.sort(() => 0.5 - Math.random());

console.log(shuffledArr(arr));

// Tareas complementarias--------------------------------------------------------------------------------------------------------------------------------------------------

// 1.- Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor.
function greates(x, y, z) {
  let arr = [x, y, z];
  return Math.max(...arr);
}
console.log(greates(25, 145, -20));

// 2.- Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números.
function minor(a, b, c) {
  if (a > 0 && a <= 100 && b > 0 && b <= 100 && c > 0 && c <= 100) {
    return Math.min(a, b, c);
  } else return 'Ingresa numeros en un rango de 1 al 100';
}

console.log(minor(99, 42, 500));

// 3.- Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

let randomNum = Math.floor(Math.random() * 100);

const arr100 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
arr100.forEach((num) => {
  if (num == randomNum) {
    console.log(num);
  }
});

// 4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

function multDeTres(num) {
  if (Number.isInteger(num) && num >= 100 && num <= 200) {
    if (num % 3 == 0) {
      return `${num} es un multiplo de 3`;
    } else {
      return `${num} no es un multiplo de 3`;
    }
  } else {
    console.log('No es válido, ingresa un número entero del 100 al 200');
  }
}

// 5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

function xequalyplusz(x, y, z) {
  if (x == y + z) {
    return true;
  } else if (y == x + z) {
    return true;
  } else if (z == x + y) {
    return true;
  } else {
    return false;
  }
}

// 6.- Elabora un algoritmo para leer un número y determinar si es par o impar

function isEven(num) {
  return num % 2 == 0 ? 'Even number' : 'Odd number';
}
