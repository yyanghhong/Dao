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
const sprite3 = PIXI.Sprite.from('Attack_Button.png')
sprite3.scale.x = 0.15
sprite3.scale.y = 0.15
sprite3.x = 200
sprite3.y = 550
sprite3.eventMode = 'static'
const sprite4 = PIXI.Sprite.from('Actions_Button.png')
sprite4.scale.x = 0.15
sprite4.scale.y = 0.15
sprite4.x = 400
sprite4.y = 550
sprite4.eventMode = 'static'
const sprite5 = PIXI.Sprite.from('Items_Button.png')
sprite5.scale.x = 0.15
sprite5.scale.y = 0.15
sprite5.x = 600
sprite5.y = 550
sprite5.eventMode = 'static'
BattleBackground.beginFill(0xffffff)
BattleBackground.drawRect(0, 0, BattleArea.screen.width*7/10, BattleArea.screen.height*3/5);
BattleBackground.position.set(175, 0);
container.addChild(BattleBackground, sprite1, sprite2, sprite3, sprite4, sprite5)
BattleArea.stage.addChild(container)
sprite3.on('mousedown', () => {
    console.log('Sprite clicked!');
  });
