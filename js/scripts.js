let userAns="Rock";
let cpuAns;

let amountWanted = 0;
let countWin = 0;
let countLose = 0;
let CountTie = 0;
let overallCount = 0;

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
// This portion cannot be gotten, is there a way to get this portion? (HTML Injection stuff)


vComputer.addEventListener('click', function(){
    deleteEverything();
    getCPU();
    // setTimeout(inject("../pages/choice.html"),500)
    appendchoices()
})

twoPlayer.addEventListener('click',()=>{
    deleteEverything()
    // setTimeout(inject("../pages/choice.html"),1000)
    appendchoices()
})

async function getCPU(){
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
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

function compare(){
    console.log(userAns)
    console.log(cpuAns)
    if(cpuAns==userAns){
        console.log("Tie")
        CountTie++;
    }else if(userAns=="Rock"){
        if(cpuAns=="Paper" || cpuAns == "Spock"){
            countLose++;

            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
    
        }else if(cpuAns=="Scissors" || cpuAns == "Lizard"){
            countWin++;

            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
            
        }
    }else if(userAns=="Paper"){
        if(cpuAns=="Scissors" || "Lizard"){
            countLose++;

            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
    
        }else if(cpuAns=="Rock" || "Spock"){
            countWin++;

            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    }else if(userAns=="Scissors"){
        if(cpuAns=="Spock" || "Rock"){
            countLose++;
            
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
    
        }else if(cpuAns=="Scissors" || "Paper"){
            countWin++;
            
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    }
    else if(userAns=="Lizard"){
        if(cpuAns=="Rock" || "Scissors"){
            countLose++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
    
        }else if(cpuAns=="Paper" || "Spock"){
            countWin++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    }else if(userAns=="Spock"){
        if(cpuAns=="Paper" || "Lizard"){
            countLose++;
            console.log(`You Lose because you chose ${userAns} and the computer chose ${cpuAns}`)
    
        }else if(cpuAns=="Rock" || "Scissors"){
            countWin++;
            console.log(`You win because you chose ${userAns} and the computer chose ${cpuAns}`)
        }
    }else{
        console.log("We have an issue");
    }
}


function appendchoices(){
    let divRow = document.createElement("div");
    let divcol = document.createElement("div");
    let divh2 = document.createElement("h2");

    let divcol1 = document.createElement("div");
    let btn1 = document.createElement("button");
    let i1 = document.createElement("i")

    let divcol2 = document.createElement("div");
    let btn2 = document.createElement("button");
    let i2 = document.createElement("i")

    let divcol3 = document.createElement("div")
    let btn3 = document.createElement("button");
    let i3 = document.createElement("i")

    let divcol4 = document.createElement("div")
    let btn4 = document.createElement("button");
    let i4 = document.createElement("i")

    let divcol5 = document.createElement("div")
    let btn5 = document.createElement("button");
    let i5 = document.createElement("i")



    divRow.classList = "row down";

    divcol.classList = "col-12 text-center mt-5 mb-5";
    divh2.innerText = "Choose One.";
    divcol.append(divh2);
    divRow.append(divcol);


    divcol1.classList = "col mb-2 center";
    btn1.classList= "btn btn-outline-light";
    btn1.type = "button";
    btn1.addEventListener('click', function(){
        console.log("I clicked rock");
    })
    i1.classList="fas fa-hand-rock fa-7x";

    btn1.append(i1);
    divcol1.append(btn1);
    divRow.append(divcol1);

    divcol2.classList = "col mb-2 center";
    btn2.classList= "btn btn-outline-light";
    btn2.type = "button";
    btn2.addEventListener('click', function(){
        console.log("I clicked paper");

    })
    i2.classList="fas fa-hand-paper fa-7x";

    btn2.append(i2);
    divcol2.append(btn2);
    divRow.append(divcol2);

    divcol3.classList = "col mb-2 center";
    btn3.classList= "btn btn-outline-light";
    btn3.type = "button";
    btn3.addEventListener('click', function(){
        console.log("I clicked scissors");
    })
    i3.classList="fas fa-hand-scissors fa-7x";

    btn3.append(i3);
    divcol3.append(btn3);
    divRow.append(divcol3);

    divcol4.classList = "col mb-2 center";
    btn4.classList= "btn btn-outline-light";
    btn4.type = "button";
    btn4.addEventListener('click', function(){
        console.log("I clicked lizard");
    })
    i4.classList="fas fa-hand-lizard fa-7x";

    btn4.append(i4);
    divcol4.append(btn4);
    divRow.append(divcol4);

    divcol5.classList = "col mb-2 center";
    btn5.classList= "btn btn-outline-light";
    btn5.type = "button";
    btn5.addEventListener('click', function(){
        console.log("I clicked spock");
    })
    i5.classList="fas fa-hand-spock fa-7x";

    btn5.append(i5);
    divcol5.append(btn5);
    divRow.append(divcol5);

    injectHere.append(divRow);
}

function injectFight(){

}