let data = ['','','','','','','','',''];
let conds = [(data[0] === "X")&&(data[1]==="X")&&(data[2]==="X"),(data[3] === "X")&&(data[4]==="X")&&(data[5]==="X")]
let startBtn = document.querySelector("#start-btn");
let clearBtn = document.querySelector("#clear-btn");
let outerGrid = document.querySelector("#outer");
let status = document.querySelector("#status");
let G1 = document.querySelector("#G1");
let G2 = document.querySelector("#G2");
let G3 = document.querySelector("#G3");
let G4 = document.querySelector("#G4");
let G5 = document.querySelector("#G5");
let G6 = document.querySelector("#G6");
let G7 = document.querySelector("#G7");
let G8 = document.querySelector("#G8");
let G9 = document.querySelector("#G9");

let flag = false;
let currPlayer = "X" ;
let i = 0;

const clearFunc = () => {
    data = ['','','','','','','','','',];
    G1.innerText = '';
    G2.innerText = '';
    G3.innerText = '';
    G4.innerText = '';
    G5.innerText = '';
    G6.innerText = '';
    G7.innerText = '';
    G8.innerText = '';
    G9.innerText = '';
    currPlayer = "X";
    i = 0;
}

const gameStatus = () => {
    flag = true;
    console.log("game has started!");
    clearFunc();
    status.innerText = "GAME HAS STARTED";
}

const winFunc = () => {
    if (((data[0] === "X")&&(data[1]==="X")&&(data[2]==="X"))||
    ((data[3] === "X")&&(data[4]==="X")&&(data[5]==="X"))||
    ((data[6] === "X")&&(data[7]==="X")&&(data[8]==="X"))||
    ((data[0] === "X")&&(data[3]==="X")&&(data[6]==="X"))||
    ((data[1] === "X")&&(data[4]==="X")&&(data[7]==="X"))||
    ((data[2] === "X")&&(data[5]==="X")&&(data[8]==="X"))||
    ((data[0] === "X")&&(data[4]==="X")&&(data[8]==="X"))||
    ((data[2] === "X")&&(data[4]==="X")&&(data[6]==="X"))||
    ((data[0] === "O")&&(data[1]==="O")&&(data[2]==="O"))||
    ((data[3] === "O")&&(data[4]==="O")&&(data[5]==="O"))||
    ((data[6] === "O")&&(data[7]==="O")&&(data[8]==="O"))||
    ((data[0] === "o")&&(data[3]==="O")&&(data[6]==="O"))||
    ((data[1] === "O")&&(data[4]==="O")&&(data[7]==="O"))||
    ((data[2] === "O")&&(data[5]==="O")&&(data[8]==="O"))||
    ((data[0] === "O")&&(data[4]==="O")&&(data[8]==="O"))||
    ((data[2] === "O")&&(data[4]==="O")&&(data[6]==="O"))){
        console.log(`${currPlayer} wins`);
        status.innerText = status.innerText + "\n" + `${currPlayer} wins`;
        currPlayer = "X";
    }
}

const drawFunc = () => {
    for(let k of data){
        if(k !== ''){
            i++;
        }
    }
    if(i === 9){
        status.innerText = status.innerText + "\n" + "DRAW";
    }else{
        i = 0;
    }
}

startBtn.addEventListener("click",gameStatus);
clearBtn.addEventListener("click",clearFunc);

G1.addEventListener("click", () => {
    if ((G1.innerText === '') && (flag === true)){
        data[0] = currPlayer;
        G1.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G2.addEventListener("click", () => {
    if ((G2.innerText === '') && (flag === true)){
        data[1] = currPlayer;
        G2.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G3.addEventListener("click", () => {
    if ((G3.innerText === '') && (flag === true)){
        data[2] = currPlayer;
        G3.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G4.addEventListener("click", () => {
    if ((G4.innerText === '') && (flag === true)){
        data[3] = currPlayer;
        G4.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G5.addEventListener("click", () => {
    if ((G5.innerText === '') && (flag === true)){
        data[4] = currPlayer;
        G5.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G6.addEventListener("click", () => {
    if ((G6.innerText === '') && (flag === true)){
        data[5] = currPlayer;
        G6.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G7.addEventListener("click", () => {
    if ((G7.innerText === '') && (flag === true)){
        data[6] = currPlayer;
        G7.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G8.addEventListener("click", () => {
    if ((G8.innerText === '') && (flag === true)){
        data[7] = currPlayer;
        G8.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})

G9.addEventListener("click", () => {
    if ((G9.innerText === '') && (flag === true)){
        data[8] = currPlayer;
        G9.innerText = currPlayer;
        winFunc();
        drawFunc();
        if (currPlayer === "X"){
            currPlayer = "O";
        }else{
            currPlayer = "X";
        }
        console.log(data);
    }
})
