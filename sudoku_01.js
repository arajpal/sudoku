$(document).ready(function(){  
  function getRandomInt(min, max){//get the random value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var RandomArray = []; 
  var mainArray = [ 
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7], 
    [8,5,9,7,6,1,4,2,3], 
    [4,2,6,8,5,3,7,9,1], 
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9] 
  ]
  var shuffle = function (){//shuffling the values of array and generating a new array
    var randomNumber1 = getRandomInt(1,9);
    var randomNumber2 = getRandomInt(1,9);
    while (randomNumber1 ===randomNumber2){
      randomNumber1 = getRandomInt(1,9);
    } 
    for (i=0; i <9; i++){
      for (j=0; j<9; j++){
        if (mainArray[i][j] === randomNumber1){//change the value of array with random value
         mainArray[i][j] = randomNumber2;
        } 
        else if (mainArray[i][j] === randomNumber2){//change the value of array with random value
          mainArray[i][j] = randomNumber1;
        }
      }  
    }
  }
  $("#random_num").on('click', function (){ 
    shuffle();//calling shuffle function
    RandomArray = $.extend(true,[], mainArray);//making  a new random array with shuffled value
    for (i=0; i <9; i++){
      var getRandomNumHidden = getRandomInt(1,5);//choosing how many values we have to delete
      var choices = [0,1,2,3,4,5,6,7,8];
      for (j=0; j < getRandomNumHidden; j++){
        var index = getRandomInt(0, choices.length - 1); 
        var position = choices.splice(index, 1)[0];
        RandomArray[i][position]='';
      }
    }
    for (i=0; i<9; i++){
      for (j=0; j<9; j++){
        var printValue = $("#box" + (i + 1) + (j + 1));
        var printValue1 = $(printValue);
        printValue1.text(RandomArray[i][j]);
        if(printValue1.text()===''){
        printValue1.attr("contentEditable", 'true');
        }else{
          printValue1.attr("contentEditable", 'false');
        }
      } 
    }
  });
  $("#check").on('click', function(){
    var counter = 0;
    for (i=0; i<9; i++){
      for(j=0; j<9; j++){
        var checkValue = $("#box" + (i + 1) + (j+ 1));
        RandomArray[i][j] = $(checkValue).text();
        var checkValue1 = $("#box" + (i + 1) + (j+ 1));
        if (mainArray[i][j] != RandomArray[i][j]) {
          $(checkValue1).css({"background-color": "#8A0707"});
        counter++;
        }else {
          $(checkValue1).css({"background-color": ""})
        }
      }
    }
    if(counter === 0){
      alert("you win!");
     }
  });
  $("#clear").on('click',function(){
    location.href ="sudoku_01.html";
  })
});