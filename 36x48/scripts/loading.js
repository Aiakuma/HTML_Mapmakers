var background = new Array();
var tile_square = new Array();
var height_tile_rect = new Array();
var width_tile_rect = new Array();

// BACKGROUND //
function tile_background()
{
    image_background = new Image();
    image_background.src = "tiles/background.png"
    return image_background
}

background[0] = tile_background();

// TILE SQUARE //
function tile_hill_1()
{
    image_hill_1 = new Image();
    image_hill_1.src = "tiles/hill_1.png"
    return image_hill_1
}

function tile_hill_2()
{
    image_hill_2 = new Image();
    image_hill_2.src = "tiles/hill_2.png"
    return image_hill_2
}

function tile_hill_3()
{
    image_hill_3 = new Image();
    image_hill_3.src = "tiles/hill_3.png"
    return image_hill_3
}

function tile_hill_4()
{
    image_hill_4 = new Image();
    image_hill_4.src = "tiles/hill_4.png"
    return image_hill_4
}

function tile_building_1()
{
    image_building_1 = new Image();
    image_building_1.src = "tiles/building_1.png"
    return image_building_1
}

function tile_building_2()
{
    image_building_2 = new Image();
    image_building_2.src = "tiles/building_2.png"
    return image_building_2
}

function tile_building_3()
{
    image_building_3 = new Image();
    image_building_3.src = "tiles/building_3.png"
    return image_building_3
}

function tile_building_4()
{
    image_building_4 = new Image();
    image_building_4.src = "tiles/building_4.png"
    return image_building_4
}

function tile_crater_1()
{
    image_crater_1 = new Image();
    image_crater_1.src = "tiles/crater_1.png"
    return image_crater_1
}

function tile_crater_2()
{
    image_crater_2 = new Image();
    image_crater_2.src = "tiles/crater_2.png"
    return image_crater_2
}

function tile_crater_3()
{
    image_crater_3 = new Image();
    image_crater_3.src = "tiles/crater_3.png"
    return image_crater_3
}

function tile_crater_4()
{
    image_crater_4 = new Image();
    image_crater_4.src = "tiles/crater_4.png"
    return image_crater_4
}

function tile_forest_1()
{
    image_forest_1 = new Image();
    image_forest_1.src = "tiles/forest_1.png"
    return image_forest_1
}

function tile_forest_2()
{
    image_forest_2 = new Image();
    image_forest_2.src = "tiles/forest_2.png"
    return image_forest_2
}

function tile_forest_3()
{
    image_forest_3 = new Image();
    image_forest_3.src = "tiles/forest_3.png"
    return image_forest_3
}

function tile_forest_4()
{
    image_forest_4 = new Image();
    image_forest_4.src = "tiles/forest_4.png"
    return image_forest_4
}

function tile_pipe_1()
{
    image_pipe_1 = new Image();
    image_pipe_1.src = "tiles/pipe_1.png"
    return image_pipe_1
}

function tile_pipe_2()
{
    image_pipe_2 = new Image();
    image_pipe_2.src = "tiles/pipe_2.png"
    return image_pipe_2
}

function tile_pipe_3()
{
    image_pipe_3 = new Image();
    image_pipe_3.src = "tiles/pipe_3.png"
    return image_pipe_3
}

function tile_pipe_4()
{
    image_pipe_4 = new Image();
    image_pipe_4.src = "tiles/pipe_4.png"
    return image_pipe_4
}


tile_square[0] = tile_hill_1();
tile_square[1] = tile_hill_2();
tile_square[2] = tile_hill_3();
tile_square[3] = tile_hill_4();
tile_square[4] = tile_building_1();
tile_square[5] = tile_building_2();
tile_square[6] = tile_building_3();
tile_square[7] = tile_building_4();
tile_square[8] = tile_crater_1();
tile_square[9] = tile_crater_2();
tile_square[10] = tile_crater_3();
tile_square[11] = tile_crater_4();
tile_square[12] = tile_forest_1();
tile_square[13] = tile_forest_2();
tile_square[14] = tile_forest_3();
tile_square[15] = tile_forest_4();
tile_square[16] = tile_pipe_1();
tile_square[17] = tile_pipe_2();
tile_square[18] = tile_pipe_3();
tile_square[19] = tile_pipe_4();

// HEIGHT RECTANGLE

function tile_hill_61()
{
    image_hill_61 = new Image();
    image_hill_61.src = "tiles/hill_61.png"
    return image_hill_61
}

function tile_hill_62()
{
    image_hill_62 = new Image();
    image_hill_62.src = "tiles/hill_62.png"
    return image_hill_62
}

function tile_building_61()
{
    image_building_61 = new Image();
    image_building_61.src = "tiles/building_61.png"
    return image_building_61
}

function tile_building_62()
{
    image_building_62 = new Image();
    image_building_62.src = "tiles/building_62.png"
    return image_building_62
}

function tile_forest_61()
{
    image_forest_61 = new Image();
    image_forest_61.src = "tiles/forest_61.png"
    return image_forest_61
}

function tile_forest_62()
{
    image_forest_62 = new Image();
    image_forest_62.src = "tiles/forest_62.png"
    return image_forest_62
}

function tile_pipe_61()
{
    image_pipe_61 = new Image();
    image_pipe_61.src = "tiles/pipe_61.png"
    return image_pipe_61
}

function tile_crater_61()
{
    image_crater_61 = new Image();
    image_crater_61.src = "tiles/crater_61.png"
    return image_crater_61
}

function tile_generator_61()
{
    image_generator_61 = new Image();
    image_generator_61.src = "tiles/generator_61.png"
    return image_generator_61
}

height_tile_rect[0] = tile_hill_61();
height_tile_rect[1] = tile_hill_62();
height_tile_rect[2] = tile_building_61();
height_tile_rect[3] = tile_building_62();
height_tile_rect[4] = tile_forest_61()
height_tile_rect[5] = tile_forest_62()
height_tile_rect[6] = tile_pipe_61()
height_tile_rect[7] = tile_crater_61()
height_tile_rect[8] = tile_generator_61()

// WIDTH RECTANGLE

function tile_hill_51()
{
    image_hill_51 = new Image();
    image_hill_51.src = "tiles/hill_51.png"
    return image_hill_51
}

function tile_hill_52()
{
    image_hill_52 = new Image();
    image_hill_52.src = "tiles/hill_52.png"
    return image_hill_52
}

function tile_building_51()
{
    image_building_51 = new Image();
    image_building_51.src = "tiles/building_51.png"
    return image_building_51
}

function tile_building_52()
{
    image_building_52 = new Image();
    image_building_52.src = "tiles/building_52.png"
    return image_building_52
}

function tile_forest_51()
{
    image_forest_51 = new Image();
    image_forest_51.src = "tiles/forest_51.png"
    return image_forest_51
}

function tile_forest_52()
{
    image_forest_52 = new Image();
    image_forest_52.src = "tiles/forest_52.png"
    return image_forest_52
}

function tile_pipe_51()
{
    image_pipe_51 = new Image();
    image_pipe_51.src = "tiles/pipe_51.png"
    return image_pipe_51
}

function tile_crater_51()
{
    image_crater_51 = new Image();
    image_crater_51.src = "tiles/crater_51.png"
    return image_crater_51
}

function tile_generator_51()
{
    image_generator_51 = new Image();
    image_generator_51.src = "tiles/generator_51.png"
    return image_generator_51
}

width_tile_rect[0] = tile_hill_51();
width_tile_rect[1] = tile_hill_52();
width_tile_rect[2] = tile_building_51();
width_tile_rect[3] = tile_building_52();
width_tile_rect[4] = tile_forest_51()
width_tile_rect[5] = tile_forest_52()
width_tile_rect[6] = tile_pipe_51()
width_tile_rect[7] = tile_crater_51()
width_tile_rect[8] = tile_generator_51()