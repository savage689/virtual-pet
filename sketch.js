//Create variables here

var dog,dogImage;
var database;
var foodS,foodStock;
var happyDog;

function preload()
{
  //load images here
  
dogImage = loadImage("Dog.png");
happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(800, 700); 
  dog = createSprite(400,350,12,12);
  dog.addImage(dogImage,happyDog);
  

  
  database = firebase.database();
  console.log(database);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  drawSprites();

  dog.display();
  //add styles here

}



