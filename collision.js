function checkPocketCollisions()
{
    var ball = balls[i];
    for (var j = 0; j < pockets.length; j++)
    {
        var pocket = pockets[j];

        var blueP = isBallInsidePocket(blueBall, pocket);
        var blacP = isBallInsidePocket(blackBall, pocket);
        var pinkP = isBallInsidePocket(pinkBall, pocket);
        var browP = isBallInsidePocket(brownBall, pocket);
        var yellP = isBallInsidePocket(yellowBall, pocket);
        var greeP = isBallInsidePocket(greenBall, pocket);

        if(blueP && blacP || blueP && pinkP || blueP && browP || blueP && yellP || blueP && greeP || blacP && pinkP || blacP && browP || blacP && yellP || blacP && greeP || pinkP && browP || pinkP && yellP || pinkP && greeP || browP && yellP || browP && greeP || yellP && greeP)
        {
            print("Two coloured balls were pocketed!");
        }

        if (isBallInsidePocket(cueBall, pocket))
        {
            Body.setPosition(cueBall, { x: (width/2)-(tableLength/2)+(55 * magnify) + (10*magnify), y: height / 2 });
            Body.setAngularVelocity(cueBall, 0);
            Body.setVelocity(cueBall, { x: 0, y: 0 });
            print("Cue ball is pocketed!");
        }

        if (isBallInsidePocket(blueBall, pocket))
        {
            Body.setPosition(blueBall, { x: width/2, y: height / 2 });
            Body.setAngularVelocity(blueBall, 0);
            Body.setVelocity(blueBall, { x: 0, y: 0 });
            print("Blue ball is pocketed!");
        }

        if (isBallInsidePocket(blackBall, pocket))
        {
            Body.setPosition(blackBall, { x: (width/2) + (tableLength/2) - (32.4*magnify) - (10*magnify), y: height / 2 });
            Body.setAngularVelocity(blackBall, 0);
            Body.setVelocity(blackBall, { x: 0, y: 0 });
            print("Black ball is pocketed!");
        }

        if (isBallInsidePocket(pinkBall, pocket))
        {
            Body.setPosition(pinkBall, { x: (width/2) + (tableLength/4) - (10*magnify), y: height / 2 });
            Body.setAngularVelocity(pinkBall, 0);
            Body.setVelocity(pinkBall, { x: 0, y: 0 });
            print("Pink ball is pocketed!");
        }

        if (isBallInsidePocket(brownBall, pocket))
        {
            Body.setPosition(brownBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height / 2 });
            Body.setAngularVelocity(brownBall, 0);
            Body.setVelocity(brownBall, { x: 0, y: 0 });
            print("Brown ball is pocketed!");
        }

        if (isBallInsidePocket(yellowBall, pocket))
        {
            Body.setPosition(yellowBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 + baulkCircleRadius });
            Body.setAngularVelocity(yellowBall, 0);
            Body.setVelocity(yellowBall, { x: 0, y: 0 });
            print("Yellow ball is pocketed!");
        }

        if (isBallInsidePocket(greenBall, pocket))
        {
            Body.setPosition(greenBall, { x: (width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), y: height/2 - baulkCircleRadius });
            Body.setAngularVelocity(greenBall, 0);
            Body.setVelocity(greenBall, { x: 0, y: 0 });
            print("Green ball is pocketed!");
        }

        for (var i = balls.length - 1; i >= 0; i--)
        {
            var ball = balls[i];

            if (isBallInsidePocket(ball, pocket))
            {
                print("Red ball index " + i + " is pocketed!");
                balls.splice(i, 1);
                World.remove(engine.world, ball);
                break;
            }
        }

        for (var i = purpleBalls.length - 1; i >= 0; i--)
        {
            var purpleBall = purpleBalls[i];

            if (isBallInsidePocket(purpleBall, pocket))
            {
                print("Purple ball index " + i + " is pocketed!");
                purpleBalls.splice(i, 1);
                World.remove(engine.world, purpleBall);

                for (var i = 0; i < 2; i++)
                {
                    var randomX = random(width / 2 + tableWidth, width / 2 - tableWidth);
                    var randomY = random((height / 2 - tableWidth / 2) + tableWidth, (height / 2 - tableWidth / 2));

                    var pBall = Bodies.circle(randomX, randomY, ballDiameter, { restitution: 1, friction: 0.2 });

                    purpleBalls.push(pBall);
                    World.add(engine.world, pBall);
                    
                }
                break;
            }
        }
    }
}

function isBallInsidePocket(ball, pocket)
{
    var distance = dist(ball.position.x, ball.position.y, pocket.position.x, pocket.position.y);
    return distance < (ballDiameter / 2 + pocketSize / 1);
}

function collisionDetection()
{
    for(var i = 0; i < balls.length; i++)
    {
        var c = Matter.Collision.collides(cueBall, balls[i]);
        if(c!=null)
        {
            print("collide with Red ball index " + i);
        }
    }
    
    if(Matter.Collision.collides(cueBall, blueBall))
    {
        print("collide with Blue ball");
    }

    if(Matter.Collision.collides(cueBall, blackBall))
    {
        print("collide with Black ball");
    }

    if(Matter.Collision.collides(cueBall, pinkBall))
    {
        print("collide with Pink ball");
    }

    if(Matter.Collision.collides(cueBall, brownBall))
    {
        print("collide with Brown ball");
    }

    if(Matter.Collision.collides(cueBall, yellowBall))
    {
        print("collide with Yellow ball");
    }

    if(Matter.Collision.collides(cueBall, greenBall))
    {
        print("collide with Green ball");
    }
    
    for(var i = 0; i < purpleBalls.length; i++)
    {
        var c = Matter.Collision.collides(cueBall, purpleBalls[i]);
        if(c!=null)
        {
            print("collide with Purple ball index " + i);
        }
    }
}
