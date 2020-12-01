//Alternativa 1

function FindNeedle(needle, haystack) {
  //witeramos el hastack
  for (let i = 0; i < haystack.length; i++) {
    //iteramos el needle
    for (let j = 0; j < needle.length; j++) {
      // comparamos char por char entre el needle y el hastack
      // cuando no hay match cortamos el ciclo del needle y continuamos con le haystack
      if(haystack[i + j] !== needle[j]) break
      // si terminamos de recorrer la needle devolvemos true
      if(j + 1 === needle.length) return true
    }
  }
  //si terminamos de recorrer el ciclo del haystack retornamos false
  return false
}

//Complejidad Temporal : O(N*M)
//siendo N = la longitud de haystack
//siendo M = la longitud de needle

//Complejidad Espacial : O(1) debido a que tanto el needle como el haystack nos llegan por parametro
//y las unicas variables son los iteradores.

//Alternativa 2

function findNeedle2(haystack, needle){
  // iterar sobre el haystack
  for (let i = 0; i < haystack.length; i += 1) {
      // matcheamos con slice 
      if (haystack.slice(i, i + needle.length) === needle) {
          return true;
      }
  }
  return false;
}

//Misma complejidad temporal y espacial


