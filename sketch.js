var gardenImg,tom1Img,tom2Img,tom3Img,jerry1,jerry2,jerry3
var tom,jerry

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png")
    tom1Img=loadAnimation("images/tomOne.png")
    tom2Img=loadAnimation("images/tomTwo.png","images/tomThree.png")
    tom3Img=loadAnimation("images/tomFour.png")
    jerry1=loadAnimation("images/jerryOne.png")
    jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    jerry3=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(850,600,10,10)
    tom.addAnimation("tom",tom1Img)
    tom.scale=0.2
    jerry=createSprite(200,600,10,10)
    jerry.addAnimation("jerry",jerry1)
    jerry.scale=0.1

}

function draw() {

    background(gardenImg);
    if (tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0
        tom.addAnimation("tomStanding",tom3Img)
        tom.x=300
        tom.scale=0.2
        tom.changeAnimation("tomStanding")
        jerry.addAnimation("jerryImage",jerry3)
        jerry.scale=0.15
        jerry.changeAnimation("jerryImage")
        tom.velocityX=0
    }
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
}


function keyPressed(){
if (keyCode==LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tom2Img)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerryTeasing",jerry2)
    jerry.frameDelay=250
    jerry.changeAnimation("jerryTeasing")
}
  //For moving and changing animation write code here


}
