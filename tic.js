let boxs=document.querySelectorAll(".box");
let msg=document.getElementById("messege");
let reset=document.getElementById("reset-btn");
let turnO=true;
let count=0;
let arr=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],   
]

boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerHTML="X";
            box.classList.add("cross")
            box.classList.remove("dot")
            turnO=false;
        }
        else{
            box.innerHTML="O";
            box.classList.add("dot")
            box.classList.remove("cross")
            turnO=true;
        }
box.disabled=true;

count++;
let win=checkwinner();
if(count===9 && !win) {
    drawgame();
}
    });
});

const drawgame=() => {
    msg.innerText="Game has been Draw";
}

const showWinner = (winner, positions) => {
    msg.innerText = `Player ${winner} is Winner`;

    for (let pos of positions) {
        boxs[pos].classList.add("win");
    }

    for (let box of boxs) {
        box.disabled = true;
    }
}

const checkwinner = () => {
    for (let pattern of arr) {
        let position1 = boxs[pattern[0]].innerHTML;
        let position2 = boxs[pattern[1]].innerHTML;
        let position3 = boxs[pattern[2]].innerHTML;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1, pattern);
                return true; 
            }
        }
    }
}


const enable=() =>{
    for(box of boxs) {
        box.disabled=false;
        box.innerHTML="";
        box.classList.remove("cross");
        box.classList.remove("dot");
        box.classList.remove("win");
    }
}

const rest=() => {
    count=0;
    turnO=true;
    enable();
    msg.innerText="";
}