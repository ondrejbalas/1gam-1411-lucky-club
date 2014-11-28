///<reference path="../../../typings/easeljs/easeljs.d.ts" />

interface IGameObject {
    init() : void
    loadContent(stage:createjs.Stage) : void
    update() : void
    //draw(stage: createjs.Stage) : void
    unloadContent(stage:createjs.Stage) : void
}
