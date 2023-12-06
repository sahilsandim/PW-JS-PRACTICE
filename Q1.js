// let score = 105;
// let life = 3;
// let bullets = 1100;
// console.log("Welcome to PW's game")
// if(score > 99){
//     console.log("Level up by 1 and get a new life")
//     score = score - 100;
//     // life++;
//     // life = life + 1;
//     let bullets = 1500;
//     console.log(`Total no. of bullets is ${bullets}`)
// }
// else{
//     console.log("Not level up and doesn't get life")
// } 
// console.log(`Your score is ${score} and life is ${life} and total bullets fire ${bullets}`)


// Q1
let prompt = require('prompt-sync')();
let a = prompt("Total score of the game is")
console.log(a)
let greanade = 38;
let score = 110;
let life = 3;
if(score>99){
    console.log("Level up by 1")
    // life++;
    // life = life + 1;
    score = score - 100;
    let greanade = 100;
    console.log(`Total  no. of greanade ${greanade}`)
}
else{
    console.log("Not level up")

}
console.log(`The total score of the game is ${score} and total remaining lifes of the game is ${life} total numbers of grenade available are${greanade}`)
