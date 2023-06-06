const values = [1,2,3]
const valuesTwo = [5,1,2,3,10]

function doubleValues(arr){
    const doubledValues = [];
    arr.forEach(function(indexValue){
       doubledValues.push(indexValue * 2)
    })
    
    return doubledValues;
}

function onlyEvenValues (arr){
    const evenValues = [];
    arr.forEach(function(indexValue){
        if (indexValue % 2 === 0) {
        evenValues.push(indexValue)
        }
    })
    return evenValues;
}

const firstAndLastOne = ["colt", "matt", "tim", "test"]
const firstAndLastTwo = ["hi", "goodbye", "smile"]

function showFirstAndLast (arr){
    let firstAndLast = [];
    arr.forEach(function(value){
        firstAndLast.push(value.charAt(0) + value.charAt(value.length-1))
    
    })
    return firstAndLast;
}
//["ct", "mt", "tm", "tt"]

const addKeyAndValueArr = [
    {name:"elie"},
    {name:"tim"},
    {name:"matt"},
    {name:"colt"}
]

const addKeyAndValueKey = "title"

const addKeyAndValueValue = "Instructor"

function addKeyAndValue(arr, key, value) {
        return arr.map((item) => {
        item[key] = value;
        return item;
       });
    }

function vowelCount(string){
    string = string.toLowerCase();
    let object = {};
    string.split("").forEach(function(letter){
        console.log(letter)
        let vowelString = 'aeiou'
        vowelString.split("").forEach(function(vowel){
            if (object[letter] === undefined && vowel === letter){
                object[letter] = 1;
            }
            else if (vowel === letter){
                object[letter] ++;

            }
        })
    })
    return object;
}

const numbersArr = [1,2,3]
const negNumbersArr = [-1,-2,-3]

function doubleValuesWithMap (arr){
    let doubledNums = arr.map(function(num){
        return num * 2; 
    })
    return doubledNums;
}


function valTimesIndex (arr){
    let newVal = arr.map(function(num, i){
        return num * i ;
    })
    return newVal;
}

function extractKey(arr, key){
    let keyVal = arr.map(function(val){
        return val[key]
    })
    return keyVal;
}

const fullNames = [
    {first: 'Elie', last:"schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
]

function extractFullName (arr){
    let fullName = arr.map(function(object){
        return `${object.first} ${object.last}`
    })
    return fullName;
}

function filterByValue (arr){
    let obj = arr.filter(function(object){
        if(object.isCatOwner === true){
            return object
        }
    })
    return obj;
}

function find (arr,val){
    for(i=0; i<arr.length; i++){
        if(arr[i] === val ){
            let valFilter = arr.filter(function(v){
                if(v === val){
                    return val
                }
            })
            return valFilter;
        }
    }
}

// can't get it to be undefined

function findInObj (arr,key,val){
    newArr = [];
    let item = arr.map(function(a){
        if(a[key] === val){
            newArr.push(a)
        }
    })
    return newArr[0];
}

function removeVowels (string){
    string = string.toLowerCase();
    let arr = [];
    string.split("").forEach(function(letter){
        let consonantString = 'bcdfghjklmnpqrstvwxyz'
        consonantString.split("").forEach(function(consonant){
            if (consonant === letter){
                arr.push(consonant);
            }
        })
    })
    return arr.toString().replaceAll(",","");
}


// help

function doubleOddNumbers (arr){
    const oddValues = [];
    arr.forEach(function(indexValue){
        if (indexValue % 2 === 1) {
        oddValues.push(indexValue)
        }
    })
    const doubledValues = [];
    oddValues.forEach(function(indexValue){
       doubledValues.push(indexValue * 2)
    })
    return doubledValues;
}