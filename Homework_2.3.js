var array = [1,2,3,4,5,6,7]

function Reverse(array) {
    if (!array || !Array.isArray(array)) return null;

    if (array.length == 1) return array;
    
    if (array.length < 4) {
        const temp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp;
        return array;
    }

    for (let i = 0, even = array.length%2, n = Math.floor(array.length/2); i<n; i++) {
        const temp = array [i];
        const index = n+i+even;
        array[i] = array[index];
        array[index] = temp;
    }

    return array;
}

console.log(Reverse(array))