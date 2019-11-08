function Cell(xPosition, yPosition, widthOfCell) {
  this.value = -1;
  this.width = widthOfCell;
  this.xPos = xPosition;
  this.yPos = yPosition;
  this.active = true;
}

//draws a cell object
  Cell.prototype.show = function() {
      stroke(0);
      noFill();
      rect(this.xPos, this.yPos, this.width, this.width);

      //if player 1 turn, draw a bkue square
      if(this.value == 1)
      {
        fill(color(0, 0, 255));
        rect((this.xPos+this.width/4)-10, (this.yPos+this.width/4)-10, 120, 120);
      }

      //if player 2 turn. draw a red circle
      else if(this.value == 0)
      {
        fill(color(255, 0, 0));
        ellipse((this.xPos+this.width/2), (this.yPos+this.width/2), 120);
      }

      //else
      else if(this.value == -1)
      {
        stroke(0);
        noFill();
        rect(this.xPos, this.yPos, this.width, this.width);
      }
}

// used for mousepressed to keep track of cursor position
Cell.prototype.contains = function(x, y) {
  return (x > this.xPos && x < this.xPos + this.width && y > this.yPos && y < this.yPos + this.width);
}

//sets value of a cell
Cell.prototype.setValue = function(someValue)
{
  this.value = someValue;
}

//gets value of a cell
Cell.prototype.getValue = function()
{
  return this.value;
}

//returns whether a cell is active and clickable
Cell.prototype.isActive = function()
{
  return this.active;
}

//sets the activity of a cell to true or false
Cell.prototype.setActive = function(tof)
{
  this.active = tof;
}
