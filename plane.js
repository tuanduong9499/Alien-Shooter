class Plane{
    constructor(Game){
        this.game = Game;
        this.planeSprite = new PIXI.Sprite.from("assets/plane.png"); 
        this.planeSprite.x = GAME_WIDTH / 2;
        this.planeSprite.y = GAME_HEIGHT - 50;
        this.planeSprite.width = 50;
        this.planeSprite.height = 50;
        this.planeSprite.anchor.set(0.5, 0.5);

        this.bulletPlane = null;
        this.bulletsPlanes = [];
        
        
        

        this.drawPlane();
        this.movePlane();
        this.fireBullet();
        this.collision();

    }
    drawPlane(){
        this.game.app.stage.addChild(this.planeSprite);
    }
    movePlane(){
        document.addEventListener("mousemove", (e) => {
            this.planeSprite.x = e.clientX;
            this.planeSprite.y = e.clientY - 20;
        });
    }
    drawBulletPlane(){
        this.game.app.stage.addChild(this.bulletPlaneSprite);
    }
    fireBullet(){
        setInterval(() => {
            this.bulletPlane = new  BulletPlane(this);
            this.game.fireAudio.play();
        }, 200)
    }
    collision(){
        this.game.app.ticker.add(() => {
            if(this.planeSprite.x >= GAME_WIDTH ){
                this.planeSprite.x = GAME_WIDTH ;
            }
            if(this.planeSprite.x <= 0){
                this.planeSprite.x = 0;
            }
            if(this.planeSprite.y > GAME_HEIGHT){
                this.planeSprite.y = GAME_HEIGHT
            }
            if(this.planeSprite.y < 0){
                this.planeSprite.y = 0;
            }
        })
    }


}