///<reference path="../../../typings/easeljs/easeljs.d.ts" />
///<reference path="GameObjectContainer.ts"/>
///<reference path="Square.ts"/>

class Grid extends GameObjectContainer {


    constructor(public width: number, public height: number, public squareSize: number, public player:Player, public goal:Goal)
    {
        super();
    }

    init():void {
        for (var x = 0; x < this.width; x++) {
          for (var y = 0; y < this.height; y++) {
              super.pushObject(new Square(x, y, this.squareSize));
          }
        }

        this.player = new Player();
        this.placePlayer(this.player);
        super.pushObject(this.player);

        this.goal = new Goal();
        this.placeGoal(this.goal);
        super.pushObject(this.goal);

        super.init();
    }

    private placePlayer(player:Player):void {
        player.x = Math.floor(Math.random() * 2);
        player.y = Math.floor(Math.random() * this.height);
    }

    private placeGoal(goal:Goal):void {
        goal.x = this.width - 1 - Math.floor(Math.random() * 2);
        goal.y = Math.floor(Math.random() * this.height);
    }
}
