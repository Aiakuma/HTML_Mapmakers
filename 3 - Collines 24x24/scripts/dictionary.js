var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//ctx.fillStyle = "#88CC00";
//ctx.fillRect(0,0,3136,1956);

// -------------------------------------- //

// GRID SIZE
grid_height = 24;
grid_length = 24;

// TILE SIZE
tile_size = 64;

// LEVEL
level_0 = 0;
level_1 = 1;
level_2 = 2;
level_3 = 3;

// BONUS
forest_luck = 0;
building_luck = 0;
crater_luck = 0;

// -------------------------------------- //

// PAS TOUCHER //
tq1s = tile_size/4; // Tile Quarter Size - 16/64
tq2s = tq1s * 2; // 32/64
tq3s = tq1s * 3; // 48/64
tq4s = tq1s * 4; // 64/64
tq5s = tq1s * 5; // 80/64
tq6s = tq1s * 6; // 96/64
tq7s = tq1s * 7; // 112/64
tq8s = tq1s * 8; // 128/64
tq9s = tq1s * 9; // 144/64
tq10s = tq1s * 10; // 160/64

grid_height = grid_height + 1;
grid_length = grid_length + 1;