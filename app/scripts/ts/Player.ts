///<reference path="../../../typings/easeljs/easeljs.d.ts" />

class Player implements IGameObject {
    shape:createjs.Shape;

    constructor(public x: number, public y: number) {
    }

    init():void {
        this.shape = new createjs.Shape();
        this.shape.graphics
            .beginFill('blue').drawRect(19, 19, 40, 40)
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    }

    loadContent(stage:createjs.Stage):void {
        stage.addChild(this.shape);
    }

    update():void {
        this.shape.x = this.x * 80;
        this.shape.y = this.y * 80;
    }

    unloadContent(stage:createjs.Stage):void {
        stage.removeChild(this.shape);
    }
}
