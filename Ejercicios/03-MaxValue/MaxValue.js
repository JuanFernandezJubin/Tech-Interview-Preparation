//Alternativa 1

// acciones: [4, 3,2,5,11]

// mayor ganancia: 9


function MaxValue(array) {
  //Esto quiere decir que lo compre a array[0] y lo vendo a array[1] "La primer diferencia"
  let sale = array[1] - array[0] 
  //Itero cada posibilidad de compra
  for (let i = 0; i < array.length - 1 ; i++) {
    //Itero cada posibilidad de venta
    for(let j = i + 1; j < array.length; j++ ){
      //sacamos la ganancia potencial
      const potential = array[j] - array[i];
      //Chequeamos con cual nos quedamos
      sale = potential > sale ? potential : sale;
    }
  }
  return sale;
} 

//Complejidad Temporal : O(N^2) siendo N la longitud del array y ^2 debido a las iteraciones

//Complejidad Espacial :  O(1) el array nos llega por parametro, y las demas variables no afectan
//dicha complejidad.


//Alternativa 2 / Óptima

function MaxValue2(array) {
  //Esto quiere decir que lo compre a array[0] y lo vendo a array[1] "La primer diferencia"
  let sale = array[1] - array[0];
  //Nos quedamos con el primer precio mínimo
  let minPrice = array[0];
  //Iteramos sobre el array
  for (let i = 1; i < array.length; i++) {
    // sacamos la ganacia potencial
    const potential = array[i] - minPrice
    // Nos quedamos con el mayor valor 
    sale = Math.max(sale, potential)
    // nos quedamos con el precio mínimo 
    minPrice = Math.min(minPrice, array[i])
  }
  //devolvemos sale
  return sale;
} 
//Complejidad Temporal : O(N) siendo N la longitud del array

//Complejidad Espacial :  O(1) el array nos llega por parametro, y las demas variables no afectan
//dicha complejidad.