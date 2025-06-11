//// INITIALISATION
small_hex_array = new Array();
medium_hex_array = new Array();
large_hex_array = new Array();
massive_hex_array = new Array();

//// SMALL HEX
// SMALL_HEX INDEX
function small_hex_sea()
{
    small_hex_sea_img = new Image();
    small_hex_sea_img.src = "assets/a_small_hex/small_hex_sea.png";
    return small_hex_sea_img;
}

function small_hex_land()
{
    small_hex_land_img = new Image();
    small_hex_land_img.src = "assets/a_small_hex/small_hex_land.png";
    return small_hex_land_img;
}

function small_hex_hill()
{
    small_hex_hill_img = new Image();
    small_hex_hill_img.src = "assets/a_small_hex/small_hex_hill.png";
    return small_hex_hill_img;
}

function small_hex_mountain()
{
    small_hex_mountain_img = new Image();
    small_hex_mountain_img.src = "assets/a_small_hex/small_hex_mountain.png";
    return small_hex_mountain_img;
}

// SMALL_HEX LOADER
small_hex_array[0] = small_hex_sea()
small_hex_array[1] = small_hex_land()
small_hex_array[2] = small_hex_hill()
small_hex_array[3] = small_hex_mountain()
////

//// MEDIUM HEX
// MEDIUM_HEX INDEX
// MEDIUM_HEX LOADER
////

//// LARGE HEX
// LARGE_HEX INDEX
// LARGE_HEX LOADER
////

//// MASSIVE HEX
// MASSIVE_HEX LOADER
function massive_hex_back()
{
    massive_hex_back_img = new Image();
    massive_hex_back_img.src = "assets/d_massive_hex/massive_hex_back.png";
    return massive_hex_back_img;
};
function massive_hex_front()
{
    massive_hex_front_img = new Image();
    massive_hex_front_img.src = "assets/d_massive_hex/massive_hex_front.png";
    return massive_hex_front_img;
};
// MASSIVE_HEX INDEX
massive_hex_array[0] = massive_hex_back()
massive_hex_array[1] = massive_hex_front()
////