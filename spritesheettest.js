const app = new PIXI.Application({ autoStart: false });
document.body.appendChild(app.view);

PIXI.Assets.load('goblinanimations.json').then(() => {
    // create an array to store the textures

    const attack = PIXI.Texture.from('Goblin_Slice.png');
    
});
