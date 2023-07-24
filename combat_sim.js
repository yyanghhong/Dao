// Mob values 
var mob = function(name, health, attack, defense, description){
  this.name = name;
  this.health = health+" hp";
  this.attack = attack+" atk";
  this.defense = defense+" def";
  this.description = description
}
var slime = new mob("Slime", 20, 1, 0, "Second weakest enemy in the world.  Created by ??? as a tutorial monster")
var goblin = new mob("Goblin", 30, 5, 10, "A failed experiment of Seeker Gestalt created a humanoid monster without a Soul")
var oldman = new mob("Old man", 5, 0, 0, "Weakest enemy in the world.  An old, forgotten relic of the past")
var scholar = new mob("kkk", 50, 10, 10, "A scholar of Nahas.  Knows a fair bit of Dark magic and Weave")
var silentwitness = new mob('Silent Witness', 80, 3, 20, "On the night of the wedding, the attendees watched in fear as the Beast"+
" performed his vile acts.  Their eyes are blind from the horror and their mouths sewn shut, the Beast will never face punishment.")

var weapon = function(name, damage, accuracy, description, ability) {
  this.name = name;
  this.damage = damage+" dmg";
  this.accuracy = accuracy;
  this.description = description;
  this.ability = ability;
}
var longsword = new weapon("Longsword", 1+"-"+8, 70, "The quintessential weapon of any warrior.  Does moderate damage and has decent accuracy", "none")
var dagger = new weapon('Dagger',1+"-"+4, 90, "Sex", "Automatic crit when attacking from suprise")
var bow = new weapon("Bow",1+'-'+12, 60, "A weapon meant for masters.", "Accuracy rises by 10 for every skill level")
var item = function(name, value, use){
  this.name = name;
  this.value = value+" gp";
  this.use = use;
}
var weakhealthpot = new item('HP potion weak', 10, "Heals between 5-10 hp per use")
var normalhealthpot = new item('HP potion normal', 30, "Heals between 10-25 hp per use")
var stronghealthpot = new item('HP potion strong', 100, "Heals between 40-50 hp per use")

// Setting up the screen 4-92
const screenWidth = screen.width;
const screenHeight = screen.height;
const BattleArea = new PIXI.Application({  width: screenWidth,
height: screenHeight})
document.body.appendChild(BattleArea.view);
const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  // fontWeight: 'bold',
  // fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  // dropShadowAngle: Math.PI / 6,
  // dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
  lineJoin: 'round',
});
const battletext = new PIXI.Text('It is the beginning', style);
battletext.x = 500;
battletext.y = 650;
const hitormiss = new PIXI.Text('E',style)
hitormiss.x = 1000
hitormiss.y = 100
hitormiss.visible = false
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
const sprite6 = PIXI.Sprite.from('Health.png')
sprite6.scale.x = 0.20
sprite6.scale.y = 0.20
sprite6.x = 30
BattleBackground.beginFill(0xffffff)
BattleBackground.drawRect(0, 0, BattleArea.screen.width*7/10, BattleArea.screen.height*3/5);
BattleBackground.position.set(175, 0);
container.addChild(BattleBackground, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6)
BattleArea.stage.addChild(container)
container.addChild(battletext, hitormiss)
function updateText(newText) {
  battletext.text = newText;
}
function updateText2(newText) {
  hitormiss.text = newText;
}
sprite3.on('mousedown', () => {
  updateText("longsword");
  sprite1.eventMode = 'static'
  });
sprite1.on('mousedown', ()=>{
  var attackchance = Math.random()*10
  hitormiss.visible = true
  if(attackchance < 5){
    updateText2("Miss")
    sprite1.eventMode = "passive"
  }
  else{
    updateText2("Hit")
    sprite1.eventMode = "Passive"
  }
})
