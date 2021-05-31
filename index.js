const count = 100;

for(let i = 0; i <= count; i++) {
    let message = "";

    if (i % 3 == 0) {
        message += 'Fizz';
    }
    if (i % 5 == 0) {
        message += "Buzz";
    }

    console.log(message || i);
}