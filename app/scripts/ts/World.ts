///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Grid.ts"/>

class World extends GameObjectContainer {
    name:string;
    private running:boolean;

    // hold a reference to things I'll need to refer to later
    grid:Grid;

    constructor(private stage:createjs.Stage) {
        super();
        this.name = 'My world';
    }

    start():void {
        this.init();
        this.loadContent(this.stage);
        this.running = true;

        this.update();
        this.stage.update();
        //while(this.running) {
        //
        //    this.running = false;
        //}
        //this.unloadContent(this.stage);
    }

    init():void {
        this.grid = new Grid(10, 8, 80);
        super.pushObject(this.grid);

        super.init();
    }
    //
    //loadContent(stage:createjs.Stage):void {
    //    super.loadContent(stage);
    //}
    //
    //update():void {
    //    super.update();
    //}
    //
    ////draw(stage:createjs.Stage):void {
    ////    super.draw(stage);
    ////}
    //
    //unloadContent(stage:createjs.Stage):void {
    //    super.unloadContent(stage);
    //}
}
