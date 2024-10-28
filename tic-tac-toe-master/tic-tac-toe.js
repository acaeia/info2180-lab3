document.addEventListener("DOMContentLoaded", function() {
  const gameboard = document.getElementById('board');
  const tiles = gameboard.querySelectorAll('div');
  const status = document.getElementById('status');
  const btn = document.querySelector('.btn');

  let turns = Array(9).fill(null);
  let turn = "X";

  tiles.forEach((square, i)=>{
    square.classList.add('square')
  

  square.addEventListener("click", function() {
    if(!turns[i]){
      turns[i] = turn;
      square.classList.add(turn);
      square.innerHTML = turn;

      if(turn==="X"){
        turn = "O";
      }else{
        turn = "X";
      }

      const win = Winner()
      if (win){
        status.innerHTML = `Congratulations! ${win} is the Winner!`
        status.classList.add("you-won");
        return;
      }
    }
  });

  square.addEventListener('mouseover',function(){
    if(!tiles[index]){
        square.classList.add("hover");
    }
  });

    square.addEventListener('mouseleave',function(){
      square.classList.remove("hover");
  });

  const wincombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]; // List of potential winning combinations

  function Winner(){
      for(const condition of wincombo) {
          let [a,b,c] = condition
          if(tiles[a] && tiles[a] == tiles[b] && tiles[a] == tiles[c]){//Comparing values
              return tiles[a]
          }
      }
      return false
  }

  btn.addEventListener('click',function(){
    tiles = Array(9).fill(null)
    status.innerHTML = "Move your mouse over a square and click to play an X or an O."
    status.classList.remove("you-won")

    tiles.forEach(square => {
        square.classList.remove("X","O")
        square.innerHTML = "";
    });
  });

  });
});