let StrRates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;"


StrRates.split(';')
console.log(StrRates.split(';'))
let arrays = StrRates.split(';')
let length =  (arrays.length - 1) 


console.log(length)

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

listToMatrix()


