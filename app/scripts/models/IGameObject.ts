///<reference path="../../../typings/easeljs/easeljs.d.ts" />

interface IGameObject {
    init() : void
    loadContent() : void
    update() : void
    draw(stage: createjs.Stage) : void
    unloadContent() : void
}
