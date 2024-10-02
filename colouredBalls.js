var blueBall;
var blackBall;
var pinkBall;
var brownBall;
var yellowBall;
var greenBall;

//the centre spot or blue spot, located at the midpoint between the bottom and top cushions
function generateBlueBall()
{
    blueBall = Bodies.circle(width/2, height/2, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [blueBall]);
}

function drawBlueBall()
{
    noStroke();
    fill(0, 0, 254);
    drawVertices(blueBall.vertices);
}

//the black spot, 12.75 inches (324 mm) from the top cushion;
function generateBlackBall()
{
    blackBall = Bodies.circle((width/2) + (tableLength/2) - (32.4*magnify) - (10*magnify), height/2, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [blackBall]);
}

function drawBlackBall()
{
    noStroke();
    fill(0);
    drawVertices(blackBall.vertices);
}

//The marked spot on a snooker table at which the pink ball is placed. Regardless of table size, it is exactly midway between the centre spot (blue spot) and the face (nose) of the top cushion

function generatePinkBall()
{
    pinkBall = Bodies.circle((width/2) + (tableLength/4) - (10*magnify), height/2, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [pinkBall]);
}

function drawPinkBall()
{
    noStroke();
    fill(254, 181, 192);
    drawVertices(pinkBall.vertices);
}

//The spot (often not marked) on a snooker table at which the brown ball is placed. Regardless of table size, it is the middle point of the baulk line.
function generateBrownBall()
{
    brownBall = Bodies.circle((width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), height/2, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [brownBall]);
}

function drawBrownBall()
{
    noStroke();
    fill(164, 41, 41);
    drawVertices(brownBall.vertices);
}

//Yellow spot, Regardless of table size, it is the intersection of the "D" and the balk line on the breaker's right side.
function generateYellowBall()
{
    yellowBall = Bodies.circle((width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), height/2 + baulkCircleRadius, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [yellowBall]);
}

function drawYellowBall()
{
    noStroke();
    fill(254, 254, 0);
    drawVertices(yellowBall.vertices);
}

//Green spot, Regardless of table size, it is the intersection of the "D" and the balk line on the breaker's left side.
function generateGreenBall()
{
    greenBall = Bodies.circle((width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), height/2 - baulkCircleRadius, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [greenBall]);
}

function drawGreenBall()
{
    noStroke();
    fill(0, 147, 0);
    drawVertices(greenBall.vertices);
}

function generateColouredBalls()
{
    generateBlueBall();
    generateBlackBall();
    generatePinkBall();
    generateBrownBall();
    generateYellowBall();
    generateGreenBall();
}

function drawColouredBalls()
{
    drawBlueBall();
    drawBlackBall();
    drawPinkBall();
    drawBrownBall();
    drawYellowBall();
    drawGreenBall();
}