///<reference path="../../typings/easeljs/easeljs.d.ts" />
///<reference path="../../typings/requirejs/require.d.ts" />
///<reference path="luckyclub.d.ts" />

define(['easeljs', './luckyclub'], function() {
    var stage = new createjs.Stage('luckycanvas');
    var world = new World(stage);
    world.start();
    return world;
});
