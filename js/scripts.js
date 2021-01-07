let cpuAns;
let vComputer = document.getElementById("vComputer");
let twoPlayer = document.getElementById("twoPlayer");
let vsJT = document.getElementById("vsJT");
let game = false;
let info;
let injectHere = document.getElementById("injectHere");


let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");









vComputer.addEventListener('click', function(){
 deleteEverything();
setTimeout(inject("../pages/choice.html"),1000)

})

twoPlayer.addEventListener('click',()=>{
    deleteEverything()
    setTimeout(inject("../pages/choice.html"),1000)
})

async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    cpuAns = await promise.text();
}


function deleteEverything(){
    injectHere.innerHTML="";
}

function inject(url){
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

function compGame(){
rock.addEventListener('click', ()=>{
    deleteEverything()
    setTimeout(inject("../pages/finals.html"))
})
}