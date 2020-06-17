var user_score=0;
var computer_score=0;
const userscore_span= document.getElementById("user_score");
const computerscore_span= document.getElementById("computer_score");
const scoreboard_div=document.querySelector(".score_board");
const result_h3=document.querySelector(".result > h3");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

function word(letter)
{
    if(letter === 'r')
        return "Rock";
    if(letter === 's')
        return "Scissors";
    return "Paper";
}

function win(userChoice , computerChoice)
{
    user_score++;
    userscore_span.innerHTML= user_score;
    computerscore_span.innerHTML= computer_score;

    result_h3.innerHTML= word(userChoice)+"(U)"+ " beats " +word(computerChoice)+"(C)" + ".YOU WIN "; 
    
}
function lose(userChoice , computerChoice)
{
    computer_score++;
    userscore_span.innerHTML= user_score;
    computerscore_span.innerHTML= computer_score;
    result_h3.innerHTML= word(computerChoice)+"(C)"+ " beats " +word(userChoice)+"(U)" + ".YOU LOSE "; 
}

function draw(userChoice , computerChoice)
{
    
    userscore_span.innerHTML= user_score;
    computerscore_span.innerHTML= computer_score;
    result_h3.innerHTML= "DRAW";
}

function getComputerChoice()
{
    const choices= ['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function game(userChoice)
{
    const computerChoice=getComputerChoice();
    console.log("user choice " +userChoice);
    console.log("computer choice " +computerChoice);
    switch(userChoice + computerChoice)
        {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice,computerChoice);
                break;
            case "sr":
            case "rp":
            case "ps":
                lose(userChoice,computerChoice);
                break;
            case "ss":
            case "rr":
            case "pp":
                draw(userChoice,computerChoice);
                break;
        }
}

function main()
{
    rock_div.addEventListener('click', function()
    {
        game('r');
    });

    paper_div.addEventListener('click', function()
    {
        game('p');
    });

    scissors_div.addEventListener('click', function()
    {
        game('s');
    });
    
    getComputerChoice();
}

main();