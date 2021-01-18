deepcloneArray = (arr) => {
    let re = [];
    for(let i = 0;i < arr.length; i++){
        let [...arr1] = arr[i];
        re.push(arr1);
    }
    return re
}

module.exports = {
    deepcloneArray
}