function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw_background()
{
    ctx.drawImage(background_array[0], 0, 0);
}

function draw_tiles()
{
    for (y = 0; y < 13; y++)
    {
        for (x = 0; x < 11; x++)
        {
            if (y == 6 && x == 4)
            {
                ctx.drawImage(tiles_array[0], x*80, y*60 - 40);
            }
            else if (grid_subsector[y][x] == 1)
            {
                rng = RNG(1,100);
                rng_tile = RNG(1,6);

                if (y % 2 == 0)
                {
                    if (rng <= 25)
                    {
                        ctx.drawImage(tiles_array[rng_tile], x*80, y*60 - 40);
                    }
                    else
                    {
                        //ctx.drawImage(tiles_array[0], x*80, y*60 - 40);
                    }
                }
                else
                {
                    rng = RNG(1,100);
                    if (rng <= 25)
                    {
                        ctx.drawImage(tiles_array[rng_tile], x*80  - 40, y*60 - 40);
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