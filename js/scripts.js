let cpuAns;
let vComputer = document.getElementById("vComputer");
let twoPlayer = document.getElementById("twoPlayer");
let vsJT = document.getElementById("vsJT");
let game;

vComputer.addEventListener('click', function(){
    // open page or inject or whatever into this and everything goes here.
    
})






// fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
//     .then(data => {
//     data.text()
//     .then(value=>console.log(value))
// })

let info;
async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    cpuAns = await promise.text();
    console.log(cpuAns)
}
getCPU();



