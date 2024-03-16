const choices = ["pedra", "papel", "tesoura"];

var counterUser = 0;
var counterCPU = 0;
var counterDraw = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        counterDraw++;
        return "Empate!";
    } else if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) {
        counterUser++;
        return "Vitória do Usuário!";
    } else if (playerSelection===undefined)
    {
        return "Escolha um!!!";
    }
    
    else {
        counterCPU++;
        return "Vitória da Máquina!";
    }
}


const buttons = document.querySelectorAll(".choice");

let playerSelection;

let selectSE = new Audio('./media/select.wav');
let winSE = new Audio('./media/win.WAV');
let lossSE = new Audio('./media/loss.WAV');
let drawSE = new Audio('./media/draw.WAV')

buttons.forEach(button => {
    button.addEventListener("click", function() {
        playerSelection = this.id;
        selectSE.play();
        if(playerSelection==='pedra')
        {
            document.getElementById("papelImg").src = "./media/papel.png";
            document.getElementById("pedraImg").src = "./media/pedraP1.png";
            document.getElementById("tesouraImg").src = "./media/tesoura.png";
        }
        if(playerSelection==='papel')
        {
            document.getElementById("pedraImg").src = "./media/pedra.png";
            document.getElementById("papelImg").src = "./media/papelP1.png";
            document.getElementById("tesouraImg").src = "./media/tesoura.png";
        }
        if(playerSelection==='tesoura')
        {
            document.getElementById("pedraImg").src = "./media/pedra.png";
            document.getElementById("tesouraImg").src = "./media/tesouraP1.png";
            document.getElementById("papelImg").src = "./media/papel.png";
        }
        
    });
});

const submit = document.getElementById("submit");
submit.addEventListener("click", showResult);

function showResult() {
    const computerSelection = computerPlay();

    // console.log("Player: " + playerSelection)
    // console.log("CPU: " + computerSelection);
    
    const result = playRound(playerSelection, computerSelection);
    
    document.getElementById("result").textContent = result;
    document.getElementById("userWins").textContent = counterUser;
    document.getElementById("cpuWins").textContent = counterCPU;
    document.getElementById("draws").textContent = counterDraw;

    document.getElementById("playerChoice").textContent = "Escolha do Usuário: " + playerSelection;
    document.getElementById("cpuChoice").textContent = "Escolha da CPU: " + computerSelection;

    if (result==='Vitória do Usuário!')
    {
        document.getElementById("result").style.color = "green";
        winSE.play();
    }
    else if (result==='Vitória da Máquina!')
    {
        document.getElementById("result").style.color = "red";
        lossSE.play();
    }
    else if (result==='Empate!')
    {
        document.getElementById("result").style.color = "black";
        drawSE.play();
    }
}
    