var images = new Array();
var bonus = new Array();
var resources = new Array();

function tile_rift()
{
  image_rift = new Image()
  image_rift.src = "tiles/rift.png"
  return image_rift
}

function tile_coast()
{
  image_coast = new Image()
  image_coast.src = "tiles/coast.png"
  return image_coast
}

function tile_sea()
{
  image_sea = new Image()
  image_sea.src = "tiles/sea.png"
  return image_sea
}

function tile_plain()
{
  image_plain = new Image()
  image_plain.src = "tiles/plain.png"
  return image_plain
}

function tile_hill()
{
  image_hill = new Image()
  image_hill.src = "tiles/hill.png"
  return image_hill
}

function tile_mountain()
{
  image_mountain = new Image()
  image_mountain.src = "tiles/mountain.png"
  return image_mountain
}

images[0] = tile_rift();
images[1] = tile_sea();
images[2] = tile_coast();
images[3] = tile_plain();
images[4] = tile_hill();
images[5] = tile_mountain();

//

function tile_desert()
{
  image_desert = new Image()
  image_desert.src = "tiles/bonus/desert.png"
  return image_desert
}

function tile_plate()
{
  image_plate = new Image()
  image_plate.src = "tiles/bonus/plate.png"
  return image_plate
}

function tile_forest()
{
  image_forest = new Image()
  image_forest.src = "tiles/bonus/forest.png"
  return image_forest
}

function tile_marsh()
{
  image_marsh = new Image()
  image_marsh.src = "tiles/bonus/marsh.png"
  return image_marsh
}

bonus[0] = tile_desert();
bonus[1] = tile_plate();
bonus[2] = tile_forest();
bonus[3] = tile_marsh();

//

function tile_res_1()
{
  image_res_1 = new Image()
  image_res_1.src = "tiles/resources/res_1.png"
  return image_res_1
}

function tile_res_2()
{
  image_res_2 = new Image()
  image_res_2.src = "tiles/resources/res_2.png"
  return image_res_2
}

function tile_res_3()
{
  image_res_3 = new Image()
  image_res_3.src = "tiles/resources/res_3.png"
  return image_res_3
}

resources[0] = tile_res_1();
resources[1] = tile_res_2();
resources[2] = tile_res_3();