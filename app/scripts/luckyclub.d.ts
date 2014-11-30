/// <reference path="../../typings/easeljs/easeljs.d.ts" />
interface IGameObject {
    init(): void;
    loadContent(stage: createjs.Stage): void;
    update(): void;
    unloadContent(stage: createjs.Stage): void;
}
declare class GameObjectContainer implements IGameObject {
    gameObjects: IGameObject[];
    pushObject(obj: IGameObject): void;
    init(): void;
    loadContent(stage: createjs.Stage): void;
    update(): void;
    unloadContent(stage: createjs.Stage): void;
}
declare class Goal implements IGameObject {
    x: number;
    y: number;
    shape: createjs.Shape;
    constructor(x: number, y: number);
    init(): void;
    loadContent(stage: createjs.Stage): void;
    update(): void;
    unloadContent(stage: createjs.Stage): void;
}
declare class Square implements IGameObject {
    x: number;
    y: number;
    size: number;
    color: string;
    shape: createjs.Shape;
    constructor(x: number, y: number, size: number);
    init(): void;
    loadContent(stage: createjs.Stage): void;
    update(): void;
    unloadContent(stage: createjs.Stage): void;
}
declare class Grid extends GameObjectContainer {
    width: number;
    height: number;
    squareSize: number;
    constructor(width: number, height: number, squareSize: number);
    init(): void;
    placePlayer(player: Player): void;
}
declare class Player implements IGameObject {
    x: number;
    y: number;
    shape: createjs.Shape;
    constructor(x: number, y: number);
    init(): void;
    loadContent(stage: createjs.Stage): void;
    update(): void;
    unloadContent(stage: createjs.Stage): void;
}
declare class World extends GameObjectContainer {
    private stage;
    name: string;
    private running;
    grid: Grid;
    player: Player;
    constructor(stage: createjs.Stage);
    start(): void;
    init(): void;
}
