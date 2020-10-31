//Create variables here
var Dog,happyDog,database,foodS,foodStock,dogBedroom,dogBathroom,dogGarden
var Feed,addFoods,feedDog
var foodObj
var lastFed, feedTime
var readState,changeState
function preload()
{
  //load images here
   Dog = loadImage("images/dogImg.png")
   happyDog = loadImage("images/dogImg1.png")
   dogBathroom = loadImage("virtual pet images/Wash Room.png")
   dogBedroom = loadImage("virtual pet images/Bed Room.png")
   dogGarden = loadImage("virtual pet images/Garden.png")
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(250,250,20,20)
  dog.addImage(Dog)
  dog.scale = 0.5;
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  foodObj = new food();
  fedTime = database.ref('feedTime')
  fedTime.on("value", function(data){
    lastFed = data.val()
  })
  /*Food = createSprite(100,100,20,20)
  Food.addImage(
  Food.scale = 0.2;*/

  readState=database.ref('gameState');
  readState.on("value", function(data){
    gameState = data.val();
  });

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Foods")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() {  
background(46,139,87)
/*fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){
})*/

currentTime=hour();
  if(currentTime==(lastFed+1)){
    update("Playing")
    foodObj.garden();
  }else if(currentTime==(lastFed+2)){
    update("Sleeping")
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("Bathing")
    foodObj.washroom();
  }else{
    update("Hungry")
    foodObj.display();
  }
if(gameState!="Hungry"){
  feed.hide()
  addFood.hide()
  dog.remove()
}else{
  feed.show()
  addFood.show()
  dog.addImage(Dog)
}

  drawSprites();
  //add styles here

}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
foodObj.updateFoodStock(foodS)
}

//Function to write values in DB
/*function writeStock(x){

  if(x<= 0){
    x= 0;
  }else{
    x= x-1;
  }
    database.ref('/').update({
      Food:x
    })
}*/

function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

function update(state){
  database.ref('/').update({
    gameState:state
  });
}

function feedDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),feedTime:hour(),gameState:"Hungry"
  })
}