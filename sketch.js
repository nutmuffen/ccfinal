var testMsg = "This is a test."

var pTime = 0;

var display = ".";
var ct = 0;

var phone;

var dialogue;
var dNo = 13;
var lineTrigger = 1;
var choice = 0;
var clearSwitch = 0;
var asking = 0;
var canAsk;
var inButton;
var inNo;


function setup() {
  /*
  createCanvas(1280,720);*/
  createCanvas(windowWidth, windowHeight);
  phone = new pScreen(0,0,windowWidth,windowHeight);
  dialogue = loadStrings("lines.txt");
 
}

function draw() {
  //console.log(windowWidth);
  var mTime = int(millis());
  //console.log(str(dialogue[4]).length);
  var dialogueState = " You are now on line "+dNo+". ";
  
  testMsg = str(dialogue[dNo]);
  
  background(75);
  
  fill(125);
  noStroke();
  
  
  //phone(Object)
  rect(phone.xpos,phone.ypos,phone.w,phone.h);
  fill(255);
  
  
  
  textSize(56);
  
  
  
    // for (var i = 0; i<testMsg.length; i++){
    //     display = display + testMsg[i];
    //     pTime = mTime;
    //     console.log(testMsg[i]);
    // }
  if(choice == 1){
    testMsg = str(dialogue[dNo]) + dialogueState;
  }
  if(choice == 2){
    testMsg = str(dialogue[dNo+2])+ dialogueState;
    // if (clearSwitch = 1){
    //   display = ".";
    //   ct = 0;
    //   clearSwitch = 0;
    // }
    // display = "shit";
  }
  
  if(lineTrigger == 1){
    if(ct < testMsg.length){
      if(mTime > 1000 && mTime - pTime > 20){
      
      display = display+testMsg[ct];
      pTime = mTime;
      ct++;
      }
      // if(ct >= testMsg.length){
      //   phone.msgEnd = 1;
      // }
    }
    else{ //reaches end of lines
      // if(dNo<dialogue.length-1){
      //   //dNo += 1;
      //   //testMsg = str(dialogue[dNo]);
      //   //ct = 0;
      // }
      
      //ask another question
      if(choice == 1){
        if(dNo<=dialogue.length){
        dNo += 2;
        choice = 0;
        ct = 0;
        }
      }
      if(choice == 2){
        if(dNo<=dialogue.length){
        dNo += 3;
        choice = 0;
        ct = 0;
        }
      }
      asking = 1;
    }
    
    if(phone.state == 1){
      text(display, phone.xpos + 25,phone.ypos + 25,phone.w-25,phone.h-25);
      // if(phone.msgEnd == 1){
      //   //message separator
      //   var sep1 = new separator(200,200,600,600);
      //   stroke(255);
        
      //   var newx2 = 0;
      //   var newy2 = 0;
      //   if(newx2 < sep1.x2pos && newy2 < sep1.y2pos){
      //     if(mTime-pTime > 35){
      //     newx2 += 50;
      //     newy2 += 50;
      //     }
      //   line(sep1.xpos, sep1.ypos, newx2, newy2);
      //   }
        
  
      // }
    }
  }
  
  
  
  
  if(asking == 0){
    canAsk = "No";
  }
  else{
    canAsk = "Yes";
  }
  
  //BUTTONS
  fill(0,255,0);
  ellipse(100,400,100);
  fill(255,0,0);
  ellipse(300,400,100);
  fill(255);
  
  var distance = dist(mouseX, mouseY, 100, 400);
  var distanceNo = dist(mouseX, mouseY, 300,400);
  
  // if the distance is less than the circle's radius
  if(distance < 100)
  {
    inButton = true;
  } else {
    inButton = false;
  }
  
  if(distanceNo < 100){
    inNo = true;
  }
  else{
    inNo = false;
  }
  
  // text(mTime +", "+pTime, 200,200);
  text("Can Answer: "+canAsk, 50,windowHeight-50);
  //console.log(testMsg[ct]);
  
  
  
  
}

function keyTyped(){
    // if(key === 'r'){
    //   lineTrigger = 1;
    // }
    
    if(asking == 1){
      if(key === 'y'){
        choice = 1;
        display = "!";
        ct = 0;
        asking = 0;
        dNo+=1;
      }
      if(key === 'n'){
        choice = 2;
        display = "!";
        ct = 0;
        //clearSwitch = 1;
        asking = 0;
      }
    }
    
    
}

function mouseReleased(){
  if(inButton == true)
  {
        choice = 1;
        display = "!";
        ct = 0;
        asking = 0;
        dNo+=1;
  }
  
  if(inNo == true){
    choice = 2;
        display = "!";
        ct = 0;
        //clearSwitch = 1;
        asking = 0;
  }
}