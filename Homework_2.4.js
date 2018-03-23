var array = [1,2,3,4,5,6,7]

function reverse_partial(array, start, finish)
{
if (finish < start) return null;
  
for (var i = start, j = finish; i < j; i++, j--) {
    let t = array[j];
    array[j] = array[i];
    array[i] = t;
  }
  
return array;
}

console.log(reverse_partial(array, 0, array.length-1))