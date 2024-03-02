console.log("Welcome to Tic-Tac-Toe Game")
let turn = "X"
let isgameover = false

function changeturn(){
    return turn === "X"?"O":"X";
};

//function to check win
function checkwin(){ 
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + ' Won'
            isgameover = true;
        }
    })
};

//Main Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeturn();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerHTML = "Turn for "+turn;
            }
        }
    })
})

//Reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML = ""
    });
    turn = "X"
    isgameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+ turn;
});