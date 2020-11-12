var canvas = new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

var player_object = "";

block_width = 30;
block_height = 30;

var block_object = "";

function playerf(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set(
         {
             top:player_y,
             left:player_x
         }  
        );
        canvas.add(player_object);
    });
}
function newimage(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set(
         {
             top:player_y,
             left:player_x
         }  
        );
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    KeyPressed = e.keyCode;
    console.log("entered into keydown");
    if(e.shiftkey == true && KeyPressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("C_width").innerHTML=block_width;
        document.getElementById("C_height").innerHTML=block_height;
        console.log("shift+p");
    }
    if(e.shiftkey == true && KeyPressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("C_width").innerHTML=block_width;
        document.getElementById("C_height").innerHTML=block_height;
        console.log("shift+m");
    }
    if(KeyPressed == '38'){
        up()
        console.log("up");
    }
    if(KeyPressed == '40'){
        down()
        console.log("down");
    }
    if(KeyPressed == '39'){
        right()
        console.log("right");
    }
    if(KeyPressed == '37'){
        left()
        console.log("left");
    }
    if(KeyPressed = '67'){
        newimage('cloud.jpg');
        console.log("cloud");
    }
    if(KeyPressed = '68'){
        newimage('dark_green.png');
        console.log("dark green");
    }
    if(KeyPressed = '71'){
        newimage('ground.png');
        console.log("ground");
    }
    if(KeyPressed = '76'){
        newimage('light_green.png');
        console.log("light green");
    }
    if(KeyPressed = '82'){
        newimage('roof.jpg');
        console.log("roof");
    }
    if(KeyPressed = '84'){
        newimage('trunk.jpg');
        console.log("trunk");
    }
    if(KeyPressed = '85'){
        newimage('unique.png');
        console.log("unique");
    }
    if(KeyPressed = '87'){
        newimage('wall.jpg');
        console.log("wall");
    }
    if(KeyPressed = '89'){
        newimage('yellow_wall.png');
        console.log("yellow_wall");
    }
}