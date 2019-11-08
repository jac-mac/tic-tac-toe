let CELLWIDTH = 300;
let ROWS;
let COLS;
let xTurn = true;
let yTurn = false;
var grid;
let winner = false;

make2DArray = function(rows, cols)
{
  arr = new Array(rows);
  for(let i = 0; i < cols; i++)
  {
    arr[i] = new Array(cols);
  }

  return arr;
}

function setup() {
  createCanvas(900, 900);
  background(255);

  ROWS = floor(width / CELLWIDTH);
  COLS = floor(height / CELLWIDTH);

grid = make2DArray(ROWS, COLS);
  for(let i = 0; i < ROWS; i++)
  {
    for(let j = 0; j < COLS; j++)
    {
      grid[i][j] = new Cell(i*CELLWIDTH, j*CELLWIDTH, CELLWIDTH);
    }
  }
}


checkCol = function()
{
    if(grid[0][0].getValue() == 1 && grid[0][1].getValue() == 1 && grid[0][2].getValue() == 1)
      return true;

    else if(grid[0][0].getValue() == 0 && grid[0][1].getValue() == 0 && grid[0][2].getValue() == 0)
      return true;

    else if(grid[1][0].getValue() == 1 && grid[1][1].getValue() == 1 && grid[1][2].getValue() == 1)
      return true;

    else if(grid[1][0].getValue() == 0 && grid[1][1].getValue() == 0 && grid[1][2].getValue() == 0)
      return true;

    else if(grid[2][0].getValue() == 1 && grid[2][1].getValue() == 1 && grid[2][2].getValue() == 1)
      return true;

    else if(grid[2][0].getValue() == 0 && grid[2][1].getValue() == 0 && grid[2][2].getValue() == 0)
      return true;

    return false;
}

checkRow = function()
{
  if(grid[0][0].getValue() == 1 && grid[1][0].getValue() == 1 && grid[2][0].getValue() == 1)
    return true;

  else if(grid[0][0].getValue() == 0 && grid[1][0].getValue() == 0 && grid[2][0].getValue() == 0)
    return true;

  if(grid[0][1].getValue() == 1 && grid[1][1].getValue() == 1 && grid[2][1].getValue() == 1)
    return true;

  else if(grid[0][1].getValue() == 0 && grid[1][1].getValue() == 0 && grid[2][1].getValue() == 0)
    return true;

  if(grid[0][2].getValue() == 1 && grid[1][2].getValue() == 1 && grid[2][2].getValue() == 1)
    return true;

  else if(grid[0][2].getValue() == 0 && grid[1][2].getValue() == 0 && grid[2][2].getValue() == 0)
    return true;

    return false;

}

checkDiagonal = function()
{
  if(grid[0][0].getValue() == 1 && grid[1][1].getValue() == 1 && grid[2][2].getValue() == 1)
    return true;

  else if(grid[0][0].getValue() == 0 && grid[1][1].getValue() == 0 && grid[2][2].getValue() == 0)
    return true;

  if(grid[2][0].getValue() == 1 && grid[1][1].getValue() == 1 && grid[0][2].getValue() == 1)
    return true;

  else if(grid[2][0].getValue() == 0 && grid[1][1].getValue() == 0 && grid[0][2].getValue() == 0)
    return true;
}

checkWin = function()
{
  if(checkRow() || checkCol() || checkDiagonal())
    return true;

    return false;
}

function mousePressed()
{
  for(var i = 0; i < ROWS; i++)
  {
    for(var j = 0; j < COLS; j++)
    {
      if(grid[i][j].contains(mouseX, mouseY) && grid[i][j].isActive())
      {
        if(xTurn)
        {
          yTurn = true;
          xTurn = false;
          grid[i][j].setValue(1);
          grid[i][j].setActive(false);
          console.log("X Played here at: (" + i + ", " + j + ")")
        }

        else if(yTurn) {
          xTurn = true;
          yTurn = false;
          grid[i][j].setValue(0);
          grid[i][j].setActive(false);
          console.log("Y Played here at: (" + i + ", " + j + ")")
        }
      }
    }
  }
  if(checkWin())
  {
    for(let i = 0; i < ROWS; i++)
    {
      for(let j = 0; j < COLS; j++)
      {
        grid[i][j].setActive(false);
      }
    }
    winner = true;

    if(xTurn)
    {
      document.getElementById('header').style.color = "red";
      document.getElementById('header').innerHTML = "PLAYER 2 WINS!!";
    }

    else
    {
      document.getElementById('header').style.color = "blue";
      document.getElementById('header').innerHTML = "PLAYER 1 WINS!!";
    }
  }
}

reset = function()
{
  for(let i = 0; i < ROWS; i++)
  {
    for(let j = 0; j < COLS; j++)
    {
      grid[i][j].setActive(true);
      grid[i][j].setValue(-1);
    }
  }
  xTurn = true;
  yTurn = false;
  document.getElementById('header').innerHTML = "";
  clear();

}

function draw () {
  for(let i = 0; i < ROWS; i++)
  {
    for(let j = 0; j < COLS; j++)
    {
      grid[i][j].show();
    }
  }

}
