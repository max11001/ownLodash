function chunk(arr, chunk){
    const newArr = [];
    let chunkedArray = [];
    for(let i = 0; i < arr.length; i++){
        chunkedArray.push(arr[i]);
        if(chunkedArray.length == chunk || i == arr.length - 1){
            newArr.push(chunkedArray);
            chunkedArray = [];
        }
    }

    return newArr;
}

function compact(arr) {
    arr = arr.filter(value => value != false);
    return arr;
}
