/*This is a Javascrit FizzBuzz code */

var number;
console.log('Loading...');

for (number = 0; number <= 100; number++) {
    if ((number % 3 == 0) && !(number % 5 == 0)) {
        console.log('Fizz');
    } else if ((number % 5 == 0) && !(number % 3 == 0)) {
        console.log('Buzz');
    } else if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log('FizzBuzz');
    } else {
        console.log(number);
    }
}

console.log('Finished');