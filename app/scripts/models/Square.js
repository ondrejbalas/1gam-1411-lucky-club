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
//# sourceMappingURL=Square.js.map