class Alien{
    constructor(Game ){
        this.game = Game;
        this.alienSprite = new PIXI.Sprite.from("assets/alien.png"); 
        this.alienSprite.x = 80 + Math.floor(Math.random() * (GAME_WIDTH - 80));
        this.alienSprite.y = 0;
        this.alienSprite.width = 50;
        this.alienSprite.height = 50;
        this.alienSprite.anchor.set(0.5, 0.5);

        this.bulletAlienSprite = new PIXI.Sprite.from("assets/bullet.png");
        this.bulletAlienSprite.x = this.alienSprite.x;
        this.bulletAlienSprite.y = this.alienSprite.y;
        this.bulletAlienSprite.width = 30;
        this.bulletAlienSprite.height = 30;
        this.bulletAlienSprite.anchor.set(0.5, 0.5);
        

        this.vy = 2;
        this.health = 10;
        this.drawAlien();
        this.moveAlien();
        this.fireBullet();

        
    }
    drawAlien(){
        this.game.app.stage.addChild(this.alienSprite);
    }
    moveAlien(){
        this.game.app.ticker.add(() => {
            this.alienSprite.y += this.vy;
            if(this.alienSprite.y > GAME_HEIGHT){
                this.game.app.stage.removeChild(this.alienSprite);
            }
        })
    }

    fireBullet(){
        setInterval(() => {
            this.bulletAlien =new BulletAlien(this);
        }, 500)
    }
  
}