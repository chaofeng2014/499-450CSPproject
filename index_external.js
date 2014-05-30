
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
    
var element_button1 = document.getElementById("button1");
element_button1.addEventListener("click", function(){myfunction1()}, false);
var element_1 = document.getElementById("1");
element_1.addEventListener("click", function(){myfunction2()}, false);
var element_button3 = document.getElementById("button3");
element_button3.addEventListener("click", function(){myfunction3()}, false);