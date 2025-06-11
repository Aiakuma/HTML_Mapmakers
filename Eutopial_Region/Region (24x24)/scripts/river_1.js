function make_down(x,y)
{
    map_grid_rivers[x][y]
    roll = 0;

    for (i = 0; i < 12; i++)
    {
        rng = RNG(1,100)

        if (roll >= 4)
        {
            map_grid_rivers[x][y + 1]
            roll = roll - 1
        }
        else if(roll <= -4)
        {
            map_grid_rivers[x + 1][y + 1]
            roll = roll + 1
        }
        else
        {
            if (rng <= 50)
            {
                map_grid_rivers[x][y + 1]
                roll = roll - 1
            }
            else
            {
                map_grid_rivers[x + 1][y + 1]
                roll = roll + 1
            }
        }

    }
}