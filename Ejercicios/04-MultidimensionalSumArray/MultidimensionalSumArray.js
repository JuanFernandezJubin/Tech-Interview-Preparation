
//Alternativa 1
const mdArraySum = (array) => {
  // Iniciamos la suma en 0
  let suma = 0;
  // Iteramos sobre el arreglo
  for (let i = 0; i < arr.length; i += 1) {
      // si es un arreglo le sumamos lo que devuelve llamar otra vez la función sobre ese arreglo
      if (Array.isArray(array[i])) suma += mdArraySum(array[i])
      // si no le sumamos al total
      else suma += array[i]  
  }
  // devolvemos el total
  return suma;
}
//Complejidad Temporal : O(N) siendo N la cantidad de elemento del arreglo inclusive los arreglos internos

//Complejidad Espacial : O(M) siendo M el nivel máximo de profundidad 

//ALternativa 2 / in one line

const mdArraySum2 = array =>    
array.reduce((total, element) => total + (Array.isArray(element) ? mdArraySum2(element) : element), 0)
