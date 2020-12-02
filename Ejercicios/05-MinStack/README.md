

<p>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Min Stack
## Introducción
Para poder comprender el objetivo de esta actividad necesitamos saber **¿Qué es un stack?** Un stack, también conocido como pila es **LIFO** (Last-In First-Out), es decir, el último en entrar es el primero en salir.       

En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:
1. **push(value) :** añadir el elemento, value, al stack.
2. **pop ( ) :** sacar un elemento del stack.
3. **min ( ) :** obtener el elemento con el valor mínimo.

#### Importante
* **TODOS** los métodos mencionados anteriormente deben ser de O(1).
* Para la resolución del ejercicio no se puede utilizar **ningún** *Array method*

##### Importante

**NO PUEDES** guardar el valor mínimo y cada vez que agregas un nuevo valor compararlo **¿POR QUÉ?**
**( ! ) IDEA:** Tener una estructura separada para guardar el mínimo por cada nodo que se agrega, y cuando sacamos el nodo removemos ese mínimo
