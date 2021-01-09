let userAns = "";
let secondAns = "";
let game = 0;
let amountWanted = 0;
let round=0;
let countTie = 0;
let countWin = 0;
let countLose = 0;

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
let submit = document.getElementById("submit");


vComputer.addEventListener('click', function () {
    overallCount=0;
    game = 1;
    deleteEverything();
    appendNum();
})

twoPlayer.addEventListener('click', function(){
    overallCount =0;
    game = 2;
    deleteEverything();
    appendNum();
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

function compare() {
    console.log(countTie);
    console.log(countLose);
    console.log(countWin);
    if (secondAns == userAns) {
        countTie++;
        return `You both chose ${userAns}, so you tied! This game was to limit ties but look at you!`;
    } else if (userAns == "Rock") {
        if (secondAns == "Paper"){
            countLose++;
            return "Paper covers Rock, Player 2 Wins";
        }else if(secondAns == "Spock") {
            countLose++;
            return "Spock vaporizes Rock, Player 2 Wins";
        } else if (secondAns == "Scissors"){
            countWin++;
            return "Rock crushes Scissors, Player 1 Win";
        }else if(secondAns == "Lizard") {
            countWin++;
            return "Rock crushes Lizard, Player 1 Wins";
        }
    } else if (userAns == "Paper") {
        if (secondAns == "Scissors"){
            countLose++;
            return "Scissors cuts Paper, Scissors Wins";
        }else if (secondAns == "Lizard") {
            countLose++;
            return "Lizard eats paper, Lizard Wins";
        } else if (secondAns == "Rock"){
            countWin++;
            return "Paper covers Rock, Paper Wins";
            
        }else if (secondAns == "Spock") {
            countWin++;
            return "Paper disproves Spock, Paper Wins";
        }
    } else if (userAns == "Scissors") {
        if (secondAns == "Spock"){
            countLose++;
            return "Spock smashes scissors, Spock Wins";
        }else if(secondAns == "Rock") {
            countLose++;
            return "Rock crushes Scissors, Rock Wins";
        } else if (secondAns == "Lizard"){
            countWin++;
            return "Scissors decapitates Lizard, Scissors Wins";
        }else if(secondAns == "Paper") {
            countWin++;
            return " Scissors cuts paper, Scissors Wins";
        }
    }
    else if (userAns == "Lizard") {
        if (secondAns == "Rock"){
            countLose++;
            return "Rock crushes Lizard, Rocks Wins";
        }else if(secondAns == "Scissors") {
            countLose++;
            return "Scissors decapitates Lizard, Scissors Wins";
        } else if (secondAns == "Paper"){
            countWin++;
            return "Lizard eats Paper, Lizard Wins";
        }else if(secondAns == "Spock") {
            countWin++;
            return "Lizard poisons Spock, Lizard Wins";
        }
    } else if (userAns == "Spock"){
        if (secondAns == "Paper"){
            countLose++;
            return "Paper disproves Spock, Paper Wins";
        }else if(secondAns == "Lizard") {
            countLose++;
            return "Lizard poisons Spock, Lizard Wins";

        } else if (secondAns == "Rock"){
            countWin++;
            return "Spock vaporizes Rock, Spock Wins";
        }else if(secondAns == "Scissors") {
            countWin++;
            return "Spock smashes scissors, Spock Wins";
        }
    } else {
        console.log("We have an issue");
    }
}

function appendNum(){
    let divRow = document.createElement("div");
    let divcol = document.createElement("div");
    let divh2 = document.createElement("h2");

    let divcol1 = document.createElement("div");
    let btn1 = document.createElement("button");

    let divcol2 = document.createElement("div");
    let btn2 = document.createElement("button");

    let divcol3 = document.createElement("div")
    let btn3 = document.createElement("button");

    divRow.classList = "row down";
    divcol.classList = 'col-12 text-center mt-5 mb-5';
    divh2.classList = "bigify";
    divh2.innerText = "Best Of?"
    divcol.append(divh2);
    divRow.append(divcol);

    divcol1.classList = "col mb-2 center";
    btn1.classList = "btn btn-outline-light numbers";
    btn1.type = "button";
    btn1.innerText = "1"
    btn1.addEventListener('click', ()=>{
        amountWanted = 1;
        deleteEverything();
        if(game==1){
            getCPU();
            appendchoices();
        }else if(game==2){
            appendchoices();
        }
    })
    divcol1.append(btn1);
    divRow.append(divcol1);

    divcol2.classList = "col mb-2 center";
    btn2.classList = "btn btn-outline-light numbers";
    btn2.type = "button";
    btn2.innerText = "5"
    btn2.addEventListener('click', ()=>{
        amountWanted = 5;
        deleteEverything();

        if(game==1){
            getCPU();
            appendchoices();
        }else if(game==2){
            appendchoices();
        }
    })
    divcol2.append(btn2);
    divRow.append(divcol2);

    divcol3.classList = "col mb-2 center";
    btn3.classList = "btn btn-outline-light numbers";
    btn3.type = "button";
    btn3.innerText = "7"
    btn3.addEventListener('click', ()=>{
        amountWanted = 7;
        deleteEverything();
        if(game==1){
            getCPU();
            appendchoices();
        }else if(game==2){
            appendchoices();
        }
    })
    divcol3.append(btn3);
    divRow.append(divcol3);

    injectHere.append(divRow);
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
        deleteEverything();
        console.log(game);
        if(game==1){
            getCPU();
            appendFight();
        }else if(game==2){
            appendSecondChoice();
        }else{
            console.log("We're having issues");
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
        deleteEverything();
        if(game==1){
            getCPU();
            appendFight()
        }else if(game==2){
            appendSecondChoice();
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
        deleteEverything();
        if(game==1){
            getCPU();
            appendFight()
        }else if(game==2){
            appendSecondChoice();
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
        deleteEverything();
        if(game==1){
            appendFight()
            getCPU();

        }else if(game==2){
            appendSecondChoice();
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
        deleteEverything();
        if(game==1){

            appendFight()
            getCPU();
        }else if(game==2){
            appendSecondChoice();
        }
    })
    i5.classList = "fas fa-hand-spock fa-7x";

    btn5.append(i5);
    divcol5.append(btn5);
    divRow.append(divcol5);
    injectHere.append(divRow);
}

function appendSecondChoice() {
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
    divh2.innerText = "Player 2, Choose One.";
    divcol.append(divh2);
    divRow.append(divcol);


    divcol1.classList = "col mb-2 center";
    btn1.classList = "btn btn-outline-light";
    btn1.type = "button";
    btn1.addEventListener('click', function () {
        deleteEverything();
        if(game==2){
            secondAns = "Rock";
            appendFight();
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
        deleteEverything();
        if(game==2){
        secondAns ="Paper";
            appendFight();
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
        deleteEverything();
        if(game==2){
        secondAns="Scissors";
        appendFight();
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
        deleteEverything();

        if(game==2){
        secondAns = "Lizard";
        appendFight();
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
        deleteEverything();

        if(game==2){
        secondAns="Spock";
        appendFight();
        }
    })
    i5.classList = "fas fa-hand-spock fa-7x";

    btn5.append(i5);
    divcol5.append(btn5);
    divRow.append(divcol5);
    injectHere.append(divRow);
}

function appendFight() {
    round++;
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
    div1.classList = "col-12 text-center downMore";
    h2.classList = "bigify";
    h2.innerHTML = compare() +"<br />" + "Win:" + countWin + " Lose:" + countLose+ " Tie:" + countTie;
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
    if(amountWanted == round){
        btnNxt.innerText = "Go Back";
        btnNxt.addEventListener("click", function () {
            location.reload()
        });
    }else{
        // Next Round or Go Home, or second player input,
        // depends on vs computer vs second player
        btnNxt.innerText = "Next Round"
        btnNxt.addEventListener("click", function () {
            deleteEverything();
            appendchoices();
        });
    }
        
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
    img.alt = "A Picture Of Jateen Bhakta Being Cool.";

    div1.append(h2);
    div1.append(img);
    divRow.append(div1);
    injectHere.append(divRow);
}