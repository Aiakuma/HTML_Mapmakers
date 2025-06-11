//// TILES
// VARIABLE
var tiles_img_array = new Array();
// FUNCTION
function tile_plain()
{
  image_plain = new Image()
  image_plain.src = "assets/tiles/plain.png"
  return image_plain
};

function tile_hill()
{
  image_hill = new Image()
  image_hill.src = "assets/tiles/hill.png"
  return image_hill
};

function tile_mountain()
{
  image_mountain = new Image()
  image_mountain.src = "assets/tiles/mountain.png"
  return image_mountain
};

// ARRAY_FILLER
tiles_img_array[0] = tile_plain();
tiles_img_array[1] = tile_plain();
tiles_img_array[2] = tile_mountain();
////

////// ---------------- //////

//// RIVER
// VARIABLE
var river_img_array = new Array();
// FUNCTION
function river_0()
{
  image_river_0 = new Image()
  image_river_0.src = "assets/river/river_0.png"
  return image_river_0
};

function river_1_1()
{
  image_river_1_1 = new Image()
  image_river_1_1.src = "assets/river/river_1_1.png"
  return image_river_1_1
};

function river_1_3()
{
  image_river_1_3 = new Image()
  image_river_1_3.src = "assets/river/river_1_3.png"
  return image_river_1_3
};

function river_1_4()
{
  image_river_1_4 = new Image()
  image_river_1_4.src = "assets/river/river_1_4.png"
  return image_river_1_4
};


function river_1_6()
{
  image_river_1_6 = new Image()
  image_river_1_6.src = "assets/river/river_1_6.png"
  return image_river_1_6
};

function river_2_14()
{
  image_river_2_14 = new Image()
  image_river_2_14.src = "assets/river/river_2_14.png"
  return image_river_2_14
};

function river_2_63()
{
  image_river_2_63 = new Image()
  image_river_2_63.src = "assets/river/river_2_63.png"
  return image_river_2_63
};

function river_2_13()
{
  image_river_2_13 = new Image()
  image_river_2_13.src = "assets/river/river_2_13.png"
  return image_river_2_13
};

function river_2_46()
{
  image_river_2_46 = new Image()
  image_river_2_46.src = "assets/river/river_2_46.png"
  return image_river_2_46
};

// ARRAY_FILLER
river_img_array[0] = river_0();
river_img_array[1] = river_1_1();
river_img_array[2] = river_1_6();
river_img_array[3] = river_2_14();
river_img_array[4] = river_2_63();
river_img_array[5] = river_2_13();
river_img_array[6] = river_2_46();
river_img_array[7] = river_1_3();
river_img_array[8] = river_1_4();
////

////// ---------------- //////

//// FOREST
// VARIABLE
var forest_img_array = new Array();
// FUNCTION
function forest()
{
  image_forest = new Image()
  image_forest.src = "assets/forest/forest_144.png"
  return image_forest
};
// ARRAY_FILLER
forest_img_array[0] = forest()
////

////// ---------------- //////

//// RESOURCES
// VARIABLE
var resources_img_array = new Array();
// FUNCTION
function main_objective()
{
  image_main_objective = new Image()
  image_main_objective.src = "assets/resources/main_objective.png"
  return image_main_objective
};
// ARRAY_FILLER
resources_img_array[0] = main_objective();
////

////// ---------------- //////

//// CITY
// VARIABLE
var cities_img_array = new Array();
// FUNCTION
function small_city()
{
  image_small_city = new Image()
  image_small_city.src = "assets/city/small_city.png"
  return image_small_city
};
// ARRAY_FILLER
cities_img_array[0] = small_city();
////