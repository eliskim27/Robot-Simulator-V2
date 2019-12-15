document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  const movesContainer = document.getElementById('moves-container')
  const moveButton = document.getElementById('move-button')
  

  document.body.addEventListener('keydown', function(e){
    if (e.code === "ArrowLeft"){
      createMove("left")
    } else if (e.code === "ArrowRight"){
      createMove("right")
    } else if (e.code === "ArrowUp"){
      createMove("up")
    } else if (e.code === "ArrowDown"){
      createMove("down")
    } else if (e.code === "Backspace"){
      deleteMove()
    } else if (e.code === "Enter"){
      doMove()
    }
  })

  moveButton.addEventListener('click',function(){
    autoMove()
  })

  
  
  
  
  
  // function autoMove(){
  //   let movesTotal = movesContainer.querySelectorAll('li').length
  //   i = 1

  //   do {
  //   setInterval(doMove(), 1000)
  //     i += 1
  //   }
  //   while (i <= movesTotal)

  // }
  
  function doMove(){
    let moveLi = movesContainer.querySelector('li')
    if (moveLi){
      move(moveLi.innerText)
      moveLi.remove()
    }
  }
  
  function deleteMove(){
    let lastMove = movesContainer.lastChild
    if (lastMove){
      lastMove.remove()
    }
  }
  
  function createMove(arrowEvent){
    let newLi = document.createElement('li')
    newLi.innerText = arrowEvent
    movesContainer.append(newLi)
  }
})