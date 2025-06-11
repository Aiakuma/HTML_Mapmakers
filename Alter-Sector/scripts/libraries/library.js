function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function draw_background(x,y,i)
{
    ctx.drawImage(background_array[i], x, y);
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
                        ctx.drawImage(tiles_array[0], x*16 + i - 8, y*12 + j - 4);
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
                        ctx.drawImage(tiles_array[0], x*16 + i  , y*12 + j - 4);
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

function draw_sector()
{
    for (a = 0; a < 6; a++)
    {
        for (b = 0; b < 6; b++)
        {
            if (grid_subsector[b][a] == 1)
            {
                rng = RNG(1,100);
                if (rng <= 55)
                {
                    if (b % 2 == 0)
                    {
                        draw_background(a*80 - 40, b*(80 - 20) - 20, 1);
                        draw_tiles(a*80 - 40, b*(80 - 20)- 20);

                    }
                    else
                    {
                        draw_background(a*80, b*(80 - 20) - 20, 1);
                        draw_tiles(a*80, b*(80 - 20)- 20);
                    }
                }
            }
        }
    }
}