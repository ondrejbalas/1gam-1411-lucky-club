var app = {};
app.config = {
    squareSize: 32,
    mapWidth: 18,
    mapHeight: 12
};
var xx = [[]]; xx[0][1] = 5;
console.log(xx[0][1]);
stage = new createjs.Stage("firstCanvas");

var Square = function(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.color = Math.random() > 0.5 ? "red" : "blue";
    this.shape = new createjs.  Shape();
    this.shape.graphics.beginFill(this.color).drawRect(0, 0, app.config.squareSize, app.config.squareSize);
    stage.addChild(this.shape);
    this.draw = function() {
        this.shape.x = this.x * app.config.squareSize;
        this.shape.y = this.y * app.config.squareSize;
    };
};

var Map = function(width, height) {
    this.width = width;
    this.height = height;
    this.squares = [[]];

    for(i = 0; i < width; i++) {
        this.squares[i] = [];
        for (j = 0; j < height; j++) {
            this.squares[i][j] = new Square(i, j);
        }
    }

    this.draw = function() {
        for(i = 0; i < width; i++) {
            for (j = 0; j < height; j++) {
                this.squares[i][j].draw();
            }
        }
    };
};

var map = new Map(app.config.mapWidth, app.config.mapHeight);
map.draw();

stage.update();