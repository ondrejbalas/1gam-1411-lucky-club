///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="IGameObject.ts"/>
var GameObjectContainer = (function () {
    function GameObjectContainer() {
        this.gameObjects = [];
    }
    GameObjectContainer.prototype.pushObject = function (obj) {
        this.gameObjects.push(obj);
    };
    GameObjectContainer.prototype.init = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.init();
        }
    };
    GameObjectContainer.prototype.loadContent = function (stage) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.loadContent(stage);
        }
    };
    GameObjectContainer.prototype.update = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.update();
        }
    };
    //draw(stage:createjs.Stage):void {
    //    for (var i = 0; i < this.gameObjects.length; i++) {
    //        var obj = this.gameObjects[i];
    //        obj.draw(stage);
    //    }
    //}
    GameObjectContainer.prototype.unloadContent = function (stage) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.unloadContent(stage);
        }
    };
    return GameObjectContainer;
})();
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
var Goal = (function () {
    function Goal(x, y) {
        this.x = x;
        this.y = y;
    }
    Goal.prototype.init = function () {
        this.shape = new createjs.Shape();
        this.shape.graphics.beginFill('#FFCC00').drawRect(19, 19, 40, 40);
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    };
    Goal.prototype.loadContent = function (stage) {
        stage.addChild(this.shape);
    };
    Goal.prototype.update = function () {
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    };
    Goal.prototype.unloadContent = function (stage) {
        stage.removeChild(this.shape);
    };
    return Goal;
})();
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="IGameObject.ts"/>
var Square = (function () {
    function Square(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.isTrap = Math.random() < 0.3;
    }
    Square.prototype.init = function () {
        this.shape = new createjs.Shape();
        this.shape.graphics.beginFill('black').drawRect(0, 0, this.size, this.size).beginFill('white').drawRect(2, 2, this.size - 4, this.size - 4).beginFill(this.color()).drawRect((this.size / 2) - 4, (this.size / 2) - 4, 8, 8);
        this.shape.x = this.x * this.size;
        this.shape.y = this.y * this.size;
    };
    Square.prototype.color = function () {
        return this.isTrap ? 'red' : 'green';
    };
    Square.prototype.loadContent = function (stage) {
        stage.addChild(this.shape);
    };
    Square.prototype.update = function () {
    };
    Square.prototype.unloadContent = function (stage) {
        stage.removeChild(this.shape);
    };
    return Square;
})();
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Square.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(width, height, squareSize, player, goal) {
        _super.call(this);
        this.width = width;
        this.height = height;
        this.squareSize = squareSize;
        this.player = player;
        this.goal = goal;
    }
    Grid.prototype.init = function () {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                _super.prototype.pushObject.call(this, new Square(x, y, this.squareSize));
            }
        }
        this.player = new Player();
        this.placePlayer(this.player);
        _super.prototype.pushObject.call(this, this.player);
        this.goal = new Goal();
        this.placeGoal(this.goal);
        _super.prototype.pushObject.call(this, this.goal);
        _super.prototype.init.call(this);
    };
    Grid.prototype.placePlayer = function (player) {
        player.x = Math.floor(Math.random() * 2);
        player.y = Math.floor(Math.random() * this.height);
    };
    Grid.prototype.placeGoal = function (goal) {
        goal.x = this.width - 1 - Math.floor(Math.random() * 2);
        goal.y = Math.floor(Math.random() * this.height);
    };
    return Grid;
})(GameObjectContainer);
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
var Player = (function () {
    function Player() {
    }
    Player.prototype.init = function () {
        this.shape = new createjs.Shape();
        this.shape.graphics.beginFill('blue').drawRect(19, 19, 40, 40);
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    };
    Player.prototype.loadContent = function (stage) {
        stage.addChild(this.shape);
    };
    Player.prototype.update = function () {
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    };
    Player.prototype.unloadContent = function (stage) {
        stage.removeChild(this.shape);
    };
    return Player;
})();
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Grid.ts"/>
var World = (function (_super) {
    __extends(World, _super);
    function World(stage) {
        _super.call(this);
        this.stage = stage;
        this.name = 'My world';
    }
    World.prototype.start = function () {
        this.init();
        this.loadContent(this.stage);
        this.running = true;
        this.update();
        this.stage.update();
        //while(this.running) {
        //
        //    this.running = false;
        //}
        //this.unloadContent(this.stage);
    };
    World.prototype.init = function () {
        this.grid = new Grid(10, 8, 80);
        _super.prototype.pushObject.call(this, this.grid);
        _super.prototype.init.call(this);
    };
    return World;
})(GameObjectContainer);
//# sourceMappingURL=luckyclub.js.map