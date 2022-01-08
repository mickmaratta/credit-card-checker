// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


//Function to test if a credit card is valid
const validateCred = array => {
    let newArray = [];
    for (i = array.length-2; i>=0; i-=2) {
       let multiplyTwoValue = array[i] * 2;
       if (multiplyTwoValue >= 10) {
           newArray.push(multiplyTwoValue-9);
       } else {
           newArray.push(multiplyTwoValue);
       };
    };
    for (i = array.length-1; i >=0; i-=2) {
        newArray.push(array[i]);
    };
    newArray = newArray.reduce((a, b) => {
        return a+b;
    })
    if ((newArray%10) === 0) {
        return true;
    } else {
        return false;
    };
};

//Function to list all invalid credit card numbers
const findInvalidCards = creditCards => {
    let invalidCards = []
    for (let arr of creditCards) {
        if (!validateCred(arr)) {
            invalidCards.push(arr);
        };
    };
    return invalidCards;
}

const invalidCards = findInvalidCards(batch)

//Function to ID which companies gave out invalid credit cards
const idInvalidCompanies = creditCards => {
    invalidCompanies = []
    for (let arr of invalidCards) {
        if (arr[0] === 3 && !invalidCompanies.includes('Amex')) {
            invalidCompanies.push('Amex')
        } else if (arr[0] === 4 && !invalidCompanies.includes('Visa')) {
            invalidCompanies.push('Visa')
        } else if (arr[0] === 5 && !invalidCompanies.includes('Mastercard')) {
            invalidCompanies.push('Mastercard')
        } else if (arr[0] === 6 && !invalidCompanies.includes('Discover')) {
            invalidCompanies.push('Discover')
        } else if (arr[0] < 3 || arr[0] > 6) {
            console.log('Company not found')
        };
    };
    return invalidCompanies
};

//Tests:

console.log('Valid Credit Card:')
console.log('Valid 1: ' + validateCred(valid1));
console.log('Valid 2: ' + validateCred(valid2));
console.log('Valid 3: ' + validateCred(valid3));
console.log('Valid 4: ' + validateCred(valid4));
console.log('Valid 5: ' + validateCred(valid5));

console.log('Invalid Credit Card:')
console.log('Invalid 1: ' + validateCred(invalid1));
console.log('Invalid 2: ' + validateCred(invalid2));
console.log('Invalid 3: ' + validateCred(invalid3));
console.log('Invalid 4: ' + validateCred(invalid4));
console.log('Invalid 5: ' + validateCred(invalid5));

console.log('Mystery Credit Cards:')
console.log('Mystery 1: ' + validateCred(mystery1));
console.log('Mystery 2: ' + validateCred(mystery2));
console.log('Mystery 3: ' + validateCred(mystery3));
console.log('Mystery 4: ' + validateCred(mystery4));
console.log('Mystery 5: ' + validateCred(mystery5));

console.log(idInvalidCompanies(invalidCards));