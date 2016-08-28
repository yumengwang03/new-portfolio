var w = $(window).width();
var h = $(window).height();

//console.log(w);
//console.log(h);

var unit = 8;
var unitLength = w/unit;
var unit0 = 4;
var unit0Height = h/unit0;

var rowNum;
var columnNum;

var rowCompare;
var columnCompare;

var rowData;
var columnData;

var keyHint1 = ['1','2', '3','4','5','6','7','8'];
var keyHint2 = ['Q','W','E','R','T','Y','U','I'];
var keyHint3 = ['A','S','D','F','G','H','J','K'];
var keyHint4 = ['Z','X','C','V','B','N','M','0'];
var letter;

var resultLR;
var resultUD;

var currentEl;

var keyCount = 0;

var colorBox = ['#103b73', '#f2f2f2', '#f2bf27', '#af9ec4', '#103b73', '#f2f2f2', '#f2bf27', '#af9ec4', '#103b73', '#f2f2f2'];

var alreadyPressed = [];

var mouseClicked =  false;


//nested for-loops to create the grid
for (var i = 0; i < unit; i++) {
	for (var j = 0; j < unit0; j++) {
		var square = document.createElement('div');

    //each square contains a h3 displaying the hint letter
		letter = document.createElement('h3');
		
		square.classList.add('square');
		square.classList.add('letter');

		columnData = square.dataset.column = i + 1;
		rowData = square.dataset.row = j + 1;

		square.style.left = (i * unitLength) + 'px';
		square.style.top = (j * unit0Height) + 'px';

    //fill each square with the corresponding key
    if(rowData == 1 ) {
        $(square).css("background-color", colorBox[i]);
        letter.innerHTML = keyHint1[i];
        square.dataset.key = keyHint1[i].charCodeAt(0);
    } else if(rowData == 2) {
        $(square).css("background-color", colorBox[i+2]);
        letter.innerHTML = keyHint2[i];
        square.dataset.key = keyHint2[i].charCodeAt(0);
    } else if(rowData == 3) {
        $(square).css("background-color", colorBox[i]);
        letter.innerHTML = keyHint3[i];
        square.dataset.key = keyHint3[i].charCodeAt(0);
    } else if(rowData == 4) { 
        $(square).css("background-color", colorBox[i+2]);
        letter.innerHTML = keyHint4[i];
        square.dataset.key = keyHint4[i].charCodeAt(0);
    }

		document.querySelector('.grid').appendChild(square);
		square.appendChild(letter);
	}
}

//to vertically center the letters
var letterCenter = $('h3');
// letterCenter.css("padding-top", unit0Height/2 - 25);

var squares = $('.square');
squares.css("width", unitLength);
squares.css("height", unit0Height);
//squares.css("border-radius", "20px");

squares.on('click', function (evt) {
	var currentSquare = this;
	rowNum = currentSquare.dataset.row;
	columnNum = currentSquare.dataset.column;
  console.log(currentSquare);
	//console.log(rowNum + ' | ' + columnNum);
  mouseClicked = true;
});


$(document).keydown(function(event) {
  //console.log(event.keyCode);
  console.log(mouseClicked);

  for (var i = 0; i < $('.square').length; i++) {
    currentEl = $('.square')[i];
    // currentEl.css("border", "2px solid #000");
     
    var checkPressed = alreadyPressed.indexOf(event.keyCode);
    var letter = currentEl.querySelector('h3');

    if (currentEl.dataset.key == event.keyCode) {
      if (mouseClicked == false) {
        letter.innerHTML = 'Please Click';
      }

      if (checkPressed === -1 && mouseClicked) {
        alreadyPressed.push(event.keyCode);

        rowCompare = currentEl.dataset.row;
        columnCompare = currentEl.dataset.column;
        //console.log(rowCompare + ' | ' + columnCompare);
        checkSquares();
        //console.log(currentEl);

        var left = parseInt($(currentEl).css('left'));
        var top = parseInt($(currentEl).css('top'));
        console.log(left + ' | ' + top);

        $(currentEl).addClass('is-active');
        $(currentEl).css({
          'width': unitLength-26,
          'height': unit0Height-26,
          'left': (left + 13) + 'px',
          'top': (top + 13) + 'px'
        });

        var hint = randomHint();
        //console.log(letter);
        letter.innerHTML = hint;

        keyCount++;
       if(keyCount > 4) {
        letter.innerHTML = 'Game over';
        squares.css("cursor", "default");
       }
      }
    } 
  }

  if( event.keyCode == 32) {
    location.reload();
  }
});

function checkSquares() {

   if (rowCompare == rowNum && columnCompare == columnNum) {
        resultLR = 'Mouse!';
        resultUD = 'Mouse!';
        squares.css("cursor", "default");
      } else if (rowCompare == rowNum && columnCompare < columnNum) {
        resultLR = 'Right';
        resultUD = 'Right';
        
        //console.log(resultLR);
        //console.log(resultUD);
      } else if (rowCompare == rowNum && columnCompare > columnNum) {
        resultLR = 'Left';
        resultUD = 'Left';
      }
  
   if (rowCompare > rowNum && columnCompare == columnNum) {
        resultLR = 'Up';
        resultUD = 'Up';
      } else if (rowCompare > rowNum && columnCompare < columnNum) {
        resultLR = 'Right';
        resultUD = 'Up';
      } else if (rowCompare > rowNum && columnCompare > columnNum) {
        resultLR = 'Left';
        resultUD = 'Up';
      }
  
   if (rowCompare < rowNum && columnCompare == columnNum) {
        resultLR = 'Down';
        resultUD = 'Down';
        
      } else if (rowCompare < rowNum && columnCompare < columnNum) {
        resultLR = 'Right';
        resultUD = 'Down';
      } else if (rowCompare < rowNum && columnCompare > columnNum) {
        resultLR = 'Left'; 
        resultUD = 'Down';
      }
  }
    

function randomHint() {
  var randomList = [resultLR, resultUD];
  var randomNumber = Math.floor(Math.random() * randomList.length);
  var randomLetter = randomList[randomNumber];
  return randomLetter;
}



