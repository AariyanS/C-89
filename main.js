var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var height = screen.height;

new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

function my_touchmove(e)
{
    console.log("my_touchMove");
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    
}