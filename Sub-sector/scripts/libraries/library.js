function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw_background(x,y)
{
    ctx.drawImage(background_array[0], x, y);
}

function draw_tiles(i,j)
{
    for (y = 0; y < 6; y++)
    {
        for (x = 0; x < 6; x++)
        {
            if (grid_subsector[y][x] == 1)
            {
                rng = RNG(1,100);
                rng_tile = RNG(1,7);

                if (y % 2 == 0)
                {
                    if (rng <= 55)
                    {
                        ctx.drawImage(tiles_array[rng_tile], x*80 - 40, y*60  - 20);
                    }
                    else
                    {
                        //ctx.drawImage(tiles_array[0], x*80, y*60 - 40);
                    }
                }
                else
                {
                    if (rng <= 55)
                    {
                        ctx.drawImage(tiles_array[rng_tile], x*80, y*60 - 20);
                    }
                    else
                    {
                        //ctx.drawImage(tiles_array[0], x*80 - 40, y*60 - 40);
                    }
                }
            }
        }
    }
}