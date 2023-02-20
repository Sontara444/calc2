
  let toggleBtn = document.querySelector('toggleBtn');
  let body = document.querySelector('body');

  let outputScreen = document.getElementById("output-screen")
  function display(num){
    outputScreen.value += num;
  }
  function calculate(){
    try{
      outputScreen.value = eval(outputScreen.value);
  
    }catch(err){
      alert("invalid")
    }
   
  }
  function Clear(){
      outputScreen.value = "";
    }
    function del(){
      outputScreen.value = outputScreen.value.slice(0,-1);
    }

 toggleBtn.onclick = function(){
  body.classList.toggle("dark");
 }
