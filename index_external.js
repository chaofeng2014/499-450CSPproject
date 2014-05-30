
    function myfunction1()
        {
            alert("button1");
        }
    
    function myfunction2()
        {
            alert("button2");
        }
    
    function myfunction3()
        {
            alert("button3");
        }
    
var element_0 = document.getElementById(0);
element_0.addEventListener("click", function(){myfunction1()}, false);
var element_1 = document.getElementById(1);
element_1.addEventListener("click", function(){myfunction2()}, false);
var element_2 = document.getElementById(2);
element_2.addEventListener("click", function(){myfunction3()}, false);