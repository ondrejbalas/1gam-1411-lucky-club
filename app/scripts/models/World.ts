///<reference path="../../../typings/easeljs/easeljs.d.ts" />

class World {
    name: string;
    stage: createjs.Stage;

    constructor(newStage: createjs.Stage) {
        this.stage = newStage;
        this.name = 'World name';
    }

    start() : void {
        console.log('Drawing');
        var circle = new createjs.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        this.stage.addChild(circle);
        this.stage.update();
    }
}
