//From Wiki, Snooker, section: Equipment,
//"A standard full-size snooker table measures 12 ft × 6 ft (365.8 cm × 182.9 cm)".
//Each ball has a diameter of 2+(1/16) inches (52.5 mm or 5.25 cm).
//The pockets are around 86 mm (3.5 in) 8.6 cm.

var walls;
var tableLength = 365.8 * magnify;
var tableWidth = tableLength/2;
var ballDiameter = 5.25 * magnify;
var pocketSize = 8.6 * magnify;

var pockets = [];

//yellow corners
var corners = 17 * magnify;

//balk circle
var baulkCircleRadius = 29 * magnify;

function drawBed()
{
    //bed
    fill(1, 50, 32);
    rect(width/2, height/2, tableLength, tableWidth);

    //white baulk line drawn on the cloth across the width of the table at 29 inches (740 mm) from and parallel to the face of the bottom cushion
    stroke(255);
    noFill();
    rect((width/2)-(tableLength/2)+(74 * magnify)+(10*magnify), height/2, tableLength/tableLength, tableWidth)

    //A semicircle with a radius of 11.5 inches (290 mm) centred on this line within baulk forms the "D"
    ellipse((width / 2) - (tableLength / 2) + (74 * magnify) + (10*magnify), height / 2, baulkCircleRadius * 2);

    //another bed, to cover the other "D"
    noStroke();
    fill(1, 50, 32);
    rect((width / 2) - (tableLength / 2) + ((78 * magnify) + (10 * magnify))*2+(tableLength/tableLength), height / 2, tableLength/2, tableWidth);
}

function setupWalls()
{   
    rectMode(CENTER);
    var wall1 = Bodies.rectangle(width/2, (height/2 - tableWidth/2) + tableWidth, tableLength, 10 * magnify, {isStatic:true}); //bottom wall
    var wall2 = Bodies.rectangle(width/2, (height/2 - tableWidth/2), tableLength, 10 * magnify, {isStatic:true}); //top wall
    var wall3 = Bodies.rectangle((width/2 -tableLength/2), height/2, 10 * magnify, tableWidth, {isStatic:true}); //left wall
    var wall4 = Bodies.rectangle((width/2 -tableLength/2) + tableLength, height/2, 10 * magnify, tableWidth, {isStatic:true}); //right wall

    walls.push(wall1);
    walls.push(wall2);
    walls.push(wall3);
    walls.push(wall4);
    World.add(engine.world, [wall1, wall2, wall3, wall4]);
}

function drawWalls()
{
    noStroke();
    fill(139, 69, 19);
    for(var i = 0; i < walls.length; i++)
    {
        drawVertices(walls[i].vertices);
    }
}

function drawPockets() {
    fill(0);
    for(var i = 0; i < pockets.length; i++) {
        drawVertices(pockets[i].vertices);
    }
}

function drawYellowCorners()
{
    //yellow corners
    fill(255, 255, 0);

    rect(width/2-(tableLength/2)+(5*magnify), (height/2 - tableWidth/2)-magnify, corners * 1.4, corners * 0.7);//top left
    rect(width/2-(tableLength/2)-(1*magnify), height/2 - (tableWidth/2)+(5*magnify), corners * 0.7, corners * 1.4);//top left

    rect(width/2, (height/2 - tableWidth/2)-magnify, corners * 1.4, corners * 0.7);//top middle

    rect(width/2+(tableLength/2)-(5*magnify), (height/2 - tableWidth/2)-magnify, corners * 1.4, corners * 0.7);//top right
    rect(width/2+(tableLength/2)+(1*magnify), height/2 - (tableWidth/2)+(5*magnify), corners * 0.7, corners * 1.4);//top right

    rect(width/2-(tableLength/2)+(5*magnify), (height/2 + tableWidth/2)+magnify, corners * 1.4, corners * 0.7);//bottom left
    rect(width/2-(tableLength/2)-(1*magnify), height/2 + (tableWidth/2)-(5*magnify), corners * 0.7, corners * 1.4);//bottom left

    rect(width/2, (height/2 + tableWidth/2)+magnify, corners * 1.4, corners * 0.7);//bottom middle

    rect(width/2+(tableLength/2)-(5*magnify), (height/2 + tableWidth/2)+magnify, corners * 1.4, corners * 0.7);//bottom right
    rect(width/2+(tableLength/2)+(1*magnify), height/2 + (tableWidth/2)-(5*magnify), corners * 0.7, corners * 1.4);//bottom right
}

function setupPockets() {
    var pocketOffSet = 5*magnify;

    var pocket1 = Bodies.circle((width/2 - tableLength/2)+pocketOffSet, (height/2 - tableWidth/2)+pocketOffSet, pocketSize, { isStatic: true, isSensor: true });//top left

    var pocket2 = Bodies.circle((width/2 + tableLength/2)-pocketOffSet, (height/2 - tableWidth/2)+pocketOffSet, pocketSize, { isStatic: true, isSensor: true }); //top right

    var pocket3 = Bodies.circle(width/2, (height/2 - tableWidth/2)+pocketOffSet, pocketSize, { isStatic: true, isSensor: true }); //top center

    var pocket4 = Bodies.circle((width/2 - tableLength/2)+pocketOffSet, (height/2 + tableWidth/2)-pocketOffSet, pocketSize, { isStatic: true, isSensor: true }); //bottom left

    var pocket5 = Bodies.circle((width/2 + tableLength/2)-pocketOffSet, (height/2 + tableWidth/2)-pocketOffSet, pocketSize, { isStatic: true, isSensor: true }); //bottom right

    var pocket6 = Bodies.circle(width/2, (height/2 + tableWidth/2)-pocketOffSet, pocketSize, { isStatic: true, isSensor: true }); //bottom center

    pockets.push(pocket1, pocket2, pocket3, pocket4, pocket5, pocket6);
    World.add(engine.world, pockets);
}