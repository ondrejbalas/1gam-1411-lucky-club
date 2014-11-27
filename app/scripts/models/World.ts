///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>

class World extends GameObjectContainer {
    name:string;

    constructor(private stage:createjs.Stage) {
        super();
        this.name = 'My world';
    }

    start():void {
        console.log('Drawing');
        var circle = new createjs.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        this.stage.addChild(circle);
        this.stage.update();
    }

    init():void {

    }

    loadContent():void {

    }

    update():void {
        super.update();
    }

    draw(stage:createjs.Stage):void {
        super.draw(stage);
    }

    unloadContent():void {

    }
}
