///<reference path="IGameObject.ts"/>
var GameObjectContainer = (function () {
    function GameObjectContainer() {
    }
    GameObjectContainer.prototype.init = function () {
    };
    GameObjectContainer.prototype.loadContent = function () {
    };
    GameObjectContainer.prototype.update = function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.update();
        }
    };
    GameObjectContainer.prototype.draw = function (stage) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            var obj = this.gameObjects[i];
            obj.draw(stage);
        }
    };
    GameObjectContainer.prototype.unloadContent = function () {
    };
    return GameObjectContainer;
})();
//# sourceMappingURL=GameObjectContainer.js.map