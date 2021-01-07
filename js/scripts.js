let userAns="Rock";
let cpuAns;
let arr = [0 , 0, 0];
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
    getCPU();
    setTimeout(inject("../pages/choice.html"),500)

})

twoPlayer.addEventListener('click',()=>{
    deleteEverything()
    setTimeout(inject("../pages/choice.html"),1000)
})

async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls")
    cpuAns = await promise.text();
    compare();
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
        userAns="Rock";

    })
}

function compare(){
    if(cpuAns==userAns){
        console.log("Tie")
    }else if(userAns=="Rock"){
        if(cpuAns=="Paper" || cpuAns == "Spock"){
            // user loses
            console.log("You Lose")
        }else if(cpuAns=="Scissors" || cpuAns == "Lizard"){
            // user wins
            console.log("You Win")
            
        }
    }else if(userAns=="Paper"){
        if(cpuAns=="Scissors" || "Lizard"){
            // user loses
            console.log("You Lose")
        }else if(cpuAns=="Rock" || "Spock"){
            // user wins
            console.log("You Win")
        }
    }else if(userAns=="Scissors"){
        if(cpuAns=="Spock" || "Rock"){
            // user loses
            console.log("You Lose")
        }else if(cpuAns=="Scissors" || "Paper"){
            // user wins
            console.log("You Win")
        }
    }
    else if(userAns=="Lizard"){
        if(cpuAns=="Rock" || "Scissors"){
            // user loses
            console.log("You Lose")
        }else if(cpuAns=="Paper" || "Spock"){
            // user wins
            console.log("You Win")
        }
    }else if(userAns=="Spock"){
        if(cpuAns=="Paper" || "Lizard"){
            // user loses
            console.log("You Lose")
        }else if(cpuAns=="Rock" || "Scissors"){
            // user wins
            console.log("You Win")
        }
    }else{
        console.log("We have an issue")
    }
}
