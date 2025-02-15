// const bubbleSort = (array) => { // reemplaza el function por la const y la flecha (=>).
//     let swapped;
//     for (let i = array.lenght - 1; i > 0; i--) { //Este ciclo itera de la ultima posicion a la primera 
//         swapped = false; // Varaible que usa para saber si se ha cambiado el array
//         for (let j = 0; j < i; j++) { // Este ciclo itera de la primera posicion  hasta la ultima
//             if (array[j] > array[i + 1]) { // condicion para organizar el array
//                 [array [j], array[j + 1]]= 
//                 [array[j + 1], array[j]];
//                 swapped = true; //si se ha cambiado el array, se pone a true
//             }

//         }
//         if (!swapped) break;// si no se ha cambiado ada el array, se detiene el ciclo
//     }
//     return array;
// }

// let array = [3,5,8,10,17,20]
// console.log(bubbleSort(array))



// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i= 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j -1;
//         }
//         arr [j + 1] = key;
//     }
//     return arr;
// }

// let array = [10,3,8,15,2]
// console.log(insertionSort(array))


//metodo de seleccion

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { //encontrar el minimo en el array sin ordenar
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = j;
            }
        }
        //intercambiar el minimo con el primer elemento 
        let temp = arr [minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arra1 = [8,5,6,10]
console.log(selectionSort(arra1))