let cpuAns;
let vComputer = document.getElementById("vComputer");
let twoPlayer = document.getElementById("twoPlayer");
let vsJT = document.getElementById("vsJT");
let game = false;
let info;
let injectHere = document.getElementById("injectHere");

vComputer.addEventListener('click', function(){
 deleteEverything();
setTimeout(injectChoice("../pages/choice.html"),1000)
})
console.log(game)


async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    cpuAns = await promise.text();
    console.log(cpuAns)
}
getCPU();

function deleteEverything(){
    injectHere.innerHTML="";
}

function injectChoice(url){
    fetch(url).then(
        data=>{
            // console.log(data)
            data.text().then(
                function(value){
                    injectHere.innerHTML = value;
                }
            )
        }
    )
}