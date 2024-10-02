var balls;

function generateBalls() {

    var X = (width/2) + (tableLength/4) - (10*magnify);
    var Y = height / 2;
    let spacing = 4;

    for (var row = 1; row < 6; row++)
    {
        let ypos = Y - row * ballDiameter + ballDiameter;

        for (var i = 0; i < row; i++)
        {
            var ball = Bodies.circle(X + row * (ballDiameter + spacing), ypos + 2 * i * ballDiameter, ballDiameter, { restitution: 1, friction: 0.2 });
            balls.push(ball);
        }
    }

    World.add(engine.world, balls);
}

function drawBalls()
{
    noStroke();
    fill(255, 0, 0);
    for(var i = 0; i<balls.length; i++)
    {
        drawVertices(balls[i].vertices);
    }
}
