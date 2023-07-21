const wrapper = document.querySelector(".wrapper2");
const title = document.querySelector("h1");
title.classList.remove("pippo");
for (let i=1; i<=100; i++){
    let fizz =i % 3;
    let buzz =i % 5;
    // dichiariamo un divisore comune
    let fizzbuzz = i % (3 * 5)
    // console.log(fizz);
    // console.log(buzz);
    // console.log(fizzbuzz);
    let content = "";
    if ((i >= 3) && (fizz === 0) && (buzz !== 0)) {
        console.log("è FIZZ in quanto divisibile per 3");
        content = "fizz";
    }else if ((i >= 5) && (fizz !== 0) && (buzz === 0)){
        console.log("e Buzz in quanto divisibile per 5");
        content = "buzz";
    }else if ((fizz === 0) && (buzz === 0)){
        console.log(" e FizzBuzz in quanto divisibile sia per 3 che per 5");
        content = "fizzbuzz";
    }else{
        console.log(i);
    }

    wrapper.innerHTML += `<div class="box ${content}">${i} ${content}</div>`
}
