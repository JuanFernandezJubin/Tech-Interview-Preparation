
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
  //Utilizo reduce, recibe dos parametros, el "reducer" y el "incial"   
  //si el element es un arreglo utilizo recursividad sino tomo el elemento y lo sumo al acumulador
  array.reduce((acc, el) => acc + (Array.isArray(el) ? mdArraySum2(el) : el), 0)

//Sigue las mismas complejidades que la primer alternativa

//Una variación de este ejercicio es pasar un array Multi-dimensional a un array plano
const flat = (array) =>
  array.reduce((acc,el) => acc.concat(el),[])
