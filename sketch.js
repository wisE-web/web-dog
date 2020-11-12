//Create variables here
var happyDog, dogimg;
var dog;
var foodS,foodStock;
var count;
function preload()
{
  //load images here
  happyDog = loadImage("images/happy.png");
  dogimg = loadImage("images/dog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,30,30);
  dog.scale = 0.2;
  count = 20;
  dog.addImage(happyDog);
 text("food left : " + count,200,150);




 if (keyCode===32) {
  count=count-1;
}
}


function draw() {  

  drawSprites();
  //add styles here

}



