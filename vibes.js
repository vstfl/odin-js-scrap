console.log('swag')

function add7(number) {
    let swag = number + 7;
    return swag;
}


function multiply(first,second) {
    let product = first*second;
    return product;
}

console.log(add7(8));
console.log(multiply(3,2));

function capitalize(input) {
    return input[0].toUpperCase() + input.slice(1);
}

console.log(capitalize("CHeEse"));

function lastLetter(word) {
    return word.slice(-1);
}

console.log(lastLetter("cheeseman"));