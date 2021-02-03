function preload(){
  blueImg = loadImage("BlueB.png")
  pinkImg = loadImage("PinkB.png")
  purpleImg = loadImage("PurpleB.png")
  orangeImg = loadImage("OrangeB.png")
  arrowImg = loadImage("Arrow1.png")
  bowImg = loadImage("Bow.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-160);
  bow = createSprite(displayWidth/2,displayHeight-270)
  bow.addImage(bowImg)
  bow.scale = 0.4
  bow.rotation=-90
}

function draw() {
  background("green");
  bow.x = mouseX
  if (frameCount%50===0) {
    switch(Math.round(random(1,4))){
      case 1 : blueb()
      break
      case 2 : pinkb()
      break
      case 3 : purpleb()
      break
      case 4 : orangeb()
      break
    }
  }

if(keyDown("space")){
  arrows()
}
  drawSprites();
}

function blueb(){
  blue = createSprite(random(100,displayWidth-200),0)
  blue.velocityY = 2
  blue.addImage(blueImg)
  blue.scale = 0.3
}
function pinkb(){
  pink = createSprite(random(100,displayWidth-200),0)
  pink.velocityY = 2
  pink.addImage(pinkImg)
  pink.scale = 0.5
}
function purpleb(){
  purple = createSprite(random(100,displayWidth-200),0)
  purple.velocityY = 2
  purple.addImage(purpleImg)
  purple.scale = 0.3
}
function orangeb(){
  orange = createSprite(random(100,displayWidth-200),0)
  orange.velocityY = 2
  orange.addImage(orangeImg)
  orange.scale = 0.25
}
function arrows(){
  arrow = createSprite(bow.x,displayHeight-230)
  arrow.velocityY = -2
  arrow.addImage(arrowImg)
  arrow.rotation=-45
  arrow.scale = 0.25
}