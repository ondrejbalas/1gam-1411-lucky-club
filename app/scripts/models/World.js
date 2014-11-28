///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Grid.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//require(['GameObjectContainer'], function() {
//});
console.log('Loaded World');
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
        _super.prototype.pushObject.call(this, new Grid(4, 4, 32));
        _super.prototype.init.call(this);
    };
    return World;
})(GameObjectContainer);
//# sourceMappingURL=World.js.map