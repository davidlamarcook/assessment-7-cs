const perf = require('execution-time')();

//function 1
function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

//function 2
function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//Sum Zero
let sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            //console.log(i,arr[i],j,arr[j], arr[i]+arr[j])
            if (i !== j && arr[i] + arr[j] === 0){
                return true
            }
        }
    } 
    return false
}

let nums = [10, 10, 6, 2, -2, 0]

console.log(sumZero(nums))

//hasUniqueChars
let hasUniqueChar = (word) => {
    for (let i = 0; i < word.length; i++){
        for (let j = 1; j < word.length; j++){
            if (word[i] === word[j]){
                return false
            }
        }
        return true
    }
   
}

console.log(hasUniqueChar('jack'))

//sentence pangram
let sentencePangram = (sentence) => {
    let alphabet = `abcdefghijklmnopqrstuvwxyz`
    let regex = /\s/g;
    let lowercase = sentence.toLowerCase().replace(regex, "")
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1){
            return false
        }
    }
    return true
}

console.log(sentencePangram(`The quick brown fox jumps over the lazy dog`))


//longest word
let longestWord = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1.length
    } else if (str1.length < str2.length){
        return str2.length
    } else if (str1.length === str2.length){
        return `both are same length`
    }
}

console.log(longestWord(`superman`, `superman`))