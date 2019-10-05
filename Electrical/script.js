var c=0,S1=0,S2=0;
	function ClickS1On(){ S1=1;document.getElementById("status1").innerHTML = "S1:on"; update(); }	
	function ClickS2On(){ S2=1; document.getElementById("status2").innerHTML = "S2:on"; update(); }
	function ClickS1Off(){ S1=0; document.getElementById("status1").innerHTML = "S1:off"; update();}	
	function ClickS2Off(){ S2=0; document.getElementById("status2").innerHTML = "S2:off"; update();}
	function update()
	{
	if ((S1==1)&&(S2==1)) {c=1;}
	else if ((S1==1)&&(S2==0)) {c=2;}
	else if ((S1==0)&&(S2==1)) {c=3;}
	else {c=4;}
	if (c==1)
	     {document.getElementById("Bulb").src="Case1.gif";
		 
		 
		 }
		 
	else if (c==2)
	     {document.getElementById("Bulb").src="Case2.gif";
		 }
	else if (c==3)
	     {document.getElementById("Bulb").src="Case3.gif";
		 
		 }
    else if (c==4)
	     {document.getElementById("Bulb").src="Case4.gif";
		 
		 }
    }