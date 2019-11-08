function Cell(xPosition, yPosition, widthOfCell) {
  this.value = -1;
  this.width = widthOfCell;
  this.xPos = xPosition;
  this.yPos = yPosition;
  this.active = true;
}

  Cell.prototype.show = function() {
      stroke(0);
      noFill();
      rect(this.xPos, this.yPos, this.width, this.width);

      if(this.value == 1)
      {
        fill(color(0, 0, 255));
        rect((this.xPos+this.width/4)-10, (this.yPos+this.width/4)-10, 120, 120);
        //textSize(25);
        //text('X', this.xPos+this.width/2, this.yPos+this.with/2);
      }

      else if(this.value == 0)
      {
        fill(color(255, 0, 0));
        ellipse((this.xPos+this.width/2), (this.yPos+this.width/2), 120);
        //textSize(25);
        //text('O', (this.xPos+this.width/2), (this.yPos+this.with/2));
      }

      else if(this.value == -1)
      {
        stroke(0);
        noFill();
        rect(this.xPos, this.yPos, this.width, this.width);
      }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.xPos && x < this.xPos + this.width && y > this.yPos && y < this.yPos + this.width);
}

Cell.prototype.setValue = function(someValue)
{
  this.value = someValue;
}

Cell.prototype.getValue = function()
{
  return this.value;
}

Cell.prototype.isActive = function()
{
  return this.active;
}

Cell.prototype.setActive = function(tof)
{
  this.active = tof;
}
