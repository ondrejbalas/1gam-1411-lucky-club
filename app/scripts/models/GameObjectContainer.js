///<reference path="IGameObject.ts"/>
console.log('Loaded GameObjectContainer');
var GameObjectContainer = (function () {
    function GameObjectContainer() {
        this.gameObjects = [];
    }
    GameObjectContainer.prototype.pushObject = function (obj) {
        this.gameObjects.push(obj);
    };
    GameObjectContainer.prototype.init = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.init();
        }
    };
    GameObjectContainer.prototype.loadContent = function (stage) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.loadContent(stage);
        }
    };
    GameObjectContainer.prototype.update = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.update();
        }
    };
    //draw(stage:createjs.Stage):void {
    //    for (var i = 0; i < this.gameObjects.length; i++) {
    //        var obj = this.gameObjects[i];
    //        obj.draw(stage);
    //    }
    //}
    GameObjectContainer.prototype.unloadContent = function (stage) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.unloadContent(stage);
        }
    };
    return GameObjectContainer;
})();
//# sourceMappingURL=GameObjectContainer.js.map