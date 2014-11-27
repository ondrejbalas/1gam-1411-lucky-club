///<reference path="../../../typings/easeljs/easeljs.d.ts" />
var World = (function () {
    function World(newStage) {
        this.stage = newStage;
        this.name = 'World name';
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
    return World;
})();
//# sourceMappingURL=World.js.map