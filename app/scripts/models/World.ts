///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Grid.ts"/>

//require(['GameObjectContainer'], function() {
//});

console.log('Loaded World')

class World extends GameObjectContainer {
    name:string;
    private running:boolean;

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
        super.pushObject(new Grid(4, 4, 32));

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
