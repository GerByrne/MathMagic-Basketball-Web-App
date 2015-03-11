var num1=0, num2=0, swapNum=0, result=0, level = 0; randomBall=0;

function ballRandomizerFunction() {
	// Can use Math.floor to round off to an int or parseInt to convert to int. 
	// NOTE: double tilde(~~) is shorthand for Math.floor and is used throughout this code.
    randomBall = ~~((Math.random()*10000)%4+1);  //randomBall will be a random num between 1 and 4			   	
}

/*********************************** Addition Functions *************************************************************/
function addEasy(){
    num1 = ~~((Math.random()*10)+1); 
    num2 = ~~((Math.random()*10)+1);
    result=num1+num2;
    document.getElementById("question_output").innerHTML= num1 + " + " + num2 + " = ?";
    level = 1;
    } 

function addNorm(){
    num1 = ~~((Math.random()*10)+1); 
    num2 = ~~((Math.random()*10)+1);
    num3 = ~~((Math.random()*10)+1);
    result=num1+num2+num3; 
    document.getElementById("question_output").innerHTML= num1 + " + " + num2 + " + " + num3 + " = ?";
    level = 2;
    } 
  
function addDiff(){
    num1 = ~~((Math.random()*5)+2); 
    num2 = ~~((Math.random()*5)+2);
    result=(Math.pow(num1,2))+(Math.pow(num2,2)); 
    document.getElementById("question_output").innerHTML= num1 + "&sup2; + " + num2 + "&sup2; = ?";
    level = 3;
    } 

function additionFunction() {
    ballRandomizerFunction();
    document.getElementById("instruction").innerHTML="";  //remove instruction 
    document.getElementById("bball1").classList.add('hover-shadow'); //these classes are added after the game begins. the hover shadow was appearing constantly. clasList is a HTML5 API          
    document.getElementById("bball2").classList.add('hover-shadow');     
    document.getElementById("bball3").classList.add('hover-shadow');
    document.getElementById("bball4").classList.add('hover-shadow');   
    document.getElementById("question_output").setAttribute("style", "background-image:url('images/blackboard.jpg');");    
    document.getElementById("timespanUpper").setAttribute("style", "text-shadow:0 0 10px #ffff00, 0 0 20px #00d2ff, 0 0 30px #00d2ff, 0 0 40px #00d2ff, 0 0 50px #00d2ff, 0 0 60px #00d2ff, 0 0 70px #00d2ff;" );  
    document.getElementById("timespanLower").setAttribute("style", "text-shadow:0 0 10px #ffff00, 0 0 20px #00d2ff, 0 0 30px #00d2ff, 0 0 40px #00d2ff, 0 0 50px #00d2ff, 0 0 60px #00d2ff, 0 0 70px #00d2ff;" );     	
    document.getElementById("bball1").style.backgroundImage= "url('images/basketball.png')";
    document.getElementById("bball2").style.backgroundImage= "url('images/basketballGreen.png')";
    document.getElementById("bball3").style.backgroundImage= "url('images/basketballRed.png')";
    document.getElementById("bball4").style.backgroundImage= "url('images/basketballBlue.gif')";
	
    if(randomBall == 1) 
    {
        document.getElementById("bball1").innerHTML=result; 
        document.getElementById("bball2").innerHTML=result+2;
        document.getElementById("bball3").innerHTML=result+3;
        document.getElementById("bball4").innerHTML=result+5;       
    }
    else if(randomBall == 2) 
    {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result;
        document.getElementById("bball3").innerHTML=result+3;
        document.getElementById("bball4").innerHTML=result+5;
    }
    else if(randomBall == 3) 
    {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+3;
        document.getElementById("bball3").innerHTML=result;
        document.getElementById("bball4").innerHTML=result+5;
    }
    else 
    {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+3;
        document.getElementById("bball3").innerHTML=result+5;
        document.getElementById("bball4").innerHTML=result;
    }
}// end function

/*********************************** Subtraction Functions **********************************************************/
function subEasy(){
    num1 = ~~((Math.random()*10)+1);
    num2 = ~~((Math.random()*10)+1);
        
    if (num2 === num1) {
        num2 += 3;    
    }					

    if (num1 < num2) {
		swapNum = num1;
		num1 = num2;
		num2 = swapNum;
	}
    result=num1-num2;	
    document.getElementById("question_output").innerHTML= num1 + " - " + num2 + " = ?";
    level = 1;
 } 

function subNorm(){
    num1 = ~~((Math.random()*10)+1); 
    num2 = ~~((Math.random()*10)+1);
    num3 = ~~((Math.random()*10)+1);
    
    if (num2 === num1) {
        num2 += 3;    
    }	
    
    if (num1 < num2) {
		swapNum = num1;
		num1 = num2;
		num2 = swapNum;
	}
    var one_minus_two = num1-num2;
    
    result= one_minus_two + num3;	
    document.getElementById("question_output").innerHTML= "(" + num1 + " - " + num2 + ") + " + num3 + " = ?";
    level = 2;
}

function subDiff(){
    num1 = ~~((Math.random()*10)+1); 
    num2 = ~~((Math.random()*10)+1);
    num3 = ~~((Math.random()*10)+1);
    
    if (num2 === num1) {
        num2 += 3;            //to prevent an answer of zero
    }	
    
    if (num1 < num2) {
		swapNum = num1;
		num1 = num2;
		num2 = swapNum;
	}
    var numone_minus_numtwo = num1-num2;
    
    result= numone_minus_numtwo * num3;	
    document.getElementById("question_output").innerHTML= "(" + num1 + " - " + num2 + ") &#215; " + num3 + " = ?";
    level = 3;
}

function subtractionFunction()
   {
    ballRandomizerFunction();
    if(randomBall == 1) 
        {
        document.getElementById("bball1").innerHTML=result;
        document.getElementById("bball2").innerHTML=result+2; 
        document.getElementById("bball3").innerHTML=result+3;
        document.getElementById("bball4").innerHTML=result+5;
        }
    else if(randomBall == 2) 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result;
        document.getElementById("bball3").innerHTML=result+3;
        document.getElementById("bball4").innerHTML=result+5;
        }
    else if(randomBall == 3) 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+3;
        document.getElementById("bball3").innerHTML=result;
        document.getElementById("bball4").innerHTML=result+5;
        }
    else 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+3;
        document.getElementById("bball3").innerHTML=result+5;
        document.getElementById("bball4").innerHTML=result;
        }
}// end function

/*********************************** Multiplication Function *******************************************************/
function multiEasy(){
    num1 = ~~((Math.random()*10)+1);
    num2 = ~~((Math.random()*10)+1);
    result=num1*num2;
    document.getElementById("question_output").innerHTML= num1 + " &#215; " + num2 + " = ?";
    level = 1;
    } 

function multiNorm(){
    num1 = ~~((Math.random()*3)+1); 
    num2 = ~~((Math.random()*4)+1);
    num3 = ~~((Math.random()*10)+1);
    result=num1+(num2*num3); 
    document.getElementById("question_output").innerHTML= num1 + " + (" + num2 + " &#215; " + num3 + ") = ?";
    level = 2;
    } 
    
function multiDiff(){	    
	num1 = ~~((Math.random()*3)+2); 
    num2 = ~~((Math.random()*5)+2);
    result=(Math.pow(num1,2))*num2; 
    document.getElementById("question_output").innerHTML= num1 + "&sup2; &#215; " + num2 + " = ?";	
    level = 3;    
    } 

function multiplicationFunction() {
    ballRandomizerFunction();	

    if(randomBall == 1) 
        {
        document.getElementById("bball1").innerHTML=result;
        document.getElementById("bball2").innerHTML=result+3;
        document.getElementById("bball3").innerHTML=result+1;
        document.getElementById("bball4").innerHTML=result+6;
        }
    else if(randomBall == 2) 
        {
        document.getElementById("bball1").innerHTML=result+3;
        document.getElementById("bball2").innerHTML=result;
        document.getElementById("bball3").innerHTML=result+1;
        document.getElementById("bball4").innerHTML=result+6;
        }
    else if(randomBall == 3) 
        {
        document.getElementById("bball1").innerHTML=result+3;
        document.getElementById("bball2").innerHTML=result+1;
        document.getElementById("bball3").innerHTML=result;
        document.getElementById("bball4").innerHTML=result+6;
        }
    else 
        {
        document.getElementById("bball1").innerHTML=result+3;
        document.getElementById("bball2").innerHTML=result+1;
        document.getElementById("bball3").innerHTML=result+6;
        document.getElementById("bball4").innerHTML=result;
        }
   }// end function

/*********************************** Division Function ************************************************************/
function divEasy(){	 
    num1 = ~~((Math.random()*30)+2); 
    num2 = ~~((Math.random()*14)+2);
	
    if (num2 === num1) {
        num2 += 3;   
    }
	
	if(num1<num2) {
	    swapNum=num1;
	    num1=num2;
	    num2=swapNum;
	    }
	
	if(num1!=num2) {
	    num1=num1+10;
	    }
	
    if (num1 % num2 !== 0) {
        remainder=num1%num2;
        num1 -= remainder;    
        }
    result=num1/num2;
    document.getElementById("question_output").innerHTML= num1 + " &#247; " + num2 + " = ?";      
    level = 1;
    }    

function divNorm(){	 
    num1 = ~~((Math.random()*30)+2); 
    num2 = ~~((Math.random()*14)+2);
    num3 = ~~((Math.random()*10)+1);
	
    if (num2 === num1) {
        num2 += 3;   
    }
	
	if(num1<num2) {
	    swapNum=num1;
	    num1=num2;
	    num2=swapNum;
	    }
	
	if(num1!=num2) {
	    num1=num1+10;
	    }
	
    if (num1 % num2 !== 0) {
        remainder=num1%num2;
        num1 -= remainder;    
        }  	 
    result=(num1/num2)+num3;
    document.getElementById("question_output").innerHTML= "(" + num1 + " &#247; " + num2 + ") +" + num3 + " = ?";       
    level = 2;
    }
    
function divDiff(){	 
    num1 = ~~((Math.random()*30)+2); 
    num2 = ~~((Math.random()*14)+2);
    num3 = ~~((Math.random()*10)+1);	
    if (num2 === num1) {
        num2 += 3;    
    }	
	if(num1<num2) {
	    swapNum=num1;
	    num1=num2;
	    num2=swapNum;
	}	
	if(num1!=num2) {
	    num1=num1+10;
	}	
    if (num1 % num2 !== 0) {
        remainder=num1%num2;
        num1 -= remainder;   
    }   	
    result=(num1/num2)*num3;
    document.getElementById("question_output").innerHTML= "(" + num1 + " &#247; " + num2 + ") &#215; " + num3 + " = ?";       
    level = 3;
    }  

function divisionFunction() {
    var remainder; 
    ballRandomizerFunction();
    
    if(randomBall == 1) 
        {
        document.getElementById("bball1").innerHTML=result;
        document.getElementById("bball2").innerHTML=result+2;
        document.getElementById("bball3").innerHTML=result+4;
        document.getElementById("bball4").innerHTML=result+1;
        }
    else if(randomBall == 2) 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result;
        document.getElementById("bball3").innerHTML=result+4;
        document.getElementById("bball4").innerHTML=result+1;
        }
    else if(randomBall == 3) 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+4;
        document.getElementById("bball3").innerHTML=result;
        document.getElementById("bball4").innerHTML=result+1;
        }
    else 
        {
        document.getElementById("bball1").innerHTML=result+2;
        document.getElementById("bball2").innerHTML=result+4;
        document.getElementById("bball3").innerHTML=result+1;
        document.getElementById("bball4").innerHTML=result;
        }
   }// end function

/*******************************************************************************************************************/
function resetFunction() {
    location.reload();			//for reset button     
}

