

// CLICKS X and O
xCount = 0;
oCount = 0;
started = 0;

var squaresArray = document.querySelectorAll(".square");
for (var i = 0; i < squaresArray.length; i++) {
squaresArray[i].addEventListener("mousedown", function(){
  if (started === 0) {
  }
if (started === 1) {
  if ($(this).text() === "O" || $(this).text() === "X") {
    console.log("Choose another square!!");
  } else if (xCount === oCount){
    this.textContent = "X";
    this.style.color = "purple";
    xCount += 1;
  } else if (oCount < xCount) {
    this.textContent = "O";
    this.style.color = "orange";
    oCount += 1;
  }
}



})};

//Paragraph highlight
document.querySelector("p").addEventListener("mouseover",function(){
  this.style.color = "red";
  this.textContent = "CLICK: Start New Game!";
});
document.querySelector("p").addEventListener("mouseout",function(){
  this.style.color = "Black";
  this.textContent = "Welcome to Tic Tac Toe!";
});

//Reset Button
function reset(){
  setTimeout(function(){
    for (var i = 0; i < squaresArray.length; i++) {
     squaresArray[i].textContent = "";
   }

  }, 1000);

}

resetButton = document.querySelector(".restartButton");
resetButton.addEventListener("click", reset);

//CLEAR Function
// function clearSelection() {
//     if(document.selection && document.selection.empty) {
//         document.selection.empty();
//     } else if(window.getSelection) {
//         var sel = window.getSelection();
//         sel.removeAllRanges();
//     }
// }

// Turning squares background into white when hover
for (var i = 0; i < squaresArray.length; i++) {
squaresArray[i].addEventListener("mouseover", function(){
this.style.backgroundColor = "white";
})};
for (var i = 0; i < squaresArray.length; i++) {
squaresArray[i].addEventListener("mouseout", function(){
this.style.backgroundColor = "powderblue";
})};



for (var i = 0; i < $('.square').length; i++) {
  $('.square').eq(i).on( function( ) {
    if ($('.s1').text() === "X" || $('.s1').text() === "O") {
      if ($('.s1').text() === $('.s2').text()) {
          alert("hi");
        };
    };
  });
  };

// Start Button
  $('.startButton').on('click', function(){
    playerX = prompt("Name of First player:");
    playerX = playerX.replace( /\s\s+/g, ' ' );
    if (playerX.length < 1 || playerX === ' ' || playerX.length >= 11 ) {
      playerX = "SpaceX 🚀";
    }
    $('.nameX').text(playerX);
    playerY = prompt("Name of Second player:");
    playerY = playerY.replace( /\s\s+/g, ' ' );
    if (playerY.length < 1 || playerY === ' ' || playerY.length >= 11) {
      playerY = "N.A.S.A 🚀";
    }
    $('.nameO').text(playerY);
    started = 1;
  })








  // Squares Text comparison (Horizontal, Vertical and Diagonal)

for (var i = 0; i < $(".square").length; i++) {
  $(".square").eq(i).on('mousedown', function(){
// Horizontal

    if ($('.s1').text() != "" && $('.s1').text() === $('.s2').text() && $('.s1').text() === $('.s3').text()   ) {
      if ($(this).text() === "O") {
        alert($('.nameO').text() + " Won!");
      }
    if ($(this).text() === "X") {
        alert($('.nameX').text() + " Won!");

    }

    xCount = 0;
    oCount = 0;
    reset();

  }

  if ($('.s4').text() != "" && $('.s4').text() === $('.s5').text() && $('.s4').text() === $('.s6').text()   ) {
    if ($(this).text() === "O") {
      alert($('.nameO').text() + " Won!");
    }
  if ($(this).text() === "X") {
    alert($('.nameX').text() + " Won!");
  }
  xCount = 0;
  oCount = 0;
  reset();

}

if ($('.s7').text() != "" && $('.s7').text() === $('.s8').text() && $('.s7').text() === $('.s9').text()   ) {
  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();

}



// Vertical
if ($('.s1').text() != "" && $('.s1').text() === $('.s4').text() && $('.s1').text() === $('.s7').text()   ) {
  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();

}

if ($('.s2').text() != "" && $('.s2').text() === $('.s5').text() && $('.s2').text() === $('.s8').text()   ) {
  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();

}

if ($('.s3').text() != "" && $('.s3').text() === $('.s6').text() && $('.s3').text() === $('.s9').text()   ) {
  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();

}


// Diagonal
if ($('.s1').text() != "" && $('.s1').text() === $('.s5').text() && $('.s1').text() === $('.s9').text()   ) {

  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();

}

if ($('.s3').text() != "" && $('.s3').text() === $('.s5').text() && $('.s3').text() === $('.s7').text()   ) {

  if ($(this).text() === "O") {
    alert($('.nameO').text() + " Won!");
  }
if ($(this).text() === "X") {
  alert($('.nameX').text() + " Won!");
}
xCount = 0;
oCount = 0;
reset();


}




  })
}
