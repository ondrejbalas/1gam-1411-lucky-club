stage = new createjs.Stage("firstCanvas");

circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//Set position of Shape instance.
circle.x = circle.y = 200;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame
stage.update();

circle.addEventListener("click", handleClick);
function handleClick(event){
    circle.x = circle.y = circle.y - 20;
    stage.update();
}