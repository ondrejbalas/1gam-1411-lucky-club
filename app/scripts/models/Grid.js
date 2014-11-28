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
//# sourceMappingURL=Grid.js.map