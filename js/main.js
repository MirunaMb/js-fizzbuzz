
for (let i=1; i<=100; i++){
    let fizz =i % 3;
    let buzz =i % 5;
    // dichiariamo un divisore comune
    let fizzbuzz = i % (3 * 5)
    console.log(fizz,buzz,fizzbuzz,typeof fizz,typeof buzz,typeof fizzbuzz);
    i
}
