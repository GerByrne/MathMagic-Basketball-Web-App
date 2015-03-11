count = 600;   
var time = null;
var timespanUpper, timespanLower;
var currentScore = 0;
var storedEntries = [];
var highScoreList;

function init(){ 
     timespanUpper = document.getElementById('timespanUpper');
     timespanLower = document.getElementById('timespanLower');
     countDownDisplay();
     scoresListDisplay();
}

function countDownDisplay() {
     timespanUpper.innerHTML = "Time:";
     timespanLower.innerHTML = ~~(count/10);
}
   
function startTimer(){ 		// start countdown
    if (time==null && count>0){     
     countdown();    
    }
}

function updateScore() {
    document.getElementById("inGameScore").innerHTML="Score: " + (currentScore+=10);
}

function countdown() {
    countDownDisplay();       
    if (count == 0) {
        if(currentScore<10) {
          alert('Time is up');
        } 
	    else { 
		 var username;      
		 var inputName=prompt("\t\tTime up\n\tYou Scored "+currentScore+"\nEnter Your Name Here \n\t","");				        
					        				
	       if (inputName!=null) {
			  username=inputName;		         
			  if(inputName==="null" || inputName===""){ 
			    username="No name"; 
			    location.reload(); 
			  } //end if(inputName==="null" || inputName==="")
			 
		     ////////////////////////////////////// High Scores/ARRAY Logic/////////////////////////////////////////////////////////  
		     storedEntries = JSON.parse(localStorage.getItem("localstoragekey"));						//retrieve the original array as string  //convert/parse the original array into a new array
			 if(storedEntries == null) {
			   storedEntries = [];	}		
			   storedEntries.push(currentScore+" "+username);   	   									    
			   storedEntries = storedEntries.sort(function(a,b){return parseInt(b)-parseInt(a)});
			   localStorage.setItem("localstoragekey", JSON.stringify(storedEntries));               		//store the original array plus new values pushed on and sorted as a string with the key id of localstoragekey
			   storedEntries.length=10;  	  
			 //////////////////////////////////////////////////
			}//end if (inputName!=null)
		 }//end else currentScore<10     
     location.reload(); 
    } //end if count == 0
    else {  
      count--;
      /* Diable all buttons during a game session except game reset button */
      document.getElementById("addEasy").onclick=false;
      document.getElementById("addNorm").onclick=false; 
      document.getElementById("addDiff").onclick=false;
      document.getElementById("clearButton").onclick=false;
      document.getElementById("addEasy").setAttribute("style", "background-color:#0000FF; background: -webkit-linear-gradient(#888, #0000FF); background: linear-gradient(#888, #0000FF); text-shadow: 0 -1px 0 #000;");
      document.getElementById("addNorm").setAttribute("style", "background-color:#0000FF; background: -webkit-linear-gradient(#888, #0000FF); background: linear-gradient(#888, #0000FF); text-shadow: 0 -1px 0 #000;");
      document.getElementById("addDiff").setAttribute("style", "background-color:#0000FF; background: -webkit-linear-gradient(#888, #0000FF); background: linear-gradient(#888, #0000FF); text-shadow: 0 -1px 0 #000;");
      document.getElementById("clearButton").setAttribute("style", "background-color:#0000FF; background: -webkit-linear-gradient(#888, #0000FF); background: linear-gradient(#888, #0000FF); text-shadow: 0 -1px 0 #000;");
      document.getElementById("countdownClock").style.backgroundImage= "url('images/basketball_game_dark.jpg')";
      time = setTimeout("countdown()", 100);
    }     
    if (count == 20) { 
    document.getElementById("bball1").draggable=false;
    document.getElementById("bball2").draggable=false; 
    document.getElementById("bball3").draggable=false; 
    document.getElementById("bball4").draggable=false;   	
    } 
}

function scoresListDisplay(){
        /***************************************************************************************/
		/*  get the value of JSON.parse and, if it is not null, 0, NaN, undefined, false or '' */
		/*  initialise storedEntries with it; otherwise, initialise storedEntries with [].     */
		/***************************************************************************************/
		storedEntries = JSON.parse(localStorage.getItem("localstoragekey")) || [];
		highScoreList = game.querySelector("section#game ol.high-scores"); 
	    for(var i = 0; i < 10; i++){
          var st = storedEntries[i];                                   
          var gamescorelist = document.createElement('li');  
          gamescorelist.innerHTML = (typeof(st) != "undefined" ? st : "--" );  // if (typeof(st) != "undefined") is true.. then gamescorelist.innerHTML is given the value of the a variable s , otherwise gamescorelist.innerHTML is given the value of ""
          highScoreList.appendChild(gamescorelist);   //append the child li (with the string values in the array) of the highScoreList orderd list
        }        
}

function clearLocalStorage() {
localStorage.clear();
location.reload();
}

function disableElements(){
      var eles = document.getElementsByTagName('td');
      for (var i=0; i < eles.length; i++)
      eles[i].onclick = null;
}
    
window.onload = init;


