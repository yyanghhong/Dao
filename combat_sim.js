const screenWidth = screen.width;
const screenHeight = screen.height;
const BattleArea = new PIXI.Application({  width: screenWidth,
height: screenHeight})
document.body.appendChild(BattleArea.view);
const container = new PIXI.Container();
const BattleBackground = new PIXI.Graphics();
const sprite1 = PIXI.Sprite.from('enemy_placeholder.png');
sprite1.scale.x = 0.25
sprite1.scale.y = 0.25
sprite1.x = 1000
sprite1.y = 150
const sprite2 = PIXI.Sprite.from('player_character_placeholder.png')
sprite2.scale.x = 0.25
sprite2.scale.y = 0.25
sprite2.x = 200
sprite2.y = 150
BattleBackground.beginFill(0xffffff)
BattleBackground.drawRect(0, 0, BattleArea.screen.width*7/10, BattleArea.screen.height*3/5);
BattleBackground.position.set(175, 0);
container.addChild(BattleBackground, sprite1, sprite2)
BattleArea.stage.addChild(container)
