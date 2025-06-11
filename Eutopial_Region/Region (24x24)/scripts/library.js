function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function tiles_seed_generator()
{
    for (i = 0; i < 24; i++)
    {
        for (j = 0; j < 24; j++)
        {
            rng = RNG(1,100);
            if(rng <= 15)
            {
                map_grid_tiles[i][j] = 2;
                map_grid_resources[i][j] = 9;
                map_grid_rivers[i][j] = 9;
                map_grid_forest[i][j] = 9;
            }
            else if(rng <= 45)
            {
                map_grid_tiles[i][j] = 1;
            }
            else
            {
                map_grid_tiles[i][j] = 0;
            }
        }
    }
}

function forest_seed_generator()
{
    for (i = 0; i < 24; i++)
    {
        for (j = 0; j < 24; j++)
        {
            if(map_grid_tiles[i][j] != 2)
            {
                rng = RNG(1,100);
                if (rng <= 30)
                {
                    map_grid_forest[i][j] = 1;
                }
            }
        }
    };
}

function draw_the_tiles()
{
    tiles_seed_generator();
    for (i = 0; i < 24; i++)
    {
        for (j = 0; j < 24; j++)
        {
            if (j % 2 == 0)
            {
                ctx.drawImage(tiles_img_array[map_grid_tiles[i][j]], i*tile_size + tile_size/2, j*(tile_size - tile_size/4));
            }
            else 
            {
                ctx.drawImage(tiles_img_array[map_grid_tiles[i][j]], i*tile_size, j*(tile_size - tile_size/4));
            }
        }
    }
}

function draw_the_forests()
{
    forest_seed_generator();
    for (i = 0; i < 24; i++)
    {
        for (j = 0; j < 24; j++)
        {
            if(map_grid_forest[i][j] == 1)
            {
                if (j % 2 == 0)
                {
                    ctx.drawImage(forest_img_array[0], i*tile_size + tile_size/2 - tile_size/16, j*(tile_size - tile_size/4) -  tile_size/16);
                }
                else
                {
                    ctx.drawImage(forest_img_array[0], i*tile_size - tile_size/16, j*(tile_size - tile_size/4) -  tile_size/16);
                }
            }
        }
    }
}

function draw_coordinates()
{
    ctx.font = "bold 16px Arial";
    
    number1 = 48;
    number2 = 49;
    number3 = 48;
    number4 = 49;

    for (j = 0; j < 24; j++)
    {
        for (i = 0; i < 24; i++)
        {
            if (j % 2 == 0)
            {
                ctx.fillText(String.fromCharCode(number1, number2, 32, 45, 32, number3, number4),i*tile_size + tile_size/2 + 40, j*(tile_size - tile_size/4) + 104);
            }
            else
            {
                ctx.fillText(String.fromCharCode(number1, number2, 32, 45, 32, number3, number4),i*tile_size + 40, j*(tile_size - tile_size/4) + 104);
            }
            
            if (number1 == 50 && number2 == 52) {number1 = 48; number2 = 49;}
            else if (number2 == 57) {number1 = number1 + 1; number2 = 48;}
            else{number2 = number2 + 1;}
        }
        if (number3 == 50 && number4 == 52) {number3 = 48; number4 = 49;}
        else if (number4 == 57) {number3 = number3 + 1; number4 = 48;}
        else{number4 = number4 + 1;}
    }
}

function draw_the_map()
{
    draw_the_tiles();
    draw_the_forests();
    draw_coordinates();
}