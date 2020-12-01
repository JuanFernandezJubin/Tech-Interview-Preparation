//Alternativa 1

function SumArray(array, number) {
  //Recorro el array con dos iteradores. El primero comienza en 0 el segundo en "primero + 1"
  //Esto evita cantidad de comparaciones.
  for (let i = 0 ; i < array.length ; i++){
    for (let j = i + 1 ; j< array.length; j++){
      //Si encontramos dos numeros que sumados igualen al number, retornamos true
      if ( array[i] + array[j] === number) return true
    }
  }
  //se terminan las iteraciones y no encontramos los numeros.
  return false
}

//Complejidad temporal : O(N ^ 2) siendo N la longitud del array

//Complejidad espacial : O(1) tanto el array como el number me llegan por parametros y las unicas
//variables creadas dentro de la "f" son los iteradores.


//Alternativa 2 ---- óptima
function SumArray2(array, number) {
  //Teniendo en cuenta que el array esta ordenado como dice la consigna sino es es el caso,
  //ordenarlo antes, si se permite.

  //Creo dos punteros uno al inicio y otro al final
  let start = 0;
  let end = array.length -1;

  // Mientras el puntero del principio sea menor al del final
  while (start < end) {
    // guardo el resultado de la suma
    const suma = array[start] + array[end];
    //Si son iguales devuelvo true
    if(suma === number) return true;
    //si la suma es menor muevo el puntero de suma hacia la derecha, tomando el ultimo valor en end
    //y el siguiente en start
    else if(suma < number) start += 1
    // si suma es > que el numero, tengo que moverme hacia la izquierda desde el final
    else end -= 1
  }
  return false;
}

//En este caso la complejidad temporal es de O(N) y la espacial O(1)
