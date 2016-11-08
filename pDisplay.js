function pScreen(x, y, width, height){
  this.state = 1;
  this.xpos = x;
  this.ypos = y;
  this.w = width;
  this.h = height;
  this.msgEnd = 0;
}

function separator(x ,y, x2, y2){
  this.xpos = x;
  this.ypos = y;
  this.x2pos = x2;
  this.y2pos = y2;
}