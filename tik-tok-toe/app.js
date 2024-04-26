let boxes=document.querySelectorAll('.box');
let resetBtn =document.querySelector('#reset-button');
let newGameBtn=document.querySelector('#newGame-button');
let Container=document.querySelector('.Container');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turnO =true;

const winPatterns= [
  [0,1,2],
  [0,2,3],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],


  ];

  // const colorReset=()=>{
  //   if(boxes.innerText =='O')
  //   {
  //     boxes.style.color='red';
  //   }else(boxes.innerText =='X')
  //   {
  //     boxes.style.color='blue';
  //   }
  // };
  


const resetGame=()=>{

  turnO=true;
  enableBoxes();
  
  msgContainer.classList.add('hide');
  Container.classList.remove('hide');
};



boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(turnO){
      box.innerText='O';
      box.style.color=' darkred';
      turnO=false;
    }else{
      box.innerText='X';
      box.style.color='darkblue';
      turnO=true;
    }
    
    box.disabled=true;
    
    checkWinner();
  });
});

const disableBoxes=()=>{
  
  for(let box of boxes){
    box.disabled=true;
  }
};


const enableBoxes=()=>{
  
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const showWinner=(winner)=>{
  msg.innerText=`Congratulations, winner is ${winner}`;
  
  msgContainer.classList.remove('hide');
  Container.classList.add('hide');
  
  
  disableBoxes();

}

const checkWinner=()=>{
  for(let pattern of winPatterns){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;


    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if (pos1Val===pos2Val && pos2Val===pos3Val){
        

        showWinner(pos1Val);
      }
    }

  }
};
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);