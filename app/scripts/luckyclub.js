///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="IGameObject.ts"/>
console.log('Loaded GameObjectContainer');
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
///<reference path="IGameObject.ts"/>
var Square = (function () {
    function Square(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = Math.random() > 0.5 ? 'red' : 'blue';
    }
    Square.prototype.init = function () {
        this.shape = new createjs.Shape();
        this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.size, this.size);
        this.shape.x = this.x * this.size;
        this.shape.y = this.y * this.size;
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
    function Grid(width, height, squareSize) {
        _super.call(this);
        this.width = width;
        this.height = height;
        this.squareSize = squareSize;
    }
    Grid.prototype.init = function () {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                _super.prototype.pushObject.call(this, new Square(x, y, this.squareSize));
            }
        }
        _super.prototype.init.call(this);
    };
    return Grid;
})(GameObjectContainer);
///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Grid.ts"/>
//require(['GameObjectContainer'], function() {
//});
console.log('Loaded World 2');
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
        _super.prototype.pushObject.call(this, new Grid(20, 15, 40));
        _super.prototype.init.call(this);
    };
    return World;
})(GameObjectContainer);
//# sourceMappingURL=luckyclub.js.map