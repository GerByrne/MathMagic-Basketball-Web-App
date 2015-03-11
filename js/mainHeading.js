function init2()
{
var canvas = document.getElementById("canvasLogo");
    if(canvas.getContext)
    {
     var ctx = canvas.getContext("2d");
     var ctx2 = canvas.getContext("2d");
	 /********************************************/
	 /* The following Vars set the position of   */
	 /* the object in relation to the the canvas */
	 /********************************************/
	 var x1 = canvas.width / 1.85;
     var y1 = canvas.height / 1.8;					
	 var x2 = canvas.width / 1.49; 
     var y2 = canvas.height / 1.0;

     ctx.shadowOffsetX = -5;
     ctx.shadowOffsetY = 5;
     ctx.shadowBlur = 10;
     ctx.shadowColor = "#ffff00"; 
     ctx.font = "italic bold 78px Comic Sans MS";    
	 ctx.textAlign = 'center';
     ctx.fillStyle = "#FF0";
     ctx.fillText( "MathMagic", x1, y1);        
  
     ctx2.shadowOffsetX = -4;
     ctx2.shadowOffsetY = 4;
     ctx2.shadowBlur = 10;
	 ctx2.shadowColor = "#FF99CC"; 
     ctx2.font = " italic 60px Comic Sans MS";     
     ctx2.fillStyle = "#F30"; 
     ctx2.rotate(-Math.PI/55);       
     ctx2.fillText("Basketball",x2, y2);        
     ctx2.lineWidth=0.8;
     ctx2.strokeText("Basketball",x2, y2);
    }    
    
}

window.onload=function() {
    init();
    init2(); 
    init3(); 
    init4();  
}

