///<reference path="IGameObject.ts"/>

class GameObjectContainer implements IGameObject {
    gameObjects:IGameObject[];

    init():void {
    }

    loadContent():void {
    }

    update():void {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.update();
        }
    }

    draw(stage:createjs.Stage):void {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.draw(stage);
        }
    }

    unloadContent():void {
    }
}
