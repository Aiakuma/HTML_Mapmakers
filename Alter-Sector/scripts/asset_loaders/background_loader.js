var background_array = new Array();

function background_img()
{
  img_background = new Image();
  img_background.src = "assets/background/sector_background.png";
  return img_background;
}

function background_tile_img()
{
  img_background = new Image();
  img_background.src = "assets/background/tile_background.png";
  return img_background;
}

background_array[0] = background_img();
background_array[1] = background_tile_img();