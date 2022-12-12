// Tarea Ejercicios-----------------------------------------------------------------------------------------------------------------------------------------

//E1- Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.-----------------------------------------------------------
let arrayUno = document.getElementById('num1');
let arrayDos = document.getElementById('num2');
let arrayTres = document.getElementById('num3');
let arrayCuatro = document.getElementById('num4');
let arrayCinco = document.getElementById('num5');
let result = document.getElementById('result1');
let mayorBtn = document.getElementById('func1');
let restartBtn = document.getElementById('reinicio1');

function highNum(a, b, c, d, e) {
  let array = [a, b, c, d, e];
  return (result.textContent = Math.max(...array));
}

mayorBtn.addEventListener('click', function (e) {
  e.preventDefault();
  highNum(
    arrayUno.value,
    arrayDos.value,
    arrayTres.value,
    arrayCuatro.value,
    arrayCinco.value
  );
});
restartBtn.addEventListener('click', function (e) {
  e.preventDefault();
  arrayUno.value = '';
  arrayDos.value = '';
  arrayTres.value = '';
  arrayCuatro.value = '';
  arrayCinco.value = '';
  result.textContent = '';
});

//E2- María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:------------------------------------
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
let array1 = document.getElementById('num1s');
let array2 = document.getElementById('num2s');
let array3 = document.getElementById('num3s');
let array4 = document.getElementById('num4s');
let array5 = document.getElementById('num5s');
let resultMenor = document.getElementById('result2');
let menorBtn = document.getElementById('func2');
let restartBtnMenor = document.getElementById('reinicio2');

function lowNum(a, b, c, d, e) {
  let array = [a, b, c, d, e];
  return (resultMenor.textContent = Math.min(...array));
}

menorBtn.addEventListener('click', function (e) {
  e.preventDefault();
  lowNum(array1.value, array2.value, array3.value, array4.value, array5.value);
});

restartBtnMenor.addEventListener('click', function (e) {
  e.preventDefault();
  array1.value = '';
  array2.value = '';
  array3.value = '';
  array4.value = '';
  array5.value = '';
  resultMenor.textContent = '';
});
//E3 Escribir una función que permita saber si un número se repite dentro de un arreglo.---------------------------------------------------------------------

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]
let num1 = document.getElementById('num-1');
let num2 = document.getElementById('num-2');
let num3 = document.getElementById('num-3');
let num4 = document.getElementById('num-4');
let num5 = document.getElementById('num-5');
let num6 = document.getElementById('num-6');
let num7 = document.getElementById('num-7');
let num8 = document.getElementById('num-8');
let resultRep = document.getElementById('result3');
let repeatBtn = document.getElementById('func3');
let restartBtnRep = document.getElementById('reinicio3');

function duplicated(a, b, c, d, e, f, g, h) {
  let array = [a, b, c, d, e, f, g, h];
  for (let i = 0; i < array.length; i++) {
    //Excute the process for each element within the array
    for (let j = 0; j < array.length; j++) {
      //This helps us to compare values with each other
      if (i != j) {
        //Avoid a comparison between the same element
        if (array[i] == array[j]) {
          return (resultRep.textContent = `El ${array[i]} se encuentra más de una vez en [${array}]`); // means there are duplicate values
        }
      }
    }
  }
  return (resultRep.textContent = `No hay números repetidos en [${array}]`); // means there are no duplicate values.
}

repeatBtn.addEventListener('click', function (e) {
  e.preventDefault();
  duplicated(
    num1.value,
    num2.value,
    num3.value,
    num4.value,
    num5.value,
    num6.value,
    num7.value,
    num8.value
  );
});
restartBtnRep.addEventListener('click', function (e) {
  e.preventDefault();
  num1.value = '';
  num2.value = '';
  num3.value = '';
  num4.value = '';
  num5.value = '';
  num6.value = '';
  num7.value = '';
  num8.value = '';
  resultRep.textContent = '';
});

//E4 Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
let numone = document.getElementById('num--1');
let numtwo = document.getElementById('num--2');
let numthree = document.getElementById('num--3');
let numfour = document.getElementById('num--4');
let numfive = document.getElementById('num--5');
let numsix = document.getElementById('num--6');
let numseven = document.getElementById('num--7');
let numeight = document.getElementById('num--8');
let resultSh = document.getElementById('result4');
let shuffleBtn = document.getElementById('func4');
let restartBtnSh = document.getElementById('reinicio4');

const shuffledArr = (array) =>
  (resultSh.textContent = array.sort(() => 0.5 - Math.random()));

function shuffle(a, b, c, d, e, f, g, h) {
  let arr = [a, b, c, d, e, f, g, h];
  shuffledArr(arr);
}
shuffleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  shuffle(
    numone.value,
    numtwo.value,
    numthree.value,
    numfour.value,
    numfive.value,
    numsix.value,
    numseven.value,
    numeight.value
  );
});
restartBtnSh.addEventListener('click', function (e) {
  e.preventDefault();
  numone.value = '';
  numtwo.value = '';
  numthree.value = '';
  numfour.value = '';
  numfive.value = '';
  numsix.value = '';
  numseven.value = '';
  numeight.value = '';
  resultSh.textContent = '';
});

// Tareas complementarias--------------------------------------------------------------------------------------------------------------------------------------------------

// 1.- Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor.
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let resultOf = document.getElementById('result5');
let funcBtn = document.getElementById('func5');
let resetBtn = document.getElementById('reinicio5');

function greatest(x, y, z) {
  let arr = [x, y, z];
  if (x > 0 && x <= 100 && y > 0 && y <= 100 && z > 0 && z <= 100) {
    return (resultOf.textContent = Math.max(...arr));
  } else return 'Ingresa numeros en un rango de 1 al 100';
}

funcBtn.addEventListener('click', function (e) {
  e.preventDefault();
  greatest(number1.value, number2.value, number3.value);
});
resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  number1.value = '';
  number2.value = '';
  number3.value = '';
  resultOf.textContent = '';
});

// 2.- Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números.
let numbera = document.getElementById('number-1');
let numberb = document.getElementById('number-2');
let numberc = document.getElementById('number-3');
let resultOfMin = document.getElementById('result6');
let funcBtnMin = document.getElementById('func6');
let resetBtnMin = document.getElementById('reinicio6');

function minor(a, b, c) {
  if (a > 0 && a <= 100 && b > 0 && b <= 100 && c > 0 && c <= 100) {
    return (resultOfMin.textContent = Math.min(a, b, c));
  } else return 'Ingresa numeros en un rango de 1 al 100';
}

funcBtnMin.addEventListener('click', function (e) {
  e.preventDefault();
  minor(numbera.value, numberb.value, numberc.value);
});
resetBtnMin.addEventListener('click', function (e) {
  e.preventDefault();
  numbera.value = '';
  numberb.value = '';
  numberc.value = '';
  resultOfMin.textContent = '';
});

// 3.- Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

// let randomNum = Math.floor(Math.random() * 100);

// const arr100 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
//   80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
//   99, 100,
// ];
// arr100.forEach((num) => {
//   if (num == randomNum) {
//     console.log(num);
//   }
// });

let myNum = document.getElementById('mynumber');
let resultGuess = document.getElementById('result7');
let funcBtnGuess = document.getElementById('func7');
let resetBtnGuess = document.getElementById('reinicio7');

function intento(numeroCorrecto) {
  let randomNum = Math.floor(Math.random() * 101);
  if (randomNum == numeroCorrecto) {
    return true;
  } else {
    return false;
  }
}

funcBtnGuess.addEventListener('click', function (e) {
  e.preventDefault();
  let aciertoMaquina = false;
  let numeroIntentos = 0;
  while (aciertoMaquina == false) {
    if (intento(myNum.value) == true) {
      aciertoMaquina = true;
      resultGuess.textContent = `Número: ${myNum.value}, Intentos: ${numeroIntentos}`;
    } else {
      numeroIntentos = numeroIntentos + 1;
    }
  }
});
resetBtnGuess.addEventListener('click', function (e) {
  e.preventDefault();
  myNum.value = '';
  resultGuess.textContent = '';
});

// 4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let myNumNew = document.getElementById('myNum');
let resultMult = document.getElementById('result8');
let funcBtnMult = document.getElementById('func8');
let resetBtnMult = document.getElementById('reinicio8');

function multDeTres(num) {
  if (Number.isInteger(num)) {
    if (num >= 100 && num <= 200) {
      if (num % 3 == 0) {
        return (resultMult.textContent = `${num} es un multiplo de 3`);
      } else {
        return (resultMult.textContent = `${num} no es un multiplo de 3`);
      }
    } else {
      return (resultMult.textContent =
        'No es válido, ingresa un número entero del 100 al 200');
    }
  } else {
    return (resultMult.textContent = 'No es un número entero');
  }
}

funcBtnMult.addEventListener('click', function (e) {
  e.preventDefault();
  multDeTres(Number(myNumNew.value));
});
resetBtnMult.addEventListener('click', function (e) {
  e.preventDefault();
  myNumNew.value = '';
  resultMult.textContent = '';
});

// 5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let resultado = document.getElementById('result9');
let funcion = document.getElementById('func9');
let resetOpt = document.getElementById('reinicio9');

function xequalyplusz(x, y, z) {
  if (x == y + z) {
    return (resultado.textContent = `${x} es igual a ${y} + ${z}`);
  } else if (y == x + z) {
    return (resultado.textContent = `${y} es igual a ${x} + ${z}`);
  } else if (z == x + y) {
    return (resultado.textContent = `${z} es igual a ${x} + ${y}`);
  } else {
    return (resultado.textContent =
      'Ningún número es igual a la suma de los otros dos');
  }
}

funcion.addEventListener('click', function (e) {
  e.preventDefault();
  xequalyplusz(Number(opt1.value), Number(opt2.value), Number(opt3.value));
});

resetOpt.addEventListener('click', function (e) {
  e.preventDefault();
  opt1.value = '';
  opt2.value = '';
  opt3.value = '';
  resultado.textContent = '';
});

// 6.- Elabora un algoritmo para leer un número y determinar si es par o impar
let evenOrOdd = document.getElementById('evenOrOdd');
let resultEO = document.getElementById('result10');
let funcBtnEO = document.getElementById('func10');
let resetBtnEO = document.getElementById('reinicio10');

function isEven(num) {
  return num % 2 == 0
    ? (resultEO.textContent = 'Par')
    : (resultEO.textContent = 'Impar');
}

funcBtnEO.addEventListener('click', function (e) {
  e.preventDefault();
  isEven(evenOrOdd.value);
});

resetBtnEO.addEventListener('click', function (e) {
  e.preventDefault();
  evenOrOdd.value = '';
  resultEO.textContent = '';
});
