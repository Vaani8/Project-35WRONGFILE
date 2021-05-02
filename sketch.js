var dog , happyDog , database , foodS , foodStock , readStock
function preload(){
dog=loadImage("Dog.png");
happyDog=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog1=createSprite(250,450,60,100);
  dog1.addImage(dog);
database = firebase.database();
  var foodStock=database.ref('food')
  foodStock.on("value",readStock);
}

function draw() {  
    background(46, 139, 87)

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
    }
  drawSprites();
    text("Food Stocks : ")
    fill('white');

    text("Press UP ARROW KEY to feed Drago Milk!");
    fill('white');
    // Function to read value from DB
    function readStock(data){
      foodS=data.val();
    }
    // Function to read value in DB 
    function writeStock(x){
      if(x<=0){
        x=0
      }else{
        x=x+1
      }
      database.ref('/').update({
        food : x
      })
    }
}