document.addEventListener("DOMContentLoaded", function(){
  const gameboard = document.querySelectorAll('#board div');
  gameboard.forEach(function(div){
    div.className = 'square'
  })
});