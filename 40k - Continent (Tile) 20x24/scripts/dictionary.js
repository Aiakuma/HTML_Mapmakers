var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var grid_length = 24;
var grid_height = 20;

ctx.lineWidth = 0;
ctx.fillStyle = "rgba(128,255,0,1)";
ctx.fillRect(0,0,1568,1000);

var grid_value_array = new Array(grid_length-1);
for (i = 0; i < grid_length; i++) {
    grid_value_array[i] = new Array(grid_height);
};

var grid_earth_array = new Array(grid_length-1);
for (i = 0; i < grid_length; i++) {
    grid_earth_array[i] = new Array(grid_height);
};

var grid_resources_array = new Array(grid_length-1);
for (i = 0; i < grid_length; i++) {
    grid_resources_array[i] = new Array(grid_height)
}

var grid_bonus_array = new Array(grid_length-1);
for (i = 0; i < grid_length; i++) {
    grid_bonus_array[i] = new Array(grid_height)
};

// INITIALISATION
for (i = 0; i < grid_length; i++) {
    for (j = 0; j < grid_height; j++) {
        grid_resources_array[i][j] = 0;
    }
}

for (i = 0; i < grid_length; i++) {
    for (j = 0; j < grid_height; j++) {
        grid_bonus_array[i][j] = 0;
    }
};