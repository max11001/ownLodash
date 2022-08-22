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
    let newArr = [...arr];
    newArr = newArr.filter(value => value != false);
    return newArr;
}

function concat(arr, ...values){
    let newArr = [...arr];
    values.forEach(elem => { newArr.push(elem); });
    return newArr;
}

function drop(firstArr, num) {
    newArr = [...firstArr];
    for(let i = 0; i < num; i++){
        newArr.shift(); 
    }
    return newArr;
}

function dropRight(firstArr, num) {
    newArr = [...firstArr];
    for(let i = 0; i < num; i++){
        newArr.pop(); 
    }
    return newArr;
}

function dropRightWhile(arr, predicate){
    let newArr = [...arr];
    for(let i = 0; i < newArr.length; i++){
        predicate(newArr[i]) ? null : newArr.splice(i,1);
    }
    return newArr;
}

function fill(arr, value, start, end){
    let newArr = [...arr];
    for(let  i = start; i < end - 1; i++){
        newArr[i] = value;
    }
    return newArr;
}

function head(arr){
    return arr[0];
}

function fromPairs(arr){
    let newArr = [...arr];
    let newObj = {};
    newArr.forEach((elem) => {
        newObj[elem[0].toString()] = elem[1];
    })
    return newObj;
} 

function indexOf(arr, value, fromIndex = 0) {
    let newArr = [...arr];
    for(let i = fromIndex; i < newArr.length; i++){
        if(newArr[i] == value){
            return i;
        }
    }
}

function initial(arr){
    let newArr = [...arr];
    newArr.pop();
    return newArr;
}

function intersection(arr, secArr){
    let newArr = [...arr];
    let newSecArr = [...secArr];
    let result = [];
    for(let i = 0; i < newSecArr.length; i++){
        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] == newSecArr[i]){
                result.push(newArr[j]);
                break;
            }
        }
    }
    return result;
}

function intersectionBy(arr, secArr, func = (arg) => arg){
    let newArr = [...arr];
    let newSecArr = [...secArr];
    let result = [];
    for(let i = 0; i < newSecArr.length; i++){
        for(let j = 0; j < newArr.length; j++){
            if(func(newArr[j]) == func(newSecArr[i])){
                result.push(newArr[j]);
                break;
            }
        }
    }
    return result;
}

function join(arr, sep){
    let newArr = [...arr];
    return newArr.join(sep);
}

function last(arr){
    let newArr = [...arr];
    return newArr[newArr.length - 1];
}

function lastIndexOf(arr, item){
    let newItem;
    arr.forEach((elem, index) => {
        if(elem == item) 
            newItem = index;
    })
    return newItem;
}

