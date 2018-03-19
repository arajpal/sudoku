$(document).ready(function(){
	var st1,st2,st3,st4="5",st5,st6="1",st7="9",st8,st9,st10="3",st11="9",st12,st13,st14,st15,st16="7",st17,st18,st19,st20="1",st21,st22,st23="4",st24,st25="5",st26,st27,st28="6",st29,st30="2",st31,st32,st33,st34="7",st35,st36,st37="5",st37="3",st39,st40,st41="7",st42,st43="8",st44,st45,st46,st47="7",st48,st49,st50,st51="8",st52="9",st53,st54="3",st55="8",st56,st57="3",st58,st59="9",st60,st61="4",st62,st63,st64,st65="1",st66,st67="2",st68,st69="6",st70,st71,st72="3",st73,st74="9",st75,st76,st77,st78="7",st79,st80="6",st81="1";

	$("#box1").keyup(function(){
		  st1 = $("#bx1").val();
		 console.log(st1);
		if(st1==st2 || st1==st3 || st1==st4 || st1==st5 || st1==st6 || st1==st7 || st1==st8 || st1==st9 || st1==st10 || st1==st11 || st1==st12 || st1==st19 || st1==st20 || st1==st21 || st1==st28 || st1==st31 || st1==st34 || st1==st55 || st1==st58 || st1==st61 ){
			 $("#bx1").css("color", "red");
		}
		else{
			 $("#bx1").css("color", "black");	
		}
	});
	$("#box2").keyup(function(){
		 st2 = $("#bx2").val();
		 console.log(st2);
		if(st2==st1 || st2==st3 || st2==st4 || st2==st5 || st2==st6 || st2==st7 || st2==st8 || st2==st9 || st2==st10 || st2==st11 || st2==st12 || st2==st19 || st2==st20 || st2==st21 || st2==st29 || st2==st32 || st2==st35 || st2==st56 || st2==st59 || st2==st62){
			 $("#bx2").css("color", "red");
		}
		else{
			 $("#bx2").css("color", "black");	
		}		
	});	
	$("#box3").keyup(function(){
		 st3 = $("#bx3").val();
		 // table1_data.push(st3);
		if(st3==st2 || st3==st1 || st3==st4 || st3==st5 || st3==st6 || st3==st7 || st3==st8 || st3==st9 || st3==st10 || st3==st11 || st3==st12 || st3==st19 || st3==st20 || st3==st21 || st3==st30 || st3==st33 || st3==st36 || st3==st57 || st3==st60 || st3==st63){
			 $("#bx3").css("color", "red");
		}
		else{
			 $("#bx3").css("color", "black");	
		}		
	});
	$("#box4").keyup(function(){
		 st4 = $("#bx4").val();
		 // table1_data.push(st4);
		if(st4==st2 || st4==st3 || st4==st1 || st4==st5 || st4==st6 || st4==st7 || st4==st8 || st4==st9 || st4==st13 || st4==st14 || st4==st15 || st4==st22 || st4==st23 || st4==st24 || st4==st28 || st4==st31 || st4==st34 || st4==st55 || st4==st58 || st4==st61){
			 $("#bx4").css("color", "red");
		}
		else{
			 $("#bx4").css("color", "black");	
		}		
	});
	$("#box5").keyup(function(){
		 st5 = $("#bx5").val();
		 // table1_data.push(st5);
		if(st5==st2 || st5==st3 || st5==st4 || st5==st1 || st5==st6 || st5==st7 || st5==st8 || st5==st9 || st5==st13 || st5==st14 || st5==st15 || st5==st22 || st5==st23 || st5==st24 || st5==st29 || st5==st32 || st5==st35 || st5==st56 || st5==st59 || st5==st62){
			 $("#bx5").css("color", "red");
		}
		else{
			 $("#bx5").css("color", "black");	
		}		
	});
	$("#box6").keyup(function(){
		 st6 = $("#bx6").val();
		 // table1_data.push(st6);
		if(st6==st2 || st6==st3 || st6==st4 || st6==st5 || st6==st1 || st6==st7 || st6==st8 || st6==st9 || st6==st13 || st6==st14 || st6==st15 || st6==st22 || st6==st23 || st6==st24 || st6==st30 || st6==st33 || st6==st36 || st6==st57 || st6==st60 || st6==st63){
			 $("#bx6").css("color", "red");
		}
		else{
			 $("#bx6").css("color", "black");	
		}		
	});
	$("#box7").keyup(function(){
		 st7 = $("#bx7").val();
		 // table1_data.push(st7);
		if(st7==st2 || st7==st3 || st7==st4 || st7==st5 || st7==st6 || st7==st1 || st7==st8 || st7==st9 || st7==st16 || st7==st17 || st7==st18 || st7==st25 || st7==st26 || st7==st27 || st7==st28 || st7==st31 || st7==st34 || st7==st55 || st7==st58 || st7==st61){
			 $("#bx7").css("color", "red");
		}
		else{
			 $("#bx7").css("color", "black");	
		}		
	});
	$("#box8").keyup(function(){
		 st8 = $("#bx8").val();
		 // table1_data.push(st8);
		if(st8==st2 || st8==st3 || st8==st4 || st8==st5 || st8==st6 || st8==st7 || st8==st1 || st8==st9 || st8==st16 || st8==st17 || st8==st18 || st8==st25 || st8==st26 || st8==st27 || st8==st29 || st8==st32 || st8==st35 || st8==st56 || st8==st59 || st8==st62){
			 $("#bx8").css("color", "red");
		}
		else{
			 $("#bx8").css("color", "black");	
		}		
	});
	$("#box9").keyup(function(){
		 st9 = $("#bx9").val();
		 // table1_data.push(st9);
		if(st9==st2 || st9==st3 || st9==st4 || st9==st5 || st9==st6 || st9==st7 || st9==st8 || st9==st1 || st9==st16 || st9==st17 || st9==st18 || st9==st25 || st9==st26 || st9==st27 || st9==st30 || st9==st33 || st9==st36 || st9==st57 || st9==st60 || st9==st63){
			 $("#bx9").css("color", "red");
		}
		else{
			 $("#bx9").css("color", "black");	
		}		
	});
	// });
	$("#box10").keyup(function(){
		st10 = $("#bx10").val();
		if(st10==st11 || st10==st12 || st10==st13 || st10==st14 || st10==st15 || st10==st16 || st10==st17 || st10==st18 || st10==st19 || st10==st20 || st10==st21 || st10==st1 || st10==st2 || st10==st3 || st10==st37 || st10==st40 || st10==st43 || st10==st64 || st10==st67 || st10==st70){
			$("#bx10").css("color", "red");
		}
		else{
			$("#bx10").css("color", "black");
		}
	});
	$("#box11").keyup(function(){
		 st11 = $("#bx11").val();
		if(st11==st12 || st11==st13 || st11==st14 || st11==st15 || st11==st16 || st11==st7 || st11==st18 || st11==st10 || st11==st19 || st11==st20 || st11==st21 || st11==st1 || st11==st2 || st11==st3 || st11==st38 || st11==st41 || st11==st44 || st11==st65 || st11==st68 || st11==st71){
			 $("#bx11").css("color", "red");
		}
		else{
			 $("#bx11").css("color", "black");	
		}
	});
	$("#box12").keyup(function(){
		 st12 = $("#bx12").val();
		if(st12==st11 || st12==st13 || st12==st14 || st12==st15 || st12==st16 || st12==st17 || st12==st18 || st12==st10 || st12==st19 || st12==st20 || st12==st21 || st12==st1 || st12==st2 || st12==st3 || st12==st39 || st12==st42 || st12==st45 || st12==st66 || st12==st69 || st12==st72){
			 $("#bx12").css("color", "red");
		}
		else{
			 $("#bx12").css("color", "black");	
		}		
	});	
	$("#box13").keyup(function(){
		 st13 = $("#bx13").val();
		if(st13==st12 || st13==st11 || st13==st14 || st13==st15 || st13==st16 || st13==st17 || st13==st18 || st13==st10 || st13==st4 || st13==st5 || st13==st6 || st13==st22 || st13==st23 || st13==st24 || st13==st37 || st13==st40 || st13==st43 || st13==st64 || st13==st67 || st13==st70){
			 $("#bx13").css("color", "red");
		}
		else{
			 $("#bx13").css("color", "black");	
		}		
	});
	$("#box14").keyup(function(){
		 st14 = $("#bx14").val();
		if(st14==st12 || st14==st13 || st14==st11 || st14==st15 || st14==st16 || st14==st17 || st14==st18 || st14==st10 || st14==st4 || st14==st5 || st14==st6 || st14==st22 || st14==st23 || st14==st24 || st14==st41 || st14==st44 || st14==st65 || st14==st68 || st14==st71 || st14==st38){
			 $("#bx14").css("color", "red");
		}
		else{
			 $("#bx14").css("color", "black");	
		}		
	});
	$("#box15").keyup(function(){
		 st15 = $("#bx15").val();
		if(st15==st12 || st15==st13 || st15==st14 || st15==st11 || st15==st16 || st15==st17 || st15==st18 || st15==st10 || st15==st4 || st15==st5 || st15==st6 || st15==st22 || st15==st23 || st15==st24 || st15==st39 || st15==st42 || st15==st45 || st15==st66 || st15==st69 || st15==st72){
			 $("#bx15").css("color", "red");
		}
		else{
			 $("#bx15").css("color", "black");	
		}		
	});
	$("#box16").keyup(function(){
		 st16 = $("#bx16").val();
		if(st16==st12 || st16==st13 || st16==st14 || st16==st15 || st16==st11 || st16==st17 || st16==st18 || st16==st10 || st16==st7 || st16==st8 || st16==st9 || st16==st25 || st16==st26 || st16==st27 || st16==st37 || st16==st40 || st16==st43 || st16==st64 || st16==st67 || st16==st70){
			 $("#bx16").css("color", "red");
		}
		else{
			 $("#bx16").css("color", "black");	
		}		
	});
	$("#box17").keyup(function(){
		 st17 = $("#bx17").val();
		if(st17==st12 || st17==st13 || st17==st14 || st17==st15 || st17==st16 || st17==st11 || st17==st18 || st17==st10 || st17==st7 || st17==st8 || st17==st9 || st17==st25 || st17==st26 || st17==st27 || st17==st38 || st17==st41 || st17==st44 || st17==st65 || st17==st68 || st17==st71){
			 $("#bx17").css("color", "red");
		}
		else{
			 $("#bx17").css("color", "black");	
		}		
	});
	$("#box18").keyup(function(){
		 st18 = $("#bx18").val();
		if(st18==st12 || st18==st13 || st18==st14 || st18==st15 || st18==st16 || st18==st17 || st18==st11 || st18==st10 || st18==st7 || st18==st8 || st18==st9 || st18==st25 || st18==st26 || st18==st27 || st18==st39 || st18==st42 || st18==st45 || st18==st66 || st18==st69 || st18==st72){
			 $("#bx18").css("color", "red");
		}
		else{
			 $("#bx18").css("color", "black");	
		}		
	});
	$("#box19").keyup(function(){
		 st19 = $("#bx19").val();
		if(st19==st20 || st19==st23 || st19==st24 || st19==st25 || st19==st26 || st19==st27 || st19==st22 || st19==st21 || st19==st1 || st19==st2 || st19==st3 || st19==st10 || st19==st11 || st19==st12 || st19==st46 || st19==st49 || st19==st52 || st19==st73 || st19==st76 || st19==st79){
			 $("#bx19").css("color", "red");
		}
		else{
			 $("#bx19").css("color", "black");	
		}		
	});
	$("#box20").keyup(function(){
		st20 = $("#bx20").val();
		if(st20==st21 || st20==st22 || st20==st23 || st20==st24 || st20==st25 || st20==st26 || st20==st27 || st20==st19 || st20==st1 || st20==st2 || st20==st3 || st20==st10 || st20==st11 || st20==st12 || st20==st47 || st20==st50 || st20==st53 || st20==st74 || st20==st77 || st20==st80){
			$("#bx20").css("color", "red");
		}
		else{
			$("#bx20").css("color", "black");
		}
	});
	$("#box21").keyup(function(){
		 st21 = $("#bx21").val();
		if(st21==st22 || st21==st23 || st21==st24 || st21==st25 || st21==st26 || st21==st27 || st21==st20 || st21==st19 || st21==st1 || st21==st2 || st21==st3 || st21==st10 || st21==st11 || st21==st12 || st21==st48 || st21==st51 || st21==st54 || st21==st75 || st21==st78 || st21==st81){
			 $("#bx21").css("color", "red");
		}
		else{
			 $("#bx21").css("color", "black");	
		}
	});
	$("#box22").keyup(function(){
		 st22 = $("#bx22").val();
		if(st22==st21 || st22==st23 || st22==st24 || st22==st25 || st22==st26 || st22==st27 || st22==st20 || st22==st19 || st22==st4 || st22==st5 || st22==st6 || st22==st13 || st22==st14 || st22==st15 || st22==st46 || st22==st49 || st22==st52 || st22==st73 || st22==st76 || st22==st79){
			 $("#bx22").css("color", "red");
		}
		else{
			 $("#bx22").css("color", "black");	
		}		
	});	
	$("#box23").keyup(function(){
		 st23 = $("#bx23").val();
		if(st23==st22 || st23==st21 || st23==st24 || st23==st25 || st23==st26 || st23==st27 || st23==st20 || st23==st19 || st23==st4 || st23==st5 || st23==st6 || st23==st13 || st23==st14 || st23==st15 || st23==st47 || st23==st50 || st23==st53 || st23==st74 || st23==st77 || st23==st80){
			 $("#bx23").css("color", "red");
		}
		else{
			 $("#bx23").css("color", "black");	
		}		
	});
	$("#box24").keyup(function(){
		 st24 = $("#bx24").val();
		if(st24==st22 || st24==st23 || st24==st21 || st24==st25 || st24==st26 || st24==st27 || st24==st20 || st24==st19 || st24==st4 || st24==st5 || st24==st6 || st24==st13 || st24==st14 || st24==st15 || st24==st48 || st24==st51 || st24==st54 || st24==st75 || st24==st78 || st24==st81){
			 $("#bx24").css("color", "red");
		}
		else{
			 $("#bx24").css("color", "black");	
		}		
	});
	$("#box25").keyup(function(){
		 st25 = $("#bx25").val();
		if(st25==st22 || st25==st23 || st25==st24 || st25==st21 || st25==st26 || st25==st27 || st25==st20 || st25==st19 || st25==st7 || st25==st8 || st25==st9 || st25==st16 || st25==st17 || st25==st18 || st25==st46 || st25==st49 || st25==st52 || st25==st73 || st25==st76 || st25==st79){
			 $("#bx25").css("color", "red");
		}
		else{
			 $("#bx25").css("color", "black");	
		}		
	});
	$("#box26").keyup(function(){
		 st26 = $("#bx26").val();
		if(st26==st22 || st26==st23 || st26==st24 || st26==st25 || st26==st21 || st26==st27 || st26==st20 || st26==st19 || st26==st7 || st26==st8 || st26==st9 || st26==st16 || st26==st17 || st26==st18 || st26==st47 || st26==st50 || st26==st53 || st26==st74 || st26==st77 || st26==st80){
			 $("#bx26").css("color", "red");
		}
		else{
			 $("#bx26").css("color", "black");	
		}		
	});
	$("#box27").keyup(function(){
		 st27 = $("#bx27").val();
		if(st27==st22 || st27==st23 || st27==st24 || st27==st25 || st27==st26 || st27==st21 || st27==st20 || st27==st19 || st27==st7 || st27==st8 || st27==st9 || st27==st16 || st27==st17 || st27==st18 || st27==st48 || st27==st51 || st27==st54 || st27==st75 || st27==st78 || st27==st81){
			 $("#bx27").css("color", "red");
		}
		else{
			 $("#bx27").css("color", "black");	
		}		
	});
	$("#box28").keyup(function(){
		 st28 = $("#bx28").val();
		if(st28==st32 || st28==st33 || st28==st34 || st28==st35 || st28==st36 || st28==st31 || st28==st30 || st28==st29 || st28==st1 || st28==st4 || st28==st7 || st28==st55 || st28==st58 || st28==st61 || st28==st37 || st28==st38 || st28==st39 || st28==st46 || st28==st47 || st28==st48){
			 $("#bx28").css("color", "red");
		}
		else{
			 $("#bx28").css("color", "black");	
		}		
	});
	$("#box29").keyup(function(){
		 st29 = $("#bx29").val();
		if(st29==st32 || st29==st33 || st29==st34 || st29==st35 || st29==st36 || st29==st30 || st29==st28 || st29==st31 || st29==st2 || st29==st5 || st29==st8 || st29==st56 || st29==st59 || st29==st62 || st29==st37 || st29==st38 || st29==st39 || st29==st46 || st29==st47 || st29==st48){
			 $("#bx29").css("color", "red");
		}
		else{
			 $("#bx29").css("color", "black");	
		}		
	});
	$("#box30").keyup(function(){
		st30 = $("#bx30").val();
		if(st30==st31 || st30==st32 || st30==st33 || st30==st34 || st30==st35 || st30==st36 || st30==st29 || st30==st28 || st30==st3 || st30==st6 || st30==st9 || st30==st57 || st30==st60 || st30==st63 || st30==st37 || st30==st38 || st30==st39 || st30==st46 || st30==st47 || st30==st48){
			$("#bx30").css("color", "red");
		}
		else{
			$("#bx30").css("color", "black");
		}
	});
	$("#box31").keyup(function(){
		 st31 = $("#bx31").val();
		if(st31==st32 || st31==st33 || st31==st34 || st31==st35 || st31==st36 || st31==st30 || st31==st28 || st31==st29 || st31==st1 || st31==st4 || st31==st7 || st31==st55 || st31==st58 || st31==st61 || st31==st40 || st31==st41 || st31==st42 || st31==st49 || st31==st50 || st31==st51){
			 $("#bx31").css("color", "red");
		}
		else{
			 $("#bx31").css("color", "black");	
		}
	});
	$("#box32").keyup(function(){
		 st32 = $("#bx32").val();
		if(st32==st31 || st32==st33 || st32==st34 || st32==st35 || st32==st36 || st32==st30 || st32==st28 || st32==st29 || st32==st2 || st32==st5 || st32==st8 || st32==st56 || st32==st59 || st32==st62 || st32==st40 || st32==st41 || st32==st42 || st32==st49 || st32==st50 || st32==st51){
			 $("#bx32").css("color", "red");
		}
		else{
			 $("#bx32").css("color", "black");	
		}		
	});	
	$("#box33").keyup(function(){
		 st33 = $("#bx33").val();
		if(st33==st32 || st33==st31 || st33==st34 || st33==st35 || st33==st36 || st33==st30 || st33==st28 || st33==st29 || st33==st3 || st33==st6 || st33==st9 || st33==st57 || st33==st60 || st33==st63 || st33==st40 || st33==st41 || st33==st42 || st33==st49 || st33==st50 || st33==st51){
			 $("#bx33").css("color", "red");
		}
		else{
			 $("#bx33").css("color", "black");	
		}		
	});
	$("#box34").keyup(function(){
		 st34 = $("#bx34").val();
		if(st34==st32 || st34==st33 || st34==st31 || st34==st35 || st34==st36 || st34==st30 || st34==st28 || st34==st29 || st34==st1 || st34==st4 || st34==st7 || st34==st55 || st34==st58 || st34==st61 || st34==st43 || st34==st44 || st34==st45 || st34==st52 || st34==st53 || st34==st54){
			 $("#bx34").css("color", "red");
		}
		else{
			 $("#bx34").css("color", "black");	
		}		
	});
	$("#box35").keyup(function(){
		 st35 = $("#bx35").val();
		if(st35==st32 || st35==st33 || st35==st34 || st35==st31 || st35==st36 || st35==st30 || st35==st28 || st35==st29 || st35==st2 || st35==st5 || st35==st8 || st35==st56 || st35==st59 || st35==st62 || st35==st43 || st35==st44 || st35==st45 || st35==st52 || st35==st53 || st35==st54){
			 $("#bx35").css("color", "red");
		}
		else{
			 $("#bx35").css("color", "black");	
		}		
	});
	$("#box36").keyup(function(){
		 st36 = $("#bx36").val();
		if(st36==st32 || st36==st33 || st36==st34 || st36==st35 || st36==st31 || st36==st30 || st36==st28 || st36==st29 || st36==st3 || st36==st6 || st36==st9 || st36==st57 || st36==st60 || st36==st63 || st36==st43 || st36==st44 || st36==st45 || st36==st52 || st36==st53 || st36==st54){
			 $("#bx36").css("color", "red");
		}
		else{
			 $("#bx36").css("color", "black");	
		}		
	});
	$("#box37").keyup(function(){
		 st37 = $("#bx37").val();
		if(st37==st42 || st37==st43 || st37==st44 || st37==st45 || st37==st40 || st37==st41 || st37==st38 || st37==st39 || st37==st10 || st37==st13 || st37==st16 || st37==st64 || st37==st67 || st37==st70 || st37==st28 || st37==st29 || st37==st30 || st37==st46 || st37==st47 || st37==st48){
			 $("#bx37").css("color", "red");
		}
		else{
			 $("#bx37").css("color", "black");	
		}		
	});
	$("#box38").keyup(function(){
		 st38 = $("#bx38").val();
		if(st38==st42 || st38==st43 || st38==st44 || st38==st45 || st38==st30 || st38==st37 || st38==st41 || st38==st39 || st38==st11 || st38==st14 || st38==st17 || st38==st65 || st38==st68 || st38==st71 || st38==st28 || st38==st29 || st38==st30 || st38==st46 || st38==st47 || st38==st48){
			 $("#bx38").css("color", "red");
		}
		else{
			 $("#bx38").css("color", "black");	
		}		
	});
	$("#box39").keyup(function(){
		 st39 = $("#bx39").val();
		if(st39==st42 || st39==st43 || st39==st44 || st39==st45 || st39==st40 || st39==st37 || st39==st38 || st39==st41 || st39==st12 || st39==st15 || st39==st18 || st39==st66 || st39==st69 || st39==st72 || st39==st28 || st39==st29 || st39==st30 || st39==st46 || st39==st47 || st39==st48){
			 $("#bx39").css("color", "red");
		}
		else{
			 $("#bx39").css("color", "black");	
		}		
	});
	$("#box40").keyup(function(){
		st40 = $("#bx40").val();
		if(st40==st41 || st40==st42 || st40==st43 || st40==st44 || st40==st45 || st40==st39 || st40==st37 || st40==st38 || st40==st10 || st40==st13 || st40==st16 || st40==st64 || st40==st67 || st40==st70 || st40==st31 || st40==st32 || st40==st33 || st40==st49 || st40==st50 || st40==st51){
			$("#bx40").css("color", "red");
		}
		else{
			$("#bx40").css("color", "black");
		}
	});
	$("#box41").keyup(function(){
		 st41 = $("#bx41").val();
		if(st41==st42 || st41==st43 || st41==st44 || st41==st45 || st41==st40 || st41==st37 || st41==st38 || st41==st39 || st41==st11 || st41==st14 || st41==st17 || st41==st65 || st41==st68 || st41==st71 || st41==st31 || st41==st32 || st41==st33 || st41==st49 || st41==st50 || st41==st51){
			 $("#bx41").css("color", "red");
		}
		else{
			 $("#bx41").css("color", "black");	
		}
	});
	$("#box42").keyup(function(){
		 st42 = $("#bx42").val();
		if(st42==st41 || st42==st43 || st42==st44 || st42==st45 || st42==st40 || st42==st37 || st42==st38 || st42==st39 || st42==st12 || st42==st15 || st42==st18 || st42==st66 || st42==st69 || st39==st72 || st42==st31 || st42==st32 || st42==st33 || st42==st49 || st42==st50 || st42==st51){
			 $("#bx42").css("color", "red");
		}
		else{
			 $("#bx42").css("color", "black");	
		}		
	});	
	$("#box43").keyup(function(){
		 st43 = $("#bx43").val();
		if(st43==st42 || st43==st41 || st43==st44 || st43==st45 || st43==st40 || st43==st37 || st43==st38 || st43==st39 || st43==st10 || st43==st13 || st43==st16 || st43==st64 || st43==st67 || st43==st70 || st43==st34 || st43==st35 || st43==st36 || st43==st52 || st43==st53 || st43==st54){
			 $("#bx43").css("color", "red");
		}
		else{
			 $("#bx43").css("color", "black");	
		}		
	});
	$("#box44").keyup(function(){
		 st44 = $("#bx44").val();
		if(st44==st42 || st44==st43 || st44==st41 || st44==st45 || st44==st40 || st44==st37 || st44==st38 || st44==st39 || st44==st11 || st44==st14 || st44==st17 || st44==st65 || st44==st68 || st44==st71 || st44==st34 || st44==st35 || st44==st36 || st44==st52 || st44==st53 || st44==st54){
			 $("#bx44").css("color", "red");
		}
		else{
			 $("#bx44").css("color", "black");	
		}		
	});
	$("#box45").keyup(function(){
		 st45 = $("#bx45").val();
		if(st45==st42 || st45==st43 || st45==st44 || st45==st41 || st45==st40 || st45==st37 || st45==st38 || st45==st39 || st45==st12 || st45==st15 || st45==st18 || st45==st66 || st45==st69 || st45==st72 || st45==st34 || st45==st35 || st45==st36 || st45==st52 || st45==st53 || st45==st54){
			 $("#bx45").css("color", "red");
		}
		else{
			 $("#bx45").css("color", "black");	
		}		
	});
	$("#box46").keyup(function(){
		 st46 = $("#bx46").val();
		if(st46==st52 || st46==st53 || st46==st54 || st46==st50 || st46==st51 || st46==st47 || st46==st48 || st46==st49 || st46==st19 || st46==st22 || st46==st25 || st46==st73 || st46==st76 || st46==st79 || st46==st28 || st46==st29 || st46==st30 || st46==st37 || st46==st38 || st46==st39){
			 $("#bx46").css("color", "red");
		}
		else{
			 $("#bx46").css("color", "black");	
		}		
	});
	$("#box47").keyup(function(){
		 st47 = $("#bx47").val();
		if(st47==st52 || st47==st53 || st47==st54 || st47==st50 || st47==st46 || st47==st51 || st47==st48 || st47==st49 || st47==st20 || st47==st23 || st47==st26 || st47==st74 || st47==st77 || st47==st80 || st47==st28 || st47==st29 || st47==st30 || st47==st37 || st47==st38 || st47==st39){
			 $("#bx47").css("color", "red");
		}
		else{
			 $("#bx47").css("color", "black");	
		}		
	});
	$("#box48").keyup(function(){
		 st48 = $("#bx48").val();
		if(st48==st52 || st48==st53 || st48==st54 || st48==st50 || st48==st46 || st48==st47 || st48==st51 || st48==st49 || st48==st21 || st48==st24 || st48==st27 || st48==st75 || st48==st78 || st48==st81 || st48==st28 || st48==st29 || st48==st30 || st48==st37 || st48==st38 || st48==st39){
			 $("#bx48").css("color", "red");
		}
		else{
			 $("#bx48").css("color", "black");	
		}		
	});
	$("#box49").keyup(function(){
		 st49 = $("#bx49").val();
		if(st49==st52 || st49==st53 || st49==st54 || st49==st50 || st49==st46 || st49==st47 || st49==st48 || st49==st51 || st49==st19 || st49==st22 || st49==st25 || st49==st73 || st49==st76 || st49==st79 || st49==st31 || st49==st32 || st49==st33 || st49==st40 || st49==st41 || st49==st42){
			 $("#bx49").css("color", "red");
		}
		else{
			 $("#bx49").css("color", "black");	
		}		
	});
	$("#box50").keyup(function(){
		st50 = $("#bx50").val();
		if(st50==st51 || st50==st52 || st50==st53 || st50==st54 || st50==st49 || st50==st46 || st50==st47 || st50==st48 || st50==st20 || st50==st23 || st50==st26 || st50==st74 || st50==st77 || st50==st80 || st50==st31 || st50==st32 || st50==st33 || st50==st40 || st50==st41 || st50==st42){
			$("#bx50").css("color", "red");
		}
		else{
			$("#bx50").css("color", "black");
		}
	});
	$("#box51").keyup(function(){
		 st51 = $("#bx51").val();
		if(st51==st52 || st51==st53 || st51==st54 || st51==st50 || st51==st46 || st51==st47 || st51==st48 || st51==st49 || st51==st21 || st51==st24 || st51==st27 || st51==st75 || st51==st78 || st51==st81 || st51==st31 || st51==st32 || st51==st33 || st51==st40 || st51==st41 || st51==st42){
			 $("#bx51").css("color", "red");
		}
		else{
			 $("#bx51").css("color", "black");	
		}
	});
	$("#box52").keyup(function(){
		 st52 = $("#bx52").val();
		if(st52==st51 || st52==st53 || st52==st54 || st52==st50 || st52==st46 || st52==st47 || st52==st48 || st52==st49 || st52==st19 || st52==st22 || st52==st25 || st52==st73 || st52==st76 || st52==st79 || st52==st34 || st52==st35 || st52==st36 || st52==st43 || st52==st44 || st52==st45){
			 $("#bx52").css("color", "red");
		}
		else{
			 $("#bx52").css("color", "black");	
		}		
	});	
	$("#box53").keyup(function(){
		 st53 = $("#bx53").val();
		if(st53==st52 || st53==st51 || st53==st54 || st53==st50 || st53==st46 || st53==st47 || st53==st48 || st53==st49 || st53==st20 || st53==st23 || st53==st26 || st53==st74 || st53==st77 || st53==st80 || st53==st34 || st53==st35 || st53==st36 || st53==st43 || st53==st44 || st53==st45){
			 $("#bx53").css("color", "red");
		}
		else{
			 $("#bx53").css("color", "black");	
		}		
	});
	$("#box54").keyup(function(){
		 st54 = $("#bx54").val();
		if(st54==st52 || st54==st53 || st54==st51 || st54==st50 || st54==st46 || st54==st47 || st54==st48 || st54==st49 || st54==st21 || st54==st24 || st54==st27 || st54==st75 || st54==st78 || st54==st81 || st54==st34 || st54==st35 || st54==st36 || st54==st43 || st54==st44 || st54==st45){
			 $("#bx54").css("color", "red");
		}
		else{
			 $("#bx54").css("color", "black");	
		}		
	});
	$("#box55").keyup(function(){
		 st55 = $("#bx55").val();
		if(st55==st62 || st55==st63 || st55==st60 || st55==st61 || st55==st56 || st55==st57 || st55==st58 || st55==st59 || st55==st1 || st55==st4 || st55==st7 || st55==st28 || st55==st31 || st55==st34 || st55==st64 || st55==st65 || st55==st66 || st55==st73 || st55==st74 || st55==st75){
			 $("#bx55").css("color", "red");
		}
		else{
			 $("#bx55").css("color", "black");	
		}		
	});
	$("#box56").keyup(function(){
		 st56 = $("#bx56").val();
		if(st56==st62 || st56==st63 || st56==st60 || st56==st55 || st56==st61 || st56==st57 || st56==st58 || st56==st59 || st56==st2 || st56==st5 || st56==st8 || st56==st29 || st56==st32 || st56==st35 || st56==st64 || st56==st65 || st56==st66 || st56==st73 || st56==st74 || st56==st75){
			 $("#bx56").css("color", "red");
		}
		else{
			 $("#bx56").css("color", "black");	
		}		
	});
	$("#box57").keyup(function(){
		 st57 = $("#bx57").val();
		if(st57==st62 || st57==st63 || st57==st60 || st57==st55 || st57==st56 || st57==st61 || st57==st58 || st57==st59 || st57==st3 || st57==st6 || st57==st9 || st57==st30 || st57==st33 || st57==st36 || st57==st64 || st57==st65 || st57==st66 || st57==st73 || st57==st74 || st57==st75){
			 $("#bx57").css("color", "red");
		}
		else{
			 $("#bx57").css("color", "black");	
		}		
	});
	$("#box58").keyup(function(){
		 st58 = $("#bx58").val();
		if(st58==st62 || st58==st63 || st58==st60 || st58==st55 || st58==st56 || st58==st57 || st58==st61 || st58==st59 || st58==st1 || st58==st4 || st58==st7 || st58==st28 || st58==st31 || st58==st34 || st58==st67 || st58==st68 || st58==st69 || st58==st76 || st58==st77 || st58==st78){
			 $("#bx58").css("color", "red");
		}
		else{
			 $("#bx58").css("color", "black");	
		}		
	});
	$("#box59").keyup(function(){
		 st59 = $("#bx59").val();
		if(st59==st62 || st59==st63 || st59==st60 || st59==st55 || st59==st56 || st59==st57 || st59==st58 || st59==st61  || st59==st2 || st59==st5 || st59==st8 || st59==st29 || st59==st32 || st59==st35 || st59==st67 || st59==st68 || st59==st69 || st59==st76 || st59==st77 || st59==st78){
			 $("#bx59").css("color", "red");
		}
		else{
			 $("#bx59").css("color", "black");	
		}		
	});
	$("#box60").keyup(function(){
		st60 = $("#bx60").val();
		if(st60==st61 || st60==st62 || st60==st63 || st60==st59 || st60==st55 || st60==st56 || st60==st57 || st60==st58 || st60==st3 || st60==st6 || st60==st9 || st60==st30 || st60==st33 || st60==st36 || st60==st67 || st60==st68 || st60==st69 || st60==st76 || st60==st77 || st60==st78){
			$("#bx60").css("color", "red");
		}
		else{
			$("#bx60").css("color", "black");
		}
	});
	$("#box61").keyup(function(){
		 st61 = $("#bx61").val();
		if(st61==st62 || st61==st63 || st61==st60 || st61==st55 || st61==st56 || st61==st57 || st61==st58 || st61==st59 || st61==st1 || st61==st4 || st61==st7 || st61==st28 || st61==st31 || st61==st34 || st61==st70 || st61==st71 || st61==st72 || st61==st79 || st61==st80 || st61==st81){
			 $("#bx61").css("color", "red");
		}
		else{
			 $("#bx61").css("color", "black");	
		}
	});
	$("#box62").keyup(function(){
		 st62 = $("#bx62").val();
		if(st62==st61 || st62==st63 || st62==st60 || st62==st55 || st62==st56 || st62==st57 || st62==st58 || st62==st59 || st62==st2 || st62==st5 || st62==st8 || st62==st29 || st62==st32 || st62==st35 || st62==st70 || st62==st71 || st62==st72 || st62==st79 || st62==st80 || st62==st81){
			 $("#bx62").css("color", "red");
		}
		else{
			 $("#bx62").css("color", "black");	
		}		
	});	
	$("#box63").keyup(function(){
		 st63 = $("#bx63").val();
		if(st63==st62 || st63==st61 || st63==st60 || st63==st55 || st63==st56 || st63==st57 || st63==st58 || st63==st59 || st63==st3 || st63==st6 || st63==st9 || st63==st30 || st63==st32 || st63==st36 || st63==st70 || st63==st71 || st63==st72 || st63==st79 || st63==st80 || st63==st81){
			 $("#bx63").css("color", "red"); 
		}
		else{
			 $("#bx63").css("color", "black");	
		}		
	});
	$("#box64").keyup(function(){
		 st64 = $("#bx64").val();
		if(st64==st72 || st64==st70 || st64==st71 || st64==st65 || st64==st66 || st64==st67 || st64==st68 || st64==st69 || st64==st10 || st64==st13 || st64==st16 || st64==st37 || st64==st40 || st64==st43 || st64==st55 || st64==st56 || st64==st57 || st64==st73 || st64==st74 || st64==st75){
			 $("#bx64").css("color", "red");
		}
		else{
			 $("#bx64").css("color", "black");	
		}		
	});
	$("#box65").keyup(function(){
		 st65 = $("#bx65").val();
		if(st65==st72 || st65==st70 || st65==st64 || st65==st71 || st65==st66 || st65==st67 || st65==st68 || st65==st69 || st65==st11 || st65==st14 || st65==st17 || st65==st38 || st65==st41 || st65==st44 || st65==st55 || st65==st56 || st65==st57 || st65==st73 || st65==st74 || st65==st75){
			 $("#bx65").css("color", "red");
		}
		else{
			 $("#bx65").css("color", "black");	
		}		
	});
	$("#box66").keyup(function(){
		 st66 = $("#bx66").val();
		if(st66==st72 || st66==st70 || st66==st64 || st66==st65 || st66==st71 || st66==st67 || st66==st68 || st66==st69 || st66==st12 || st66==st15 || st66==st18 || st66==st39 || st66==st42 || st66==st45 || st66==st55 || st66==st56 || st66==st57 || st66==st73 || st66==st74 || st66==st75){
			 $("#bx66").css("color", "red");
		}
		else{
			 $("#bx66").css("color", "black");	
		}		
	});
	$("#box67").keyup(function(){
		 st67 = $("#bx67").val();
		if(st67==st72 || st67==st70 || st67==st64 || st67==st65 || st67==st66 || st67==st71 || st67==st68 || st67==st69 || st67==st10 || st67==st13 || st67==st16 || st67==st37 || st67==st40 || st67==st43 || st67==st58 || st67==st59 || st67==st60 || st67==st76 || st67==st77 || st67==st78){
			 $("#bx67").css("color", "red");
		}
		else{
			 $("#bx67").css("color", "black");	
		}		
	});
	$("#box68").keyup(function(){
		 st68 = $("#bx68").val();
		if(st68==st72 || st68==st70 || st68==st64 || st68==st65 || st68==st66 || st68==st67 || st68==st71 || st68==st69 || st68==st11 || st68==st14 || st68==st17 || st68==st38 || st68==st41 || st68==st44 || st68==st58 || st68==st59 || st68==st60 || st68==st76 || st68==st77 || st68==st78){
			 $("#bx68").css("color", "red");
		}
		else{
			 $("#bx68").css("color", "black");	
		}		
	});
	$("#box69").keyup(function(){
		 st69 = $("#bx69").val();
		if(st69==st72 || st69==st71 || st69==st64 || st69==st65 || st69==st66 || st69==st67 || st69==st68 || st69==st70 || st69==st12 || st69==st15 || st69==st18 || st69==st39 || st69==st42 || st39==st45 || st69==st58 || st69==st59 || st69==st60 || st69==st76 || st69==st77 || st69==st78){
			 $("#bx69").css("color", "red");
		}
		else{
			 $("#bx69").css("color", "black");	
		}		
	});
	$("#box70").keyup(function(){
		st70 = $("#bx70").val();
		if(st70==st71 || st70==st72 || st70==st69 || st70==st64 || st70==st65 || st70==st66 || st70==st67 || st70==st68 || st70==st10 || st70==st13 || st70==st16 || st70==st37 || st70==st40 || st70==st43 || st70==st61 || st70==st62 || st70==st63 || st70==st79 || st70==st80 || st70==st81){
			$("#bx70").css("color", "red");
		}
		else{
			$("#bx70").css("color", "black");
		}
	});
	$("#box71").keyup(function(){
		 st71 = $("#bx71").val();
		if(st71==st72 || st71==st70 || st71==st64 || st71==st65 || st71==st66 || st71==st67 || st71==st68 || st71==st69 || st71==st11 || st71==st14 || st71==st17 || st71==st38 || st71==st41 || st71==st44 || st71==st61 || st71==st62 || st71==st63 || st71==st79 || st71==st80 || st71==st81){
			 $("#bx71").css("color", "red");
		}
		else{
			 $("#bx71").css("color", "black");	
		}
	});
	$("#box72").keyup(function(){
		 st72 = $("#bx72").val();
		if(st72==st71 || st72==st70 || st72==st64 || st72==st65 || st72==st66 || st72==st67 || st72==st68 || st72==st69 || st72==st12 || st72==st15 || st72==st18 || st72==st39 || st72==st42 || st72==st45 || st72==st61 || st72==st62 || st72==st63 || st72==st79 || st72==st80 || st72==st81){
			 $("#bx72").css("color", "red");
		}
		else{
			 $("#bx72").css("color", "black");	
		}		
	});	
	$("#box73").keyup(function(){
		 st73 = $("#bx73").val();
		if(st73==st80 || st73==st81 || st73==st74 || st73==st75 || st73==st76 || st73==st77 || st73==st78 || st73==st79 || st73==st19 || st73==st22 || st73==st25 || st73==st46 || st73==st49 || st73==st52 || st73==st55 || st73==st56 || st73==st57 || st73==st64 || st73==st65 || st73==st66){
			 $("#bx73").css("color", "red");
		}
		else{
			 $("#bx73").css("color", "black");	
		}		
	});
	$("#box74").keyup(function(){
		 st74 = $("#bx74").val();
		if(st74==st80 || st74==st73 || st74==st81 || st74==st75 || st74==st76 || st74==st77 || st74==st78 || st74==st79 || st74==st20 || st74==st23 || st74==st26 || st74==st47 || st74==st50 || st74==st53 || st74==st55 || st74==st56 || st74==st57 || st74==st64 || st74==st65 || st74==st66){
			 $("#bx74").css("color", "red");
		}
		else{
			 $("#bx74").css("color", "black");	
		}		
	});
	$("#box75").keyup(function(){
		 st75 = $("#bx75").val();
		if(st75==st80 || st75==st73 || st75==st74 || st75==st81 || st75==st76 || st75==st77 || st75==st78 || st75==st79 || st75==st21 || st75==st24 || st75==st27 || st75==st48 || st75==st51 || st75==st54 || st75==st55 || st75==st56 || st75==st57 || st75==st64 || st75==st65 || st75==st66){
			 $("#bx75").css("color", "red");
		}
		else{
			 $("#bx75").css("color", "black");	
		}		
	});
	$("#box76").keyup(function(){
		 st76 = $("#bx76").val();
		if(st76==st80 || st76==st73 || st76==st74 || st76==st75 || st76==st81 || st76==st77 || st76==st78 || st76==st79 || st76==st19 || st76==st22 || st76==st25 || st76==st46 || st76==st49 || st76==st52 || st76==st58 || st76==st59 || st76==st60 || st76==st67 || st76==st68 || st76==st69){
			 $("#bx76").css("color", "red");
		}
		else{
			 $("#bx76").css("color", "black");	
		}		
	});
	$("#box77").keyup(function(){
		 st77 = $("#bx77").val();
		if(st77==st80 || st77==st73 || st77==st74 || st77==st75 || st77==st76 || st77==st81 || st77==st78 || st77==st79 || st77==st20 || st77==st23 || st77==st26 || st77==st47 || st77==st50 || st77==st53 || st77==st58 || st77==st59 || st77==st60 || st77==st67 || st77==st68 || st77==st69){
			 $("#bx77").css("color", "red");
		}
		else{
			 $("#bx77").css("color", "black");	
		}		
	});
	$("#box78").keyup(function(){
		 st78 = $("#bx78").val();
		if(st78==st80 || st78==st73 || st78==st74 || st78==st75 || st78==st76 || st78==st77 || st78==st81 || st78==st79 || st78==st21 || st78==st24 || st78==st27 || st78==st48 || st78==st51 || st78==st54 || st78==st58 || st78==st59 || st78==st60 || st78==st67 || st78==st68 || st78==st69){
			 $("#bx78").css("color", "red");
		}
		else{
			 $("#bx78").css("color", "black");	
		}		
	});
	$("#box79").keyup(function(){
		 st79 = $("#bx79").val();
		if(st79==st80 || st79==st73 || st79==st74 || st79==st75 || st79==st76 || st79==st77 || st79==st78 || st79==st81 || st79==st19 || st79==st22 || st79==st25 || st79==st46 || st79==st49 || st79==st52 || st79==st61 || st79==st62 || st79==st63 || st79==st70 || st79==st71 || st79==st72){
			 $("#bx79").css("color", "red");
		}
		else{
			 $("#bx79").css("color", "black");	
		}		
	});
	$("#box80").keyup(function(){
		st80 = $("#bx80").val();
		if(st80==st73 || st80==st74 || st80==st75 || st80==st76 || st80==st77 || st80==st78 || st80==st79 || st80==st81 || st80==st20 || st80==st23 || st80==st26 || st80==st47 || st80==st50 || st80==st53 || st80==st61 || st80==st62 || st80==st63 || st80==st70 || st80==st71 || st80==st72){
			$("#bx80").css("color", "red");
		}
		else{
			$("#bx80").css("color", "black");
		}
	});		
	$("#box81").keyup(function(){
		st81 = $("#bx81").val();
		if(st81==st73 || st81==st74 || st81==st75 || st81==st76 || st81==st77 || st81==st78 || st81==st79 || st81==st80 || st81==st21 || st81==st24 || st81==st27 || st81==st48 || st81==st51 || st81==st54 || st81==st61 || st81==st62 || st81==st63 || st81==st70 || st81==st71 || st81==st72){
			$("#bx81").css("color", "red");
		}
		else{
			$("#bx81").css("color", "black");
		}
	});


});
