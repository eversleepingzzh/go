deepcloneArray = (arr) => {
    let re = [];
    for(let i = 0;i < arr.length; i++){
        let [...arr1] = arr[i];
        re.push(arr1);
    }
    return re
}

compareArray = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for(j = 0; j < arr1.length; j++) {
            let value1 = arr1[i][j]
            let value2 = arr2[i][j]
            if(value1 !== value2) {
                return false
            }
        }
    }
    return true;
}

vertexEquals = ([x1, y1], [x2, y2]) => {
    return x1 === x2 && y1 === y2
}

module.exports = {
    deepcloneArray,
    compareArray,
    vertexEquals
}