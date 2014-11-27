///<reference path="../../typings/easeljs/easeljs.d.ts" />
///<reference path="../../typings/requirejs/require.d.ts" />
///<reference path="models/World.ts"/>

define(['easeljs', './models/World'], function() {
    console.log('App started');
    var stage = new createjs.Stage('luckycanvas');
    var world = new World(stage);
    world.start();
    return world;
});
