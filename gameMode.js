function resetGame()
{
    for (var i = 0; i < balls.length; i++)
    {
        Matter.World.remove(engine.world, balls[i]);
    }
    balls = [];
    generateBalls();

    for (var i = 0; i < purpleBalls.length; i++)
    {
        Matter.World.remove(engine.world, purpleBalls[i]);
    }
    purpleBalls = [];

    Body.setPosition(cueBall, { x: (width/2)-(tableLength/2)+(55 * magnify) + (10*magnify), y: height / 2 });
    Body.setAngularVelocity(cueBall, 0);
    Body.setVelocity(cueBall, { x: 0, y: 0 });

    Body.setPosition(blueBall, { x: width/2, y: height / 2 });
    Body.setAngularVelocity(blueBall, 0);
    Body.setVelocity(blueBall, { x: 0, y: 0 });

    Body.setPosition(blackBall, { x: (width/2) + (tableLength/2) - (32.4*magnify) - (10*magnify), y: height / 2 });
    Body.setAngularVelocity(blackBall, 0);
    Body.setVelocity(blackBall, { x: 0, y: 0 });

    Body.setPosition(pinkBall, { x: (width/2) + (tableLength/4) - (10*magnify), y: height / 2 });
    Body.setAngularVelocity(pinkBall, 0);
    Body.setVelocity(pinkBall, { x: 0, y: 0 });

    Body.setPosition(brownBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height / 2 });
    Body.setAngularVelocity(brownBall, 0);
    Body.setVelocity(brownBall, { x: 0, y: 0 });

    Body.setPosition(yellowBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 + baulkCircleRadius });
    Body.setAngularVelocity(yellowBall, 0);
    Body.setVelocity(yellowBall, { x: 0, y: 0 });

    Body.setPosition(greenBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 - baulkCircleRadius });
    Body.setAngularVelocity(greenBall, 0);
    Body.setVelocity(greenBall, { x: 0, y: 0 });

    print("Game is resetted")
}

function randomizeRedBalls()
{
    for (var i = 0; i < balls.length; i++)
    {
        Matter.World.remove(engine.world, balls[i]);
    }
    balls = [];
    generateBalls();

    for (var i = 0; i < purpleBalls.length; i++)
    {
        Matter.World.remove(engine.world, purpleBalls[i]);
    }
    purpleBalls = [];

    //red ball x, y, randomizer
    for (var i = 0; i < balls.length; i++)
    {
        var newX = random(width/2 + tableWidth, width/2 - tableWidth);
        var newY = random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2));

        Matter.Body.setPosition(balls[i], { x: newX, y: newY });
    }

    Body.setPosition(cueBall, { x: (width/2)-(tableLength/2)+(55 * magnify) + (10*magnify), y: height / 2 });
    Body.setAngularVelocity(cueBall, 0);
    Body.setVelocity(cueBall, { x: 0, y: 0 });

    Body.setPosition(blueBall, { x: width/2, y: height / 2 });
    Body.setAngularVelocity(blueBall, 0);
    Body.setVelocity(blueBall, { x: 0, y: 0 });

    Body.setPosition(blackBall, { x: (width/2) + (tableLength/2) - (32.4*magnify) - (10*magnify), y: height / 2 });
    Body.setAngularVelocity(blackBall, 0);
    Body.setVelocity(blackBall, { x: 0, y: 0 });

    Body.setPosition(pinkBall, { x: (width/2) + (tableLength/4) - (10*magnify), y: height / 2 });
    Body.setAngularVelocity(pinkBall, 0);
    Body.setVelocity(pinkBall, { x: 0, y: 0 });

    Body.setPosition(brownBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height / 2 });
    Body.setAngularVelocity(brownBall, 0);
    Body.setVelocity(brownBall, { x: 0, y: 0 });

    Body.setPosition(yellowBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 + baulkCircleRadius });
    Body.setAngularVelocity(yellowBall, 0);
    Body.setVelocity(yellowBall, { x: 0, y: 0 });

    Body.setPosition(greenBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 - baulkCircleRadius });
    Body.setAngularVelocity(greenBall, 0);
    Body.setVelocity(greenBall, { x: 0, y: 0 });

    print("Red balls randomized")
}

function randomizeAll()
{
    for (var i = 0; i < balls.length; i++)
    {
        Matter.World.remove(engine.world, balls[i]);
    }
    balls = [];
    generateBalls();

    for (var i = 0; i < purpleBalls.length; i++)
    {
        Matter.World.remove(engine.world, purpleBalls[i]);
    }
    purpleBalls = [];

    for (var i = 0; i < balls.length; i++)
    {
        var newX = random(width/2 + tableWidth, width/2 - tableWidth);
        var newY = random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2));

        Matter.Body.setPosition(balls[i], { x: newX, y: newY });
    }

    Body.setPosition(blueBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(blueBall, 0);
    Body.setVelocity(blueBall, { x: 0, y: 0 });

    Body.setPosition(blackBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(blackBall, 0);
    Body.setVelocity(blackBall, { x: 0, y: 0 });

    Body.setPosition(pinkBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(pinkBall, 0);
    Body.setVelocity(pinkBall, { x: 0, y: 0 });

    Body.setPosition(brownBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(brownBall, 0);
    Body.setVelocity(brownBall, { x: 0, y: 0 });

    Body.setPosition(yellowBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(yellowBall, 0);
    Body.setVelocity(yellowBall, { x: 0, y: 0 });

    Body.setPosition(greenBall, { x: random(width/2 + tableWidth, width/2 - tableWidth), y: random((height/2 - tableWidth/2) + tableWidth, (height/2 - tableWidth/2)) });
    Body.setAngularVelocity(greenBall, 0);
    Body.setVelocity(greenBall, { x: 0, y: 0 });

    print("All balls are randomized")
}

//Extension add random red balls to the table

function addRandomRedBall()
{
    var randomX = random(width / 2 + tableWidth, width / 2 - tableWidth);
    var randomY = random((height / 2 - tableWidth / 2) + tableWidth, (height / 2 - tableWidth / 2));

    var redBall = Bodies.circle(randomX, randomY, ballDiameter, { restitution: 1, friction: 0.2 });
    balls.push(redBall);

    World.add(engine.world, redBall);

    print("New Red Ball is added to the game")
}

//Extension Hydra game mode.
//Based on the greeek mythological monster hydra, when 1 head is severed, 2 takes its place.

var purpleBalls;

function addPurpleBalls()
{
    for (var i = 0; i < purpleBalls.length; i++)
    {
        Matter.World.remove(engine.world, purpleBalls[i]);
    }
    purpleBalls = [];
    
    for (var i = 0; i < 9; i++)
    {
        var randomX = random(width / 2 + tableWidth, width / 2 - tableWidth);
        var randomY = random((height / 2 - tableWidth / 2) + tableWidth, (height / 2 - tableWidth / 2));

        var pBall = Bodies.circle(randomX, randomY, ballDiameter, { restitution: 1, friction: 0.2 });

        purpleBalls.push(pBall);
    }

    World.add(engine.world, purpleBalls);
    print("Hydra mode activated")
}

function drawPurpleBalls()
{
    noStroke();
    fill(127, 0, 127);
    for(var i = 0; i<purpleBalls.length; i++)
    {
        drawVertices(purpleBalls[i].vertices);
    }
}