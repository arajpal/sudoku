$(document).ready(function(){
var st1,st2,st3,st4,st5,st6,st7,st8,st9;

	function compare_table(sudoku){
		for( var i=0; i<sudoku.length; i++){
			for( var j=0; j<sudoku.length; j++){
				if(i!=j){
					if(sudoku[i]==sudoku[j]){
						$("#table_inner").find('td').each(function(){
							$("#box"+(j+1)+"").css("background-color","red");
						});
					}else{
						$("#table_inner").find('td').each(function(){
						$("#box"+(j+1)+"").css("background-color","black");
					});
					}
				}
			}
		}
	}
	var keep_data = [];
	$("#box1").keyup(function(){
		st1 = $("#bx1").val();
		keep_data[0]=st1;
		var check = compare_table(keep_data);
	});
	$("#box2").keyup(function(){
		st2 = $("#bx2").val();
		keep_data[1]=st2;
		var check = compare_table(keep_data);		 
  });	
	$("#box3").keyup(function(){
		 st3 = $("#bx3").val();
		 keep_data[2]=st3;
		 var check = compare_table(keep_data);
	});
	$("#box4").keyup(function(){
		 st4 = $("#bx4").val();
		 keep_data[3]=st4;
		 var check = compare_table(keep_data);
	});
	$("#box5").keyup(function(){
		 st5 = $("#bx5").val();
		 keep_data[4]=st5;
		 var check = compare_table(keep_data);
	});
	$("#box6").keyup(function(){
		 st6 = $("#bx6").val();
		 keep_data[5]=st6;
		 var check = compare_table(keep_data);
	});
	$("#box7").keyup(function(){
		 st7 = $("#bx7").val();
		 keep_data[6]=st7;
		 var check = compare_table(keep_data);
	});
	$("#box8").keyup(function(){
		 st8 = $("#bx8").val();
		 keep_data[7]=st8;
		 var check = compare_table(keep_data);
	});
	$("#box9").keyup(function(){
		 st9 = $("#bx9").val();
		 keep_data[8]=st9;
		 var check = compare_table(keep_data);	
	});
});