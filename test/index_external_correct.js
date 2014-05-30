
    	function myfunction()
    	{
    		alert("here");
    	}

var element = document.getElementById("1");
//element.addEventListener("click",function(){ alert("here in js"); }, false); 
element.addEventListener("click",function(){ myfunction(); }, false); 