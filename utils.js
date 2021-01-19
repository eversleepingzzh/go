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

module.exports = {
    deepcloneArray,
    compareArray
}