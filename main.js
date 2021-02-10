var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
      player_object=Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({
          top:player_y,left:player_x
      });
      canvas.add(player_object);
    });
}
//player_update();
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
     block_image_object=img;
     block_image_object.scaleToWidth(block_image_width);
     block_image_object.scaleToHeight(block_image_height);
     block_image_object.set({
         top:player_y,left:player_x
     });
     canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.keyCode=="80"&& e.shiftKey==true){
        console.log("shift&p pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.keyCode=="77"&& e.shiftKey==true){
        console.log("shift&m pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
        if(keypressed=="37"){
            left()
            console.log("leftkeypressed");
        }
        if(keypressed=="38"){
            up()
            console.log("upkeypressed");
        }
        if(keypressed=="39"){
            right()
            console.log("rightkeypressed");
        }
        if(keypressed=="40"){
            down()
            console.log("downkeypressed");
        }
        
        if(keypressed=="72"){
            new_image("hulk_face.png");
            console.log("h pressed");
        }
        if(keypressed=="85"){
            new_image("hulk_left_hand.png");
            console.log("u pressed");
        }
        if(keypressed=="76"){
            new_image("hulk_legs.png");
            console.log("l pressed");
        }
        if(keypressed=="75"){
            new_image("hulk_right_hand.png");
            console.log("k pressed");
        }
        if(keypressed=="68"){
            new_image("hulkd_body.png");
            console.log("d pressed");
        }
        if(keypressed=="73"){
            new_image("ironman_body.png");
            console.log("i pressed");
        }
        if(keypressed=="82"){
            new_image("ironman_face.png");
            console.log("r pressed");
        }
        if(keypressed=="79"){
            new_image("ironman_left_hand.png");
            console.log("o pressed");
        }
        if(keypressed=="78"){
            new_image("ironman_legs.png");
            console.log("n pressed");
        }
        if(keypressed=="65"){
            new_image("ironman_right_hand.png");
            console.log("a pressed");
        }
    
}
function up(){
    if(player_y>0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
        console.log("x="+player_x+"y="+player_y)
    }
} 
function down(){
    if(player_y<500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
        console.log("x="+player_x+"y="+player_y);
    }
}  
function right(){
    if(player_x<900){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
        console.log("x="+player_x+"y="+player_y);
    }
}   
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
        console.log("x="+player_x+"y="+player_y);
    }
}





