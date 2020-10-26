class food{
    constructor(){
         this.foodStock = 0;
         this.lastFed
         this.image = loadImage("images/Milk.png")
    }
    Display(){
        var x=80, y=100;

        imageMode(CENTER);
        //image(this.image,x,y,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10==0){
                    x=80;
                    y=y=50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }}
        updateFoodStock(foodStock){
            this.foodStock = foodStock
        }
        getFoodStock(){
            this.foodStock
        }
        feedDog(){
            dog.addImage(happyDog)

            foodObj.updateFoodStock(foodObj.getFoodStock()-1);
            database.ref('/').update({
                Food:foodObj.getFoodStock(),
                FeedTime:hour()
            })
        }
        addFood() {
            foodS++;
            database.ref('/').update({
                Food:foodS
            })
        }

    bedroom(){
        background(dogBedroom, 550,500)
    }
    garden(){
        background(dogGarden, 550,500)
    }
    bathroom(){
        background(dogBathroom, 550,500)
    }}