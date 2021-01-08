let userAns = "";
let secondAns = "";
let game = 0;
let amountWanted = 0;
let countWin = 0;
let countLose = 0;
let CountTie = 0;
let overallCount = 0;

let vComputer = document.getElementById("vComputer");
let twoPlayer = document.getElementById("twoPlayer");
let vsJT = document.getElementById("vsJT");
let info;
let injectHere = document.getElementById("injectHere");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
// This portion cannot be gotten, is there a way to get this portion? (HTML Injection stuff)

vComputer.addEventListener('click', function () {
    deleteEverything();
    // setTimeout(inject("../pages/choice.html"),500)
    getCPU();
    game = 1;
    appendchoices()
})

twoPlayer.addEventListener('click', () => {
    deleteEverything()
    // setTimeout(inject("../pages/choice.html"),1000)
    appendchoices()
    game = 2;
})

vsJT.addEventListener('click', function(){
    deleteEverything();
    appendJT();
})

async function getCPU() {
    let promise = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
    secondAns = await promise.text();
    // compare();
}

function deleteEverything() {
    injectHere.innerHTML = "";
}

function inject(url) {
    fetch(url).then(
        data => {
            // console.log(data)
            data.text().then(
                function (value) {
                    injectHere.innerHTML = value;
                }
            )
        }
    )
}

function compare() {
    console.log(userAns)
    console.log(secondAns)
    if (secondAns == userAns) {
        return `You both chose ${userAns}, so you tied!`;
        CountTie++;
    } else if (userAns == "Rock") {
        if (secondAns == "Paper"){
            return "Paper covers Rock, Paper Wins";

        }else if(secondAns == "Spock") {
            return "Spock vaporizes Rock, Spock Wins";

        } else if (secondAns == "Scissors"){
            return "Rock crushes Scissors, Rock Win";

        }else if(secondAns == "Lizard") {
            return "Rock crushes Lizard, Rock Wins";
        }
    } else if (userAns == "Paper") {
        if (secondAns == "Scissors"){
            return "Scissors cuts Paper, Scissors Wins";

        }else if (secondAns == "Lizard") {
            return "Lizard eats paper, Lizard Wins";

        } else if (secondAns == "Rock"){
            return "Paper covers Rock, Paper Wins";

        }else if (secondAns == "Spock") {
            return "Paper disproves Spock, Paper Wins";

        }
    } else if (userAns == "Scissors") {
        if (secondAns == "Spock"){
            return "Spock smashes scissors, Spock Wins";
        }else if(secondAns == "Rock") {
            return "Rock crushes Scissors, Rock Wins";

        } else if (secondAns == "Lizard"){
            return "Scissors decapitates Lizard";

        }else if(secondAns == "Paper") {
            return " Scissors cuts paper, Scissors Wins";

        }
    }
    else if (userAns == "Lizard") {
        if (secondAns == "Rock"){
            return "";

        }else if(secondAns == "Scissors") {
            return "";

        } else if (secondAns == "Paper"){
            return "";

        }else if(secondAns == "Spock") {
            return "";

        }
    } else if (userAns == "Spock"){
        if (secondAns == "Paper" || "Lizard") {
            countLose++;
            return `You Lose because you chose ${userAns} and the chose ${secondAns}`;

        } else if (secondAns == "Rock" || "Scissors") {
            countWin++;
            return `You win because you chose ${userAns} and the chose ${secondAns}`;
        }
    } else {
        console.log("We have an issue");
    }
}


function appendchoices() {
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

    divcol.classList = "col-12 text-center downMore";
    divh2.classList = "bigify";
    divh2.innerText = "Choose One.";
    divcol.append(divh2);
    divRow.append(divcol);


    divcol1.classList = "col mb-2 center";
    btn1.classList = "btn btn-outline-light";
    btn1.type = "button";
    btn1.addEventListener('click', function () {
        userAns = "Rock";
        if(game==1){
            deleteEverything();
            getCPU();
            appendFight();
        }else if(game==2){
            
        }
    })
    i1.classList = "fas fa-hand-rock fa-7x";

    btn1.append(i1);
    divcol1.append(btn1);
    divRow.append(divcol1);

    divcol2.classList = "col mb-2 center";
    btn2.classList = "btn btn-outline-light";
    btn2.type = "button";
    btn2.addEventListener('click', function () {
        userAns ="Paper";
        if(game==1){
            deleteEverything();
            getCPU();
            appendFight()
        }else if(game==2){
            
        }
    })
    i2.classList = "fas fa-hand-paper fa-7x";

    btn2.append(i2);
    divcol2.append(btn2);
    divRow.append(divcol2);

    divcol3.classList = "col mb-2 center";
    btn3.classList = "btn btn-outline-light";
    btn3.type = "button";
    btn3.addEventListener('click', function () {
        console.log("I clicked scissors");
        userAns="Scissors";
        if(game==1){
            deleteEverything();
            getCPU();
            appendFight()
        }else if(game==2){
            
        }
    })
    i3.classList = "fas fa-hand-scissors fa-7x";

    btn3.append(i3);
    divcol3.append(btn3);
    divRow.append(divcol3);

    divcol4.classList = "col mb-2 center";
    btn4.classList = "btn btn-outline-light";
    btn4.type = "button";
    btn4.addEventListener('click', function () {
        console.log("I clicked lizard");
        userAns = "Lizard";
        if(game==1){
            deleteEverything();
            appendFight()
            getCPU();

        }else if(game==2){
            
        }
    })
    i4.classList = "fas fa-hand-lizard fa-7x";

    btn4.append(i4);
    divcol4.append(btn4);
    divRow.append(divcol4);

    divcol5.classList = "col mb-2 center";
    btn5.classList = "btn btn-outline-light";
    btn5.type = "button";
    btn5.addEventListener('click', function () {
        console.log("I clicked spock");
        userAns="Spock";
        if(game==1){
            deleteEverything();
            appendFight()
            getCPU();
        }else if(game==2){
            
        }
    })
    i5.classList = "fas fa-hand-spock fa-7x";

    btn5.append(i5);
    divcol5.append(btn5);
    divRow.append(divcol5);
    injectHere.append(divRow);
}


function appendFight() {
    console.log(countWin)
    console.log(countLose)
    console.log(CountTie)
    let divRow = document.createElement("div");
    let div1 = document.createElement("div");
    let h2 = document.createElement("h2");

    let div2 = document.createElement("div");
    let i1 = document.createElement("i");

    let div3 = document.createElement("div");
    let i2 = document.createElement("i");

    let divRow1 = document.createElement("div");
    let div4 = document.createElement("div");
    let btnNxt = document.createElement("button");


    divRow.classList = "row down";
    div1.classList = "col-12 text-center mt-5 mb-5";
    h2.classList = "bigify";
    h2.innerText = compare();
    
    div1.append(h2);
    divRow.append(div1);

    div2.classList = "col-6 mb-2 center";
    if (userAns != null || userAns != "") {
        switch (userAns) {
            case "Rock":
                i1.classList = "fas fa-hand-rock fa-7x";
                break;
            case "Paper":
                i1.classList = "fas fa-hand-paper fa-7x";
                break;
            case "Scissors":
                i1.classList = "fas fa-hand-scissors fa-7x";
                break;
            case "Lizard":
                i1.classList = "fas fa-hand-lizard fa-7x";
                break;
            case "Spock":
                i1.classList = "fas fa-hand-spock fa-7x";
                break;
            default:
                console.log("We have a problem with 1st Answer");
                break;
        }
    }
    div2.append(i1);
    divRow.append(div2);

    div3.classList = "col-6 mb-2 center";
    switch (secondAns) {
        case "Rock":
            i2.classList = "fas fa-hand-rock fa-7x";
            break;
        case "Paper":
            i2.classList = "fas fa-hand-paper fa-7x";
            break;
        case "Scissors":
            i2.classList = "fas fa-hand-scissors fa-7x";
            break;
        case "Lizard":
            i2.classList = "fas fa-hand-lizard fa-7x";
            break;
        case "Spock":
            i2.classList = "fas fa-hand-spock fa-7x";
            break;
        default:
            console.log("We have a problem with 2nd Answer");
            break;
    }
    div3.append(i2);
    divRow.append(div3);

    divRow1.className = "row";
    div4.classList = "col-12 d-flex justify-content-end bottom";
    btnNxt.classList = "btn btn-secondary btn-lg";
    btnNxt.innerText = "change Me to Next Round Or Something";
    // Next Round or Go Home, or second player input,
    // depends on vs computer vs second player
    btnNxt.addEventListener("click", function () {
        deleteEverything();
        appendchoices();
    });
    
    div4.append(btnNxt);
    divRow1.append(div4)


    injectHere.append(divRow);
    injectHere.append(divRow1);
}

function appendJT(){
    let divRow = document.createElement("div");
    let div1 = document.createElement("div");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");

    divRow.classList = "row down";
    div1.classList = "col-12 text-center mt-5 mb-5";
    h2.classList = "bigify";
    h2.innerText = "You Lose Because Jateen Never Loses.";
    img.src = "./images/YungGravyEnding.png";
    img.alt = "A Picture Of Jateen Bhakta Being Cool."

    div1.append(h2);
    div1.append(img);
    divRow.append(div1);
    injectHere.append(divRow);
}