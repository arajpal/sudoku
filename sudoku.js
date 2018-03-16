$(document).ready(function(){
	var st1,st2,st3,st4,st5,st6,st7,st8,st9,st10,st11,st12,st13,st14,st15,st16,st17,st18,st19,st20,st21,st22,st23,st24,st25,st26,st27,st28,st29,st30,st31,st32,st33,st34,st35,st36,st37,st38,st39,st40,st41,st42,st43,st44,st45,st46,st47,st48,st49,st50,st51,st52,st53,st54,st55,st56,st57,st58,st59,st60,st61,st62,st63,st64,st65,st66,st67,st68,st69,st70,st71,st72,st73,st74,st75,st76,st77,st78,st79,st80,st81;
	
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
	var keep_data1 = [];
	$("#box10").keyup(function(){
		st10 = $("#bx10").val();
		 keep_data1[0]=st10;
		 var check = compare_table(keep_data1);
	});
	$("#box11").keyup(function(){
		 st11 = $("#bx11").val();
		 keep_data1[1]=st11;
		 var check = compare_table(keep_data1);
		});
	$("#box12").keyup(function(){
		 st12 = $("#bx12").val();
		 keep_data1[2]=st12;
		 var check = compare_table(keep_data1);
	});	
	$("#box13").keyup(function(){
		 st13 = $("#bx13").val();
		 keep_data1[3]=st13;
		 var check = compare_table(keep_data1);
	});
	$("#box14").keyup(function(){
		 st14 = $("#bx14").val();
		 keep_data1[4]=st14;
		 var check = compare_table(keep_data1);
	});
	$("#box15").keyup(function(){
		 st15 = $("#bx15").val();
		 keep_data1[5]=st15;
		 var check = compare_table(keep_data1);
	});
	$("#box16").keyup(function(){
		 st16 = $("#bx16").val();
		 keep_data1[6]=st16;
		 var check = compare_table(keep_data1);
	});
	$("#box17").keyup(function(){
		 st17 = $("#bx17").val();
		 keep_data1[7]=st17;
		 var check = compare_table(keep_data1);
	});
	$("#box18").keyup(function(){
		 st18 = $("#bx18").val();
		 keep_data1[8]=st18;
		 var check = compare_table(keep_data1);
	});
	var keep_data2 = [];
	$("#box19").keyup(function(){
		 st19 = $("#bx19").val();
		 keep_data2[0]=st19;
		 var check = compare_table(keep_data2);
	});
	$("#box20").keyup(function(){
		st20 = $("#bx20").val();
		keep_data2[1]=st20;
		var check = compare_table(keep_data2);
	});
	$("#box21").keyup(function(){
		 st21 = $("#bx21").val();
		 keep_data2[2]=st21;
		 var check = compare_table(keep_data2);
	});
	$("#box22").keyup(function(){
		 st22 = $("#bx22").val();
		 keep_data2[3]=st22;
		 var check = compare_table(keep_data2);
	});	
	$("#box23").keyup(function(){
		 st23 = $("#bx23").val();
		 keep_data2[4]=st23;
		 var check = compare_table(keep_data2);
	});
	$("#box24").keyup(function(){
		 st24 = $("#bx24").val();
		 keep_data2[5]=st24;
		 var check = compare_table(keep_data2);
	});
	$("#box25").keyup(function(){
		 st25 = $("#bx25").val();
		 keep_data2[6]=st25;
		 var check = compare_table(keep_data2);
	});
	$("#box26").keyup(function(){
		 st26 = $("#bx26").val();
		 keep_data2[7]=st26;
		 var check = compare_table(keep_data2);
	});
	$("#box27").keyup(function(){
		 st27 = $("#bx27").val();
		 keep_data2[8]=st27;
		 var check = compare_table(keep_data2);
	});
	keep_data3 = [];
	$("#box28").keyup(function(){
		 st28 = $("#bx28").val();
		 keep_data3[0]=st28;
		 var check = compare_table(keep_data3);
	});
	$("#box29").keyup(function(){
		 st29 = $("#bx29").val();
		 keep_data3[1]=st29;
		 var check = compare_table(keep_data3);
	});
	$("#box30").keyup(function(){
		st30 = $("#bx30").val();
		keep_data3[2]=st30;
		var check = compare_table(keep_data3);
	});
	$("#box31").keyup(function(){
		 st31 = $("#bx31").val();
		 keep_data3[3]=st31;
		 var check = compare_table(keep_data3);
	});
	$("#box32").keyup(function(){
		 st32 = $("#bx32").val();
		 keep_data3[4]=st32;
		 var check = compare_table(keep_data3);
	});	
	$("#box33").keyup(function(){
		 st33 = $("#bx33").val();
		 keep_data3[5]=st33;
		 var check = compare_table(keep_data3);
	});
	$("#box34").keyup(function(){
		 st34 = $("#bx34").val();
		 keep_data3[6]=st34;
		 var check = compare_table(keep_data3);
		 	});
	$("#box35").keyup(function(){
		 st35 = $("#bx35").val();
		 keep_data3[7]=st35;
		 var check = compare_table(keep_data3);
	});
	$("#box36").keyup(function(){
		 st36 = $("#bx36").val();
		 keep_data3[8]=st36;
		 var check = compare_table(keep_data3);
	});
	keep_data4 = [];
	$("#box37").keyup(function(){
		 st37 = $("#bx37").val();
		 keep_data4[0]=st37;
		 var check = compare_table(keep_data4);
	});
	$("#box38").keyup(function(){
		 st38 = $("#bx38").val();
		 keep_data4[1]=st38;
		 var check = compare_table(keep_data4);
	});
	$("#box39").keyup(function(){
		 st39 = $("#bx39").val();
		 keep_data4[2]=st39;
		 var check = compare_table(keep_data4);
		 	});
	$("#box40").keyup(function(){
		st40 = $("#bx40").val();
		keep_data4[3]=st40;
		var check = compare_table(keep_data4);
	});
	$("#box41").keyup(function(){
		 st41 = $("#bx41").val();
		 keep_data4[4]=st41;
		 var check = compare_table(keep_data4);
	});
	$("#box42").keyup(function(){
		 st42 = $("#bx42").val();
		 keep_data4[5]=st42;
		 var check = compare_table(keep_data4);
	});	
	$("#box43").keyup(function(){
		 st43 = $("#bx43").val();
		 keep_data4[6]=st43;
		 var check = compare_table(keep_data4);
	});
	$("#box44").keyup(function(){
		 st44 = $("#bx44").val();
		 keep_data4[7]=st44;
		 var check = compare_table(keep_data4);
	});
	$("#box45").keyup(function(){
		 st45 = $("#bx45").val();
		 keep_data4[8]=st45;
		 var check = compare_table(keep_data4);
	});
	keep_data5 = [];
	$("#box46").keyup(function(){
		 st46 = $("#bx46").val();
		 keep_data5[0]=st46;
		 var check = compare_table(keep_data5);
	});
	$("#box47").keyup(function(){
		 st47 = $("#bx47").val();
		 keep_data5[1]=st47;
		 var check = compare_table(keep_data5);
	});
	$("#box48").keyup(function(){
		 st48 = $("#bx48").val();
		 keep_data5[2]=st48;
		 var check = compare_table(keep_data5);
	});
	$("#box49").keyup(function(){
		 st49 = $("#bx49").val();
		 keep_data5[3]=st49;
		 var check = compare_table(keep_data5);
	});
	$("#box50").keyup(function(){
		st50 = $("#bx50").val();
		keep_data5[4]=st50;
		var check = compare_table(keep_data5);
	});
	$("#box51").keyup(function(){
		 st51 = $("#bx51").val();
		 keep_data5[5]=st51;
		 var check = compare_table(keep_data5);
	});
	$("#box52").keyup(function(){
		 st52 = $("#bx52").val();
		 keep_data5[6]=st52;
		 var check = compare_table(keep_data5);
	});	
	$("#box53").keyup(function(){
		 st53 = $("#bx53").val();
		 keep_data5[7]=st53;
		 var check = compare_table(keep_data5);
	});
	$("#box54").keyup(function(){
		 st54 = $("#bx54").val();
		 keep_data5[8]=st54;
		 var check = compare_table(keep_data5);
	});
	keep_data6 = [];
	$("#box55").keyup(function(){
		 st55 = $("#bx55").val();
		 keep_data6[0]=st55;
		 var check = compare_table(keep_data6);
	});
	$("#box56").keyup(function(){
		 st56 = $("#bx56").val();
		 keep_data6[1]=st56;
		 var check = compare_table(keep_data6);
	});
	$("#box57").keyup(function(){
		 st57 = $("#bx57").val();
		 keep_data6[2]=st57;
		 var check = compare_table(keep_data6);
	});
	$("#box58").keyup(function(){
		 st58 = $("#bx58").val();
		 keep_data6[3]=st58;
		 var check = compare_table(keep_data6);
	});
	$("#box59").keyup(function(){
		 st59 = $("#bx59").val();
		 keep_data6[4]=st59;
		 var check = compare_table(keep_data6);
	});
	$("#box60").keyup(function(){
		st60 = $("#bx60").val();
		keep_data6[5]=st60;
		var check = compare_table(keep_data6);
	});
	$("#box61").keyup(function(){
		 st61 = $("#bx61").val();
		 keep_data6[6]=st61;
		 var check = compare_table(keep_data6);
	});
	$("#box62").keyup(function(){
		 st62 = $("#bx62").val();
		 keep_data6[7]=st62;
		 var check = compare_table(keep_data6);
	});	
	$("#box63").keyup(function(){
		 st63 = $("#bx63").val();
		 keep_data6[8]=st63;
		 var check = compare_table(keep_data6);
	});
	keep_data7 = [];
	$("#box64").keyup(function(){
		 st64 = $("#bx64").val();
		 keep_data7[0]=st64;
		 var check = compare_table(keep_data7);
	});
	$("#box65").keyup(function(){
		 st65 = $("#bx65").val();
		 keep_data7[1]=st65;
		 var check = compare_table(keep_data7);
	});
	$("#box66").keyup(function(){
		 st66 = $("#bx66").val();
		 keep_data7[2]=st66;
		 var check = compare_table(keep_data7);
	});
	$("#box67").keyup(function(){
		 st67 = $("#bx67").val();
		 keep_data7[3]=st67;
		 var check = compare_table(keep_data7);
	});
	$("#box68").keyup(function(){
		 st68 = $("#bx68").val();
		 keep_data7[4]=st68;
		 var check = compare_table(keep_data7);
	});
	$("#box69").keyup(function(){
		 st69 = $("#bx69").val();
		 keep_data7[5]=st69;
		 var check = compare_table(keep_data7);
	});
	$("#box70").keyup(function(){
		st70 = $("#bx70").val();
		keep_data7[6]=st70;
		var check = compare_table(keep_data7);
	});
	$("#box71").keyup(function(){
		 st71 = $("#bx71").val();
		 keep_data7[7]=st71;
		 var check = compare_table(keep_data7);
	});
	$("#box72").keyup(function(){
		 st72 = $("#bx72").val();
		 keep_data7[8]=st72;
		 var check = compare_table(keep_data7);
	});	
	var keep_data8 = [];
	$("#box73").keyup(function(){
		 st73 = $("#bx73").val();
		 keep_data8[0]=st73;
		 var check = compare_table(keep_data8);
	});
	$("#box74").keyup(function(){
		 st74 = $("#bx74").val();
		 keep_data8[1]=st74;
		 var check = compare_table(keep_data8);
	});
	$("#box75").keyup(function(){
		 st75 = $("#bx75").val();
		 keep_data8[2]=st75;
		 var check = compare_table(keep_data8);
	});
	$("#box76").keyup(function(){
		 st76 = $("#bx76").val();
		 keep_data8[3]=st76;
		 var check = compare_table(keep_data8);		
	});
	$("#box77").keyup(function(){
		 st77 = $("#bx77").val();
		 keep_data8[4]=st77;
		 var check = compare_table(keep_data8);
	});
	$("#box78").keyup(function(){
		 st78 = $("#bx78").val();
		 keep_data8[5]=st78;
		 var check = compare_table(keep_data8);
	});
	$("#box79").keyup(function(){
		 st79 = $("#bx79").val();
		 keep_data8[6]=st79;
		 var check = compare_table(keep_data8);
	});
	$("#box80").keyup(function(){
		st80 = $("#bx80").val();
		keep_data8[7]=st80;
		var check = compare_table(keep_data8);
	});		
	$("#box81").keyup(function(){
		st81 = $("#bx81").val();
		keep_data8[8]=st81;
		var check = compare_table(keep_data8);
	});


});
