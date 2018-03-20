$(document).ready(function(){
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var RandomArray = []; 
  var easyArray = [ 
    [8,2,7,1,5,4,3,9,6],
    [9,6,5,3,2,7,1,4,8],
    [3,4,1,6,8,9,7,5,2], 
    [5,9,3,4,6,8,2,7,1], 
    [4,7,2,5,1,3,6,8,9], 
    [6,1,8,9,7,2,4,3,5],
    [7,8,6,2,3,5,9,1,4],
    [1,5,4,7,9,6,8,2,3],
    [2,3,9,8,4,1,5,6,7] 
  ]
  var RandomArraySolution = [];
  var shuffle = function (){
    var switch1 = getRandomInt(1,9);
    var switch2 = getRandomInt(1,9);
    while (switch1 ===switch2){
      switch1 = getRandomInt(1,9);
    } 
    for (i=0; i <9; i++){
      for (j=0; j<9; j++){
        if (easyArray[i][j] === switch1){
         easyArray[i][j] = switch2;
        } 
        else if (easyArray[i][j] === switch2){
          easyArray[i][j] = switch1;
        }
      }  
    }
  }
  $("#Puzzle_Gen").on('click', function (){ 
    shuffle();
    RandomArray = $.extend(true,[], easyArray);
    for (i=0; i <9; i++){
      var getRandomNumHide = getRandomInt(1,5);
      var choices = [0,1,2,3,4,5,6,7,8];
      for (j=0; j < getRandomNumHide; j++){
        var index = getRandomInt(0, choices.length - 1); 
        var position = choices.splice(index, 1)[0];
        RandomArray[i][position]='';
      }
    }
    for (i=0; i<9; i++){
      for (j=0; j<9; j++){
        var divA = $("#box" + (i + 1) + (j + 1));
        var rAndC = $(divA);
        rAndC.text(RandomArray[i][j]);
        if(rAndC.text()===''){
        rAndC.attr("contentEditable", 'true');
        }else{
          rAndC.attr("contentEditable", 'false');
        }
      } 
    }
  });
  $("#check").on('click', function(){
    var counter = 0;
    for (i=0; i<9; i++){
      for(j=0; j<9; j++){
        var divC = $("#bx" + (i + 1) + (j+ 1));
        RandomArray[i][j] = $(divC).val();
        var divD = $("#box" + (i + 1) + (j+ 1));
        if (easyArray[i][j] != RandomArray[i][j]) {
          $(divD).css({"background-color": "#FECBAE"});
        counter++;
        }else {
          $(divD).css({"background-color": ""})
        }
      }
    }
    if(counter === 0){
      alert("you win!");
     }
  });
});