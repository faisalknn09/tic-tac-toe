let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let reset=document.querySelector(".reset");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector(".msg");

let turn=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn) {
        box.innerText="O";
        box.classList.add("O");
        turn=false;
        box.classList.remove("X");
        }
        else {
            box.innerText="X";
            box.classList.add("X");
            turn=true;
            box.classList.remove("O");
        }
        box.disabled=true;
        checkwinner();
        count++;
    });
  });
  
  const checkwinner=()=> {
    for( let pattern of winPatterns) {
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!=""&&posval2!=""&&posval3!="") {
            if(posval1==posval2&&posval2==posval3){
                showwinner(posval1);
                count=15;
            }
        }
    }
    
    
  };
  const disablebox=() => {
    for(let box of boxes) {
        box.disabled=true;
    }
  }
  const enablebox=() => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
        msgcon.classList.add("hide");
    }
  }
  const draw=() => {
    msg.innerText="game draw";
        msgcon.classList.remove("hide");
  }
  const showwinner=(winner) => {
    msg.innerText= `winner is ${winner} `,winner;
        msgcon.classList.remove("hide");
        disablebox();
  }
const resetgame=()=> {
    turn=true;
    count=0;
    enablebox();
}
if(count==9) {
  draw();
}
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
