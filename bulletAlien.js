class BulletAlien{
    constructor(Alien){
        this.alien = Alien;
        this.bulletAlienSprite = new PIXI.Sprite.from("assets/bullet.png");
        this.bulletAlienSprite.x = this.alien.game.alien.alienSprite.x;
        this.bulletAlienSprite.y = this.alien.game.alien.alienSprite.y;
        this.bulletAlienSprite.width = 30;
        this.bulletAlienSprite.height = 30;
        this.bulletAlienSprite.anchor.set(0.5, 0.5);
        this.vy = 5;
        this.draw();
        this.move();
        this.collision();
    }
    draw(){
       
        this.alien.game.app.stage.addChild(this.bulletAlienSprite);
    }
    move(){
        this.alien.game.app.ticker.add(() => {
            this.bulletAlienSprite.y += this.vy;
            if(this.bulletAlienSprite.y > GAME_HEIGHT){
                this.bulletAlienSprite.visible = false;
                this.alien.game.app.stage.removeChild(this.bulletAlienSprite);
            }
        })
    }
 
    collision(){
        this.alien.game.app.ticker.add(() => {
            let plane = this.alien.game.plane.planeSprite;
            if(this.bulletAlienSprite.x > plane.x - 25 && this.bulletAlienSprite.x < plane.x -25 + plane.width &&
                this.bulletAlienSprite.y > plane.y - 25 && this.bulletAlienSprite.y < plane.y - 25 + plane.height)
                {
                    //game over
                    let scoreLoseGame = new PIXI.Text("GAME OVER", {fill : 0xffffff, fontSize : 40});
                    scoreLoseGame.x = 30;
                    scoreLoseGame.y = 300;
                    this.alien.game.app.stage.addChild(scoreLoseGame);


                    this.bulletAlienSprite.visible = false;
                    this.alien.game.app.stage.removeChild(this.bulletAlienSprite);
                    this.alien.game.app.ticker.stop();
                    
                }
        });
    }
}