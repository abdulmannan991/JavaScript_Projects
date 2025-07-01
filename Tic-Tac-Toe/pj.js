let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset")
let new_gamebtn = document.querySelector("#new-btn")
let msg_container = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")

let turnO = true
const win_Patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO){
       box.innerText = "O"
       box.style.color = "Blue"
       turnO = false
      }
      else{
       box.innerText = "X"
        box.style.color = "red"
       turnO = true
      }
      box.disabled = true

      Checkwinner();
    })
})

const reset_Game = () =>{
 turnO = true;
 Enable_Boxes()
 msg_container.classList.add("hide")
}
const Disable_Boxes = ()=>{
    for(box of boxes){
        box.disabled = true
    }
}

const Enable_Boxes = ()=>{
    for(box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

let counts = 0
let iswinner = false
const btn_counts = ()=>{
   
    counts ++
    

    if(!iswinner && counts ===9){
        
      console.log("Draw")
    msg.innerText = `It's a Draw!`;
    msg.style.color = "black"
    msg_container.classList.remove("hide");
    Disable_Boxes();
    }
   
   
}


const Show_Winner = (winner)=>{
    msg.innerText = `Congratulations, Winner is: ${winner}`
    msg_container.classList.remove("hide")
   iswinner = true
    Disable_Boxes()
   
}

const Checkwinner = () =>{
    for(let pattern of win_Patterns){
       let position_vl1 =  boxes[pattern[0]].innerText
       let position_vl2 =  boxes[pattern[1]].innerText
       let position_vl3 =  boxes[pattern[2]].innerText

        if(position_vl1 !="" && position_vl2 != "" && position_vl3 !="" ){
        if(position_vl1 === position_vl2 && position_vl2 === position_vl3){
            console.log("Winner",position_vl1)
            Show_Winner(position_vl1)
        }
      
    }
    
    }
    btn_counts()
}

new_gamebtn.addEventListener("click",reset_Game)
reset_btn.addEventListener("click",reset_Game)