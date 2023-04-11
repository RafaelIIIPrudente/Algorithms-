function partition(array: number[], low: number, high: number) {
    const pivot = array[high];

    let i = low - 1; 
    
    for (let j = low; j <= high; j++) {
        if (array[j] < pivot) {
            i++;
            //swap 
            [array[j], array[i]] = [array[i], array[j]];

        }
    }
    //putting the pivot inside the middle 
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; 
}

function quickSort(array: number[], low: number, high: number) {
    if (low < high) {
        
    }
}