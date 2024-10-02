var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var engine;
var magnify = 1.25;

function setup() {
    createCanvas(1000, 765);
    engine = Engine.create();
    engine.world.gravity.y = 0;

    balls = [];
    walls = [];
    purpleBalls = [];

    setupWalls();
    setupPockets();

    generateCueBall();
    generateBalls();
    generateColouredBalls();

    // Create a div container for buttons
    var buttonContainer = createDiv();
    buttonContainer.style('display', 'flex');
    buttonContainer.style('justify-content', 'center');
    buttonContainer.style('margin-top', '-620px');
    buttonContainer.style('gap', '10px');
    
    var button1 = createButton('Reset Game, Press "1"');
    button1.mousePressed(resetGame);
    buttonContainer.child(button1);

    var button2 = createButton('Randomize Red Balls, Press "2"');
    button2.mousePressed(randomizeRedBalls);
    buttonContainer.child(button2);

    var button3 = createButton('Randomize All Balls, Press "3"');
    button3.mousePressed(randomizeAll);
    buttonContainer.child(button3);

    var button4 = createButton('Add Random Red Ball, Press "4"');
    button4.mousePressed(addRandomRedBall);
    buttonContainer.child(button4);

    var button5 = createButton('Hydra Mode, Press "5"');
    button5.mousePressed(addPurpleBalls);
    buttonContainer.child(button5);
    
    var forceContainer = createDiv();
    forceContainer.style('display', 'flex');
    forceContainer.style('justify-content', 'left');
    forceContainer.style('margin-top', '10px');
    forceContainer.style('margin-left', '245px');
    forceContainer.style('align-items', 'center');
    forceContainer.style('gap', '10px');

    // Add "Cue force:" label
    var forceLabel = createP('Cue force:');
    forceLabel.style('margin', '0');
    forceLabel.style('color', 'white');
    forceLabel.style('font-size', '16px');
    forceContainer.child(forceLabel);

    // Create the input box for force
    forceInput = createInput('100000');
    forceInput.size(100);
    forceContainer.child(forceInput);
}


function draw() 
{
    background(50, 0, 0);
    Engine.update(engine);

    drawBed();
    drawWalls();
    drawYellowCorners();
    drawPockets();

    moveCueBall();
    drawCueBall();
    drawForceLine();

    drawBalls();
    drawColouredBalls();
    drawPurpleBalls();

    checkPocketCollisions();
    collisionDetection();
}

function drawVertices(vertices)
{
    beginShape();
    for (var i =0; i < vertices.length; i++)
    {
        vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
}

function keyPressed()
{
//    console.log("keyPressed: " + key);
//    console.log("keyPressed: " + keyCode);

    if (key === '1')
    {
        resetGame();
    }

    if (key === '2')
    {
        randomizeRedBalls();
    }

    if (key === '3')
    {
        randomizeAll();
    }

    if (key === '4')
    {
        addRandomRedBall();
    }
    
    if (key === '5')
    {
        addPurpleBalls();
    }
}

//COMMENTARY

/*

1. App Design
The snooker playing setup was based on dimensions provided by Wikipedia [1][2]. The cue is represented by a white line. The amount of force exerted by the player is based on the distance of the white line and fires when the mouse is clicked. This was chosen as opposed to clicking where the ball should go to because disregard the aiming aspect of the game. Even though the mouse is used to hit the cue ball, its starting position can be controlled by using the arrow keys or “WASD” keys. It is to allow users to shift the ball with minimal force, controlling the balls starting point.

There are 4 game modes to choose from. Players can select the different game modes by clicking on the buttons on screen or by pressing the numbers 1 -4 on their keyboard. The reason why there are 2 ways to select the different game modes is because of the mouse press function for the cue. When users select a new game mode by clicking the on-screen buttons, the cue immediately hits the cue ball upon entering the new game mode. To improve the game mode selection, users can instead press their number keys to select the game modes.

Although not shown on the user interface, one other design consideration was the magnify variable in the code. Because the various variables of the game followed the measurements provided, I felt that the game was a bit small. To increase the size of the table and its elements while keeping the canvas size, magnify variable was introduced when the snooker table was coded. This allowed me to tailor the magnification requirements accordingly as the coding progressed.

2. Extension
An extension implemented into the game is the “Add Random Red Ball” function. As its name suggests, it adds a random red ball into the table for any of the game modes. The function may be simple but can be expanded to other areas of the game such as, increasing the number of pockets, adding a random coloured ball to the game. I believe these ideas are good implementations into the game as they keep the idea of what the snooker game should be and yet challenges players strategies and viewpoints.

Another extension implemented was the “Hydra Mode”. From the Greek mythology, a hydra has 9 heads and grows back a pair of heads for each one severed [3]. Similarly, whenever one of the purple balls are pocketed, 2 more are added to the game. The rules and scoring of purple balls are ultimately up to players discretion, but like a hydra, will always pose a threat, to the scoring of points.

Other extensions were also considered like extending the table length or width, but the user would just exert more force to fire the cue ball and wouldn’t have much impact difference on the game.

3. Bibliography, Works Cited and References
[1] https://en.wikipedia.org/wiki/Snooker
[2] https://en.wikipedia.org/wiki/Billiard_table#Snooker_and_English_billiards_tables
[3] https://en.wikipedia.org/wiki/Lernaean_Hydra

*/