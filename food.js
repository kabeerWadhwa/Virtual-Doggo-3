class food{
    constructor(){
         this.foodStock = 0;
         this.lastFed
         this.image = loadImage("images/Milk.png")
    }
    display(){
        background(46,139,89)
        //textSize(25);
        //fill("black")
        //text("Use the up arrow key to feed Tango", 70, 450)
        fill(255,255,254)
        textSize(15);
        if(lastFed>=12){
        text("Last Feed : "+ lastfed%12 + "PM", 350,30)
        }else if(lastFed==0){
        text("Last Feed : 12 AM", 350,30);
        }else{
        text("Last Feed :"+ lastFed + "AM", 350,30)
        }
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
            return this.foodStock
        }
        /*feedDog(){
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
        }*/

        deductFood(){
            if(this.foodStock>0){
                this.foodStock = this.foodStock - 1;
            }
        }

        getFedTime(lastFed){
            this.lastFed = lastFed
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