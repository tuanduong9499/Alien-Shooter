class BulletPlane{
    constructor(Plane){
        this.plane = Plane;
        this.bulletPlaneSprite = new PIXI.Sprite.from("assets/bullet2.png");
        this.bulletPlaneSprite.x = this.plane.game.plane.planeSprite.x;
        this.bulletPlaneSprite.y = this.plane.game.plane.planeSprite.y;
        this.bulletPlaneSprite.width = 20;
        this.bulletPlaneSprite.height = 20;
        this.bulletPlaneSprite.anchor.set(0.5, 0,5);
        this.vy = 10;
        this.draw();
        this.move();
        this.collision()
    }
    draw(){
        this.plane.game.app.stage.addChild(this.bulletPlaneSprite);
    }
    move(){
        this.plane.game.app.ticker.add(() => {
            this.bulletPlaneSprite.y += -this.vy;
            if(this.bulletPlaneSprite.y < 0){
                this.plane.game.app.stage.removeChild(this.bulletPlaneSprite);
            }
        })
    }
    collision(){
        this.plane.game.app.ticker.add(() => {
            for(let i = 0 ; i < this.plane.game.aliens.length; i++){
                let alien = this.plane.game.aliens[i].alienSprite;
                if(this.bulletPlaneSprite.x > alien.x - 25 && this.bulletPlaneSprite.x < alien.x - 25 + alien.width &&
                    this.bulletPlaneSprite.y - 25 > alien.y && this.bulletPlaneSprite.y - 25< alien.y + alien.height)
                    {
                        //score plus
                        this.plane.game.score ++;
                        this.plane.game.scoreText.text = "Score : " + this.plane.game.score;

                        //victory score
                        if(this.plane.game.score == 50){
                            let scoreVictoryGame = new PIXI.Text("VICTORY", {fill : 0xffffff, fontSize : 40});
                            scoreVictoryGame.x = 60;
                            scoreVictoryGame.y = 300;
                            this.plane.game.app.stage.addChild(scoreVictoryGame);
                            this.plane.game.app.ticker.stop();
                        }
                       

                        //delete bulletPlane
                        this.bulletPlaneSprite.visible = false;
                        this.vy = -this.vy;
                        this.plane.game.app.stage.removeChild(this.bulletPlaneSprite);

                        //delete alien
                        this.plane.game.aliens.splice(i, 1);
                        alien.visible = false;

                    }
            }
            
        })
    }
}