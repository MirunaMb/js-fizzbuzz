
for (let i=1; i<=100; i++){
    let fizz =i % 3;
    let buzz =i % 5;
    // dichiariamo un divisore comune
    let fizzbuzz = i % (3 * 5)
    // console.log(fizz);
    // console.log(buzz);
    // console.log(fizzbuzz);
    if ((i >= 3) && (fizz === 0) && (buzz !== 0)) {
        console.log(i, "è FIZZ in quanto divisibile per 3");
        
    }else if ((i >= 5) && (fizz !== 0) && (buzz === 0)){
        console.log(i,"e Buzz in quanto divisibile per 5");
    }else if ((fizz === 0) && (buzz === 0)){
        console.log(i," e FizzBuzz in quanto divisibile sia per 3 che per 5");
    }else{
        console.log(i);
    }
    
}
