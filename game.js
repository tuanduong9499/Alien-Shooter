class Game{
    constructor(){
        this.app = null;
        this.aliens = [];
        this.alien = null;
        this.plane = null;
        this.score = 0;
        this.startGameSprite = null;
        this.init(); 
        this.gameStartScene();
    }
    init(){
        this.app = new PIXI.Application({
            width : 300,
            height : 600
        });
        document.body.appendChild(this.app.view);

        //background
        const texture = PIXI.Texture.from("assets/background3.png");
        const backgroundSprite = new PIXI.TilingSprite(
            texture,
            this.app.screen.width,
            this.app.screen.height,
        );
        this.app.ticker.add(() => {
                backgroundSprite.tilePosition.y += 2;
        })
        this.app.stage.addChild(backgroundSprite);
    }
    draw(){
        

        //score
        this.scoreText = new PIXI.Text("Score : " + this.score, {fill : 0xffffff});
        this.scoreText.x = 0;
        this.scoreText.y = 560;
        this.app.stage.addChild(this.scoreText);

        //alien
        setInterval(() => {
            this.alien = new Alien(this);
            this.aliens.push(this.alien);
            
        }, 500);

        //plane
        this.plane = new Plane(this);

        
    }
    gameStartScene(){
        this.startGameSprite = new PIXI.Sprite.from("assets/startGame.png");
        this.startGameSprite.interactive = true;
        this.startGameSprite.x =50;
        this.startGameSprite.y = 200;
        this.startGameSprite.width = 200;
        this.startGameSprite.height = 200;
        this.app.stage.addChild(this.startGameSprite);

       
        this.startGameSprite.on("click", (e) => {
            this.startGameSprite.visible = false;
            this.draw();
        })
    }
    


 
 
}

var g = new Game();
