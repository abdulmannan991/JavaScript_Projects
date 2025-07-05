
let user = 0
let comp = 0
let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let user_count = document.querySelector("#user-count")
let comp_count = document.querySelector("#comp-count")

const GenCompchoice = () =>{
    const options_Array = ["rock","paper","scissors"] 
    const randix = Math.floor(Math.random() *3)
    return options_Array[randix]
}

const DrawGame = ()=>{

    console.log("The game is draw!")
    msg.innerText = "Draw"
    msg.style.backgroundColor = "green"

}

const user_Win = (diduser_Win,userChoice,Compchoice)=>{
 if(diduser_Win){
    console.log("Congratulations you win!")
    msg.innerText = `You win! your ${userChoice} beats ${Compchoice}`
    msg.style.backgroundColor = "blue"
    user_count.innerText = `${++user}`
 }   
 else{
    console.log("You lose :(")
    msg.innerText = `You lose. ${Compchoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
    comp_count.innerText = `${++comp}`


    
 }
}

const playGame = (userChoice)=>{
    console.log("User Choice = ", userChoice)

    const Compchoice = GenCompchoice()
    console.log("Comp choice = ", Compchoice)
    
    if(userChoice === Compchoice){
        DrawGame()
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            // paper scessiors
        userWin = Compchoice === "paper" ? false : true;
    
    } else if(userChoice === "paper"){
            // rock scessiors

        userWin = Compchoice === "scissors" ? false : true
    
    }
    else{
            // rock paper

        userWin = Compchoice === "rock"? false : true
    }
    user_Win(userWin,userChoice,Compchoice)
    
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})