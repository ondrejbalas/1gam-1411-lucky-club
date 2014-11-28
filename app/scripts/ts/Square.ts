///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="IGameObject.ts"/>

class Square implements IGameObject {
    color = Math.random() > 0.5 ? 'red' : 'blue';
    shape:createjs.Shape;

    constructor(public x:number, public y:number, public size:number) {
    }

    init():void {
        this.shape = new createjs.Shape();
        this.shape.graphics.beginFill(this.color).drawRect(0, 0, this.size, this.size);
        this.shape.x = this.x * this.size;
        this.shape.y = this.y * this.size;
    }

    loadContent(stage:createjs.Stage):void {
        stage.addChild(this.shape);
    }

    update():void {
    }

    unloadContent(stage:createjs.Stage):void {
        stage.removeChild(this.shape);
    }
}
