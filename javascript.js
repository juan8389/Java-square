var thebox =document.getElementById("box");
var btn1 =document.getElementById("button1");
var btn2 =document.getElementById("button2");
var btn3 =document.getElementById("button3");
var btn4 =document.getElementById("button4");
var btn5 =document.getElementById("button5");
var btn6 =document.getElementById("button6");

btn1.addEventListener("click",function(){thebox.style.
cssText="height:400px;width:400px;background-color:orange;margin:30px"});

btn2.addEventListener("click",function(){thebox.style.background="blue"});

btn3.addEventListener("click",function(){thebox.style.opacity="0.5"});

btn4.addEventListener("click",function(){thebox.style.
cssText="height:150px;width:150px;background-color:orange;margin:30px"});

btn5.addEventListener("click",function(){thebox.style.
cssText="height:50px;width:50px;background-color:orange;margin:30px"});

btn6.addEventListener("click",function(){thebox.style.
filter="drop-shadow(5mm 10mm 10mm rgb(0,0,0)"});
