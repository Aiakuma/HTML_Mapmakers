var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var grid_length = 4;
var grid_height = 3;

ctx.lineWidth = 0;
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0,0,3072,2304);

var grid_value_array = new Array(grid_length-1);
for (i = 0; i < grid_length; i++) {
    grid_value_array[i] = new Array(grid_height);
};