# Tarjeta de Crédito Válida
#### Esta página web pide, por medio de un prompt(), el número de una tarjeta de crédito y confirma su validez según el algoritmo de Luhn.

  Primero, utilizamos un bucle do while para asegurarnos que el usuario ingrese una respuesta válida. De lo contrario, se seguirá devolviendo el prompt hasta que obtenga una respuesta válida.

  Luego definimos nuestra función isValidCard, cuya entrada es la respuesta al prompt y salida es un alert que nos dirá si el número de tarjeta de crédito es o no válido.

  En la función isValidCard creamos un arreglo vacío para almacenar los números que el usuario ingresó en el prompt. Ya que el prompt nos devolvió una cadena de texto, debemos separar los caracterers y transformarlos en números.
