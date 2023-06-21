
function main(){
    i = 0
    var intro = true
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const app = new PIXI.Application({  width: screenWidth*9/10,
    height: screenHeight*3/4})

    divElement = document.getElementById("villains")
    if (divElement) {
        console.log("is found")
        divElement.appendChild(app.view)

        const Seraphim = PIXI.Sprite.from("ACTUALPNG.png")
        Seraphim.x = 100
        Seraphim.y = 100
        Seraphim.scale.x = 0.75;
        Seraphim.scale.y = 0.75;
        Seraphim.position.set(1,1)
        app.stage.addChild(Seraphim)

        const Nahas = PIXI.Sprite.from('sample.png')
        Nahas.x = 400
        Nahas.y = 100
        Nahas.position.set(400,100)
        Nahas.scale.x = 1.5
        Nahas.scale.y = 1.5
        Nahas.zIndex = 999
        app.stage.addChild(Nahas)
    } else {
        console.log("not found")
    }
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
        document.getElementById('Title').innerHTML = "It is a world of wonder Of magic and gods"
    }
    if(i == 4){
        document.getElementById('Title').innerHTML = "But also of Turmoil"
        document.getElementById("Title").style.color = "red";
    }
    if(i == 5){
        document.getElementById('Title').innerHTML = "Ages ago, two mighty beings appeared in the realms"
    }
    if(i == 6){
     
    document.getElementById('Title').innerHTML = "Seraphim, lord of Light and Virtue"
    document.getElementById('Title').style.color = "yellow"   
    }
    if(i == 7){
        document.getElementById('Title').innerHTML = "And Nahas, demon of knowledge and sin"
        document.getElementById('Title').style.color = "crimson"

    }
}


main()