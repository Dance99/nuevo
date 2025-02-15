# Algoritmo de Ordenación: Selection Sort en JavaScript

Este documento explica el algoritmo **Selection Sort** implementado en JavaScript. **Selection Sort** es un algoritmo de ordenación simple que funciona buscando el valor mínimo en una lista no ordenada y colocándolo en su lugar correcto en cada paso.
## Descripción del Código

El código proporcionado implementa el algoritmo **Selection Sort** para ordenar un arreglo de números en orden ascendente.

### 1. Función `selectionSort(arr)`

La función toma un arreglo de números como parámetro y lo ordena en orden ascendente utilizando el algoritmo **Selection Sort**. A continuación se describe paso a paso cómo funciona:

- **Inicialización**:
  - Se obtiene la longitud del arreglo `arr` y se guarda en la variable `n`.

- **Ciclo Externo**:
  - El ciclo externo recorre el arreglo desde el primer hasta el penúltimo elemento. En cada iteración, selecciona el índice `i` del primer elemento no ordenado.

- **Ciclo Interno**:
  - El ciclo interno recorre los elementos restantes del arreglo después de `i` para encontrar el valor mínimo.

- **Intercambio**:
  - Una vez encontrado el valor mínimo, se realiza un intercambio entre el valor mínimo encontrado y el valor en la posición `i`, colocando el valor más pequeño en su lugar correspondiente.


## Descripción del Código

A continuación se muestra el código de la función **selectionSort** que ordena un arreglo de números en orden ascendente:

```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Encontrar el mínimo en el array sin ordenar
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Intercambiar el mínimo con el primer elemento
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arra1 = [8, 5, 6, 10];
console.log(selectionSort(arra1)); // [5, 6, 8, 10]

- **Devolución**:
  - Finalmente, la función devuelve el arreglo ordenado.

### 2. Ejemplo de Ejecución

```javascript
let arra1 = [8, 5, 6, 10];
console.log(selectionSort(arra1));  // [5, 6, 8, 10]
