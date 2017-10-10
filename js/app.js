//Utilizamos el bucle (do while) para asegurarnos que se ingrese una respuesta válida
do {
  var answer = prompt("Ingrese el número de su tarjeta de crédito.");
  if (answer !== "" && answer !== " ") { //Si NO se ingresa un campo vacío se ejecuta la función
    isValidCard(answer);
  } else { //De lo contrario se devuelve un alert solicitando una respuesta válida
    alert("Por favor ingrese un número válido.");
  }
} while (answer === "" || answer === " "); //Siempre que respuesta sea un campo vacío se ejecutarán las sentencias del do

//Creamos función que utiliza el algoritmo de Luhn para determinar si el número de una tarjeta es válido o no
function isValidCard(CreditCardNumber) {
  var myArray = []; //Creamos un arreglo vacío donde almacenaremos los números de la tarjeta en orden inverso
  var size = CreditCardNumber.length;
  var lastPosition = size - 1;
  var globalSum = 0; //Declaramos variable globalSum y le asignamos valor 0
	//Utilizamos condición for para recorrer la cadena CreditCardNumber y almacenar los números individualmente en nuestro arreglo
  for (var i = lastPosition; i >= 0; i--) {
    myArray.push(parseInt(CreditCardNumber[i]));
  }
	//Utilizamos condición for para recorrer myArray e identificar los números en posiciones pares
  for (var j = 1; j <= myArray.length; j++) { //Empezamos recorrido en índice 1 ya que es la primera posición par
    if (j % 2 === 0) {
      var number = myArray[j - 1] * 2; //Creamos variable number que almacena números en posiciones pares y los multiplica por 2
      if (number >= 10) { //Si el número es mayor que 10 debemos convertirlo en una cadena y luego sumar sus dígitos
        number = number.toString();
        var digitOne = parseInt(number[0]);
        var digitTwo = parseInt(number[1]);
        myArray[j - 1] = digitOne + digitTwo;
      } else {
        myArray[j - 1] = number; //Reemplazamos los elementos de myArray por su nuevo valor almacenado en number
      }
    }
  }
	//Utilizamos condición for para recorrer arreglo modificado y sumar todos los valores de sus elementos
  for (var k = 0; k < myArray.length; k++) {
    globalSum = globalSum + myArray[k];
  }
  if (globalSum % 10 === 0) { //Si la suma total es divisible entre 10 el número de la tarjeta es válido
    return alert("¡Felicitaciones! El número de su tarjeta de crédito es válido.");
  } else if (globalSum % 10 !== 0) { ////Si la suma total NO es divisible entre 10 el número de la tarjeta es inválido
    return alert("Lo sentimos, el número de tu tarjeta de crédito no es válido.");
  }
}
