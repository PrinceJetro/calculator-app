import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState("");

    
  const handleDivClick = (event) => {
      let divide = document.getElementById("divide");
      let plus = document.getElementById("plus");
      let minus = document.getElementById("minus");
      let multiply = document.getElementById("multiply");
      const divElement = event.target;
      const numberInDiv = divElement.textContent;


      if (numberInDiv.includes("+")){
        divide.innerHTML=""; 
        divide.style.backgroundColor = "red";
        multiply.innerHTML=""; 
        multiply.style.backgroundColor = "red";
        minus.innerHTML=""; 
        minus.style.backgroundColor = "red";
      }
      
      else if(numberInDiv.includes("-")){
        divide.innerHTML=""; 
        divide.style.backgroundColor = "red";
        multiply.innerHTML=""; 
        multiply.style.backgroundColor = "red";
        plus.innerHTML=""; 
        plus.style.backgroundColor = "red";
      }
      
      else if(numberInDiv.includes("/")){
        minus.innerHTML=""; 
        minus.style.backgroundColor = "red";
        multiply.innerHTML=""; 
        multiply.style.backgroundColor = "red";
        plus.innerHTML=""; 
        plus.style.backgroundColor = "red";
      }
      
      else if(numberInDiv.includes("X")){
        divide.innerHTML=""; 
        divide.style.backgroundColor = "red";
        minus.innerHTML=""; 
        minus.style.backgroundColor = "red";
        plus.innerHTML=""; 
        plus.style.backgroundColor = "red";
      }
      
      setCount((prevInputValue) => prevInputValue + numberInDiv);
      return count;
  }

  function equals(){
   let  text=count

   if (typeof text === 'string'){
    if (text.includes("+")) {
      console.log("The string contains '+'");
      const myArray = text.split("+");
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
      sum += parseFloat(myArray[i]);
    }
    setCount(sum)
    } 
    
    else if(text.includes("X")) {
      console.log("The string contains 'X'");
      const myArray = text.split("X");
    let sum = 1;
    for (let i = 0; i < myArray.length; i++) {
      sum *= parseFloat(myArray[i]);
    }
    setCount(sum)
    }

    else if (text.includes("-")) {
      const myArray = text.split("-");
      let result = "0";

      if (isNaN(parseInt(myArray[0]))){
        myArray[0] = 0
        console.log(myArray)
      }
    
      for (let i = 0; i < myArray.length; i++) {
        if (i === 0) {
          console.log("if")
          result = parseFloat(myArray[i]);
        } 
        else{
          if (!isNaN(parseFloat(myArray[0]))){
          result -= parseFloat(myArray[i]);
          console.log(myArray)
          console.log(`first else`)
          setCount(result);
        }
      }
        
      }
    
    }
    

    else if (text.includes("/")) {
      console.log("The string contains '/'");
      const myArray = text.split("/");
      let result = 0;
    
      if (myArray.length > 0) {
        result = parseFloat(myArray[0]);
    
        for (let i = 1; i < myArray.length; i++) {
          result /= parseFloat(myArray[i]);
        }
      }
    
      setCount(result);
    }
   }



    let divide = document.getElementById("divide").innerHTML="/";
    let plus = document.getElementById("plus").innerHTML="+";
    let minus = document.getElementById("minus").innerHTML="-";
    let multiply = document.getElementById("multiply").innerHTML="X";
     theme()
  }

  function reset(){
    setCount("")
  }


  function del() {

    if (typeof count === 'string') {
      // It's a string, so you can safely use substring
      if (count.length > 0) {
          // Remove the last character
          return setCount(count.substring(0, count.length - 1));
      } else {
          // Handle the case where count is an empty string
          setCount("");
      }
  } else {
      // Handle the case where count is not a string
      setCount("");
  }
  
    


      if (count.length === 0) {
        return count; // Return the original string if it's empty
      }
    
      // Use concatenation to remove the last character
      
    }

// Get a reference to the checkbox element
function theme(){
  var checkbox = document.getElementById("checkbox");

// Check if it's checked
if (checkbox.checked) {
    console.log("Checkbox is checked");
    document.getElementById("app").style.backgroundColor="hsl(268, 75%, 9%)"
    document.getElementById("buttons_div").style.backgroundColor="hsl(268, 71%, 12%)"
  
    document.getElementById("screen").style.backgroundColor="hsl(281, 89%, 26%)"
    document.getElementById("screen").style.color="hsl(52, 100%, 62%)"

    const button = document.querySelectorAll(".button");
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "hsl(281, 89%, 26%)";
      button[i].style.color = "hsl(52, 100%, 62%)";
    }
    document.getElementById("equals").style.backgroundColor="hsl(176, 100%, 44%)"
    document.getElementById("equals").style.color="hsl(198, 20%, 13%)"

    document.getElementById("reset").style.backgroundColor="hsl(268, 47%, 21%)"
    document.getElementById("reset").style.color="hsl(0, 0%, 100%)"


} else {
    console.log("Checkbox is not checked");
    document.getElementById("app").style.backgroundColor=" #282c34"
    document.getElementById("buttons_div").style.backgroundColor="#353e4d"
  
    document.getElementById("screen").style.backgroundColor="#282c34"
    document.getElementById("screen").style.color="#f1f1f1"

    const button = document.querySelectorAll(".button");
    for (let i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "#f1f1f1";
      button[i].style.color = "black";
    }
    document.getElementById("equals").style.backgroundColor="rgb(224, 55, 55)"
    document.getElementById("equals").style.color="#f1f1f1"

    document.getElementById("reset").style.backgroundColor="#282c34"
    document.getElementById("reset").style.color="#f1f1f1"

}

}


  return (
    <div className="App" id="app">
      <div className='buttons_div' id='buttons_div'>
      <label className="switch float-right d-relative">
  <input type="checkbox" id='checkbox' onChange={theme}/>
  <span className="slider round"></span>
</label>
        {/* top */}
      
      <div className='top mb-1'>
        <h1>calc</h1>
      </div>


      {/* screen */}
      <div className='screen mb-3' id="screen">
        <h1>{count}</h1>
      </div>
      
      
        {/* buttons */}
        <div className='flex-container'>
        <div className='button' onClick={handleDivClick} id='seven'>7</div>
        <div className='button' onClick={handleDivClick} id='eight'>8</div>
        <div className='button' onClick={handleDivClick} id='nine'>9</div>
        <div className='button' id='delete' onClick={del}>DEL</div>
        </div>
        <div className='flex-container'>
        <div className='button' onClick={handleDivClick} id='four'>4</div>
        <div className='button' onClick={handleDivClick} id='five'>5</div>
        <div className='button' onClick={handleDivClick} id='six'>6</div>
        <div className='button' onClick={handleDivClick} id='plus'>+</div>
        </div>
        <div className='flex-container'>
        <div className='button' onClick={handleDivClick} id='one'>1</div>
        <div className='button' onClick={handleDivClick} id='two'>2</div>
        <div className='button' onClick={handleDivClick} id='three'>3</div>
        <div className='button' onClick={handleDivClick} id='minus'>-</div>
        </div>
        <div className='flex-container'>
        <div className='button' onClick={handleDivClick} id='point'>.</div>
        <div className='button' onClick={handleDivClick} id='zero'>0</div>
        <div className='button' onClick={handleDivClick} id='divide'>/</div>
        <div className='button' onClick={handleDivClick} id='multiply'> X </div>
        </div>
        <div className='flex-container'>
        <div className='button' id='reset' onClick={reset}>RESET</div>
        <div className='button' id='equals' onClick={equals}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
