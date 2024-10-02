var cueBall;
var cueBallStartX
var cueBallStartY

function mousePressed() {
    let target = document.elementFromPoint(mouseX, mouseY);
    
    if (target.tagName === 'CANVAS') {
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
            //The larger the playing field, the leser force required to shoot
            var force = parseFloat(forceInput.value()) / magnify;

            var forceX = (cueBall.position.x - mouseX) / force;
            var forceY = (cueBall.position.y - mouseY) / force;

            var appliedForce = { x: forceX, y: forceY };
            Body.applyForce(cueBall, { x: cueBall.position.x, y: cueBall.position.y }, appliedForce);
        }
    }
}

function generateCueBall()
{
    cueBallStartX = (width/2)-(tableLength/2)+(55 * magnify)+(10*magnify);
    cueBallStartY = height/2;

    cueBall = Bodies.circle(cueBallStartX, cueBallStartY, ballDiameter, {restitution: 1, friction: .2});
    World.add(engine.world, [cueBall]);

}

function drawCueBall()
{
    noStroke();
    fill(255);
    drawVertices(cueBall.vertices);
}

function drawForceLine()
{
    stroke(255);
    line(mouseX, mouseY, cueBall.position.x, cueBall.position.y);
}

function moveCueBall()
{
//    console.log("keyPressed: " + key);
//    console.log("keyPressed: " + keyCode);
    
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65))
    {
        cueBall.position.x -= 0.01/magnify;
        print("Cue Ball move left");
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
    {
        cueBall.position.x += 0.01/magnify;
        print("Cue Ball move right");
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(87))
    {
        cueBall.position.y -= 0.01/magnify;
        print("Cue Ball move up");
    }

    if (keyIsDown(DOWN_ARROW) || keyIsDown(83))
    {
        cueBall.position.y += 0.01/magnify;
        print("Cue Ball move down");
    }
}