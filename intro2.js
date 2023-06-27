const Seraphim = PIXI.Sprite.from("ACTUALPNG.png")
const Nahas = PIXI.Sprite.from('sample.png')
const Chaos = PIXI.Sprite.from('Chaos-spirit.png')
const Brightstar = PIXI.Sprite.from('Brightstar.png')
const LostFromLight = PIXI.Sprite.from("Lost_From_Light.png") 
function main(){
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          Intro_Sequence();
        }
      });
    i = 0
    var intro = true
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const app = new PIXI.Application({  width: screenWidth*9/10,
    height: screenHeight*3/4})

    divElement = document.getElementById("villains")
    console.log("is  found")
    divElement.appendChild(app.view)

 
    Seraphim.x = 100
    Seraphim.y = 100
    Seraphim.scale.x = 0.75;
    Seraphim.scale.y = 0.75;
    Seraphim.position.set(1,1)
    app.stage.addChild(Seraphim)


    Nahas.x = 400
    Nahas.y = 100
    Nahas.position.set(400,100)
    Nahas.scale.x = 1.5
    Nahas.scale.y = 1.5
    Nahas.zIndex = 999
    app.stage.addChild(Nahas)
    Nahas.visible = false
    Seraphim.visible = false

    Chaos.x = 500
    Chaos.y = 200
    app.stage.addChild(Chaos)
    Chaos.visible = false

    Brightstar.x = 500
    Brightstar.y = 200
    app.stage.addChild(Brightstar)
    Brightstar.visible = false

    LostFromLight.x = 500
    LostFromLight.y = 200
    app.stage.addChild(LostFromLight)
    LostFromLight.visible = false
}
 function Intro_Sequence(){
    i = i + 1
    if(i == 1){
        document.getElementById("Title").innerHTML = "Hello Chaos Spirit"
    }
    if(i == 2){
        document.getElementById('Title').innerHTML = "You are currently in the Three Realms"
    }
    if(i == 3){
        document.getElementById('Title').innerHTML = "It was a world of wonder. Of magic and gods"
    }
    if(i == 4){
        document.getElementById('Title').innerHTML = "But also of Turmoil"
        document.getElementById("Title").style.color = "red";
    }
    if(i == 5){
        document.getElementById('Title').innerHTML = "Ages ago, two mighty beings appeared in the realm"
    }
    if(i == 6){
     
    document.getElementById('Title').innerHTML = "Seraphim, lord of Light and Virtue"
    document.getElementById('Title').style.color = "yellow"   
    Seraphim.visible = true
    }
    if(i == 7){
        document.getElementById('Title').innerHTML = "And Nahas, demon of knowledge and fate"
        document.getElementById('Title').style.color = "crimson"
        Nahas.visible = true
    }
    if(i == 8){
        document.getElementById('Title').innerHTML = "These beings waged war for centuries, their conflict tearing"+ 
        " the world into three different realms "
        document.getElementById('Title').style.color = "blue"
    }
    if(i == 9){
        document.getElementById('Title').innerHTML = "That is where you come in"
        document.getElementById('Title').style.color = "blue"
        Nahas.visible = false
        Seraphim.visible = false
        Chaos.visible = true
    }
    if(i == 10){
        document.getElementById('Title').innerHTML = "You have the power to break the stalemate."
    }
    if(i == 11){
        document.getElementById('Title').innerHTML = "But your current form cannot exist in this world"
        Chaos.visible = false
    }
    if(i == 12){
        document.getElementById('Title').innerHTML = "To circumvent this, I will provide a vessel for you."
    }
    if(i == 13){
        document.getElementById('Title').innerHTML = "Your first option is Brightstar"
        Brightstar.visible = true
    }
    if(i == 14){
        document.getElementById('Title').innerHTML = "Brightstar is a mortal blessed with divine strength and the lineage of an immortal"
    }
    if(i == 15){
        document.getElementById('Title').innerHTML = "She is a champion of the light, and has a noble stature along with a kind heart"
    }
    if(i == 16){
        document.getElementById('Title').innerHTML = "Your second option is Lost From Light"
        Brightstar.visible = false
        LostFromLight.visible = true
    }
    if(i == 17){
        document.getElementById('Title').innerHTML = "The Lost From Light is a treacherous being, choosing to disobey his masters"
    }
    if(i == 18){
        document.getElementById('Title').innerHTML = "But his treachery is what contributes to his power"
    }
    if(i == 19){
        document.getElementById('Title').innerHTML = "He has a knack for remaining unseen. He also has a mysterious affinity to the soul"
    }
    if(i == 20){
        document.getElementById('Title').innerHTML = "So which do you choose hero?"
        Brightstar.scale.x = 0.25
        Brightstar.scale.y = 0.25
        Brightstar.x = 300
        Brightstar.y = 200
        Brightstar.visible = true
        LostFromLight.x = 700
        LostFromLight.y = 200
    }
    if(i == 21){
        document.getElementById('Title').innerHTML = "Will you bask the world in eternal light?"
        document.getElementById('Title').style.color = "yellow"
    }
    if(i == 22){
        document.getElementById('Title').innerHTML = "Or plunge it into eternal darkness?"
        document.getElementById('Title').style.color = "crimson"
    }
    if(i == 23){
        document.getElementById('Title').innerHTML = "The choice is yours."
    }
    if(i == 24){
        Brightstar.visible = false
        LostFromLight.visible = false
        document.getElementById("Title").style.display = "none"
    }
}


main()