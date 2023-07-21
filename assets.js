const screenWidth = screen.width;
const screenHeight = screen.height;
const BattleArea = new PIXI.Application({  width: screenWidth,
height: screenHeight})
const container = new PIXI.Container();
const BattleBackground = new PIXI.Graphics();
const sprite1 = PIXI.Sprite.from('enemy_placeholder.png');
const sprite2 = PIXI.Sprite.from('player_character_placeholder.png')
const sprite3 = PIXI.Sprite.from('Attack_Button.png')
const sprite4 = PIXI.Sprite.from('Actions_Button.png')
const sprite5 = PIXI.Sprite.from('Items_Button.png')