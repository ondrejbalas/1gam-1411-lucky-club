///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var World = (function (_super) {
    __extends(World, _super);
    function World(stage) {
        _super.call(this);
        this.stage = stage;
        this.name = 'My world';
    }
    World.prototype.start = function () {
        console.log('Drawing');
        var circle = new createjs.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        this.stage.addChild(circle);
        this.stage.update();
    };
    World.prototype.init = function () {
    };
    World.prototype.loadContent = function () {
    };
    World.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    World.prototype.draw = function (stage) {
        _super.prototype.draw.call(this, stage);
    };
    World.prototype.unloadContent = function () {
    };
    return World;
})(GameObjectContainer);
//# sourceMappingURL=World.js.map