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
/* new */
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

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
 console.log(dropRightWhile(users, function(o) { return !o.active; }));  
