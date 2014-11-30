///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Square.ts"/>

class Grid extends GameObjectContainer {
    constructor(public width: number, public height: number, public squareSize: number)
    {
        super();
    }

    init():void {
        for (var x = 0; x < this.width; x++) {
          for (var y = 0; y < this.height; y++) {
              super.pushObject(new Square(x, y, this.squareSize));
          }
        }
        super.init();
    }

    placePlayer(player:Player):void {
        player.x = Math.floor(Math.random() * 2);
        player.y = Math.floor(Math.random() * this.height);
    }
}
