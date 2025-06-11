function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ref_grid_seed()
{
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
        {
            ref_grid[i][j] = RNG(1,3);
        }
    }
}

function hex_seeding()
{
    ref_grid_seed()
    for(i = 0; i < 6; i++)
    {
        for(j = 0; j < 6; j++)
        {
            if(ref_grid[i][j] == 1)
            {
                for (k = 0; k < 25; k++)
                {
                    rng = RNG(1,100);
                    if(rng <= 75)
                    {
                        grid[i][j][k] = level_0;
                    }
                    else
                    {
                        grid[i][j][k] = level_1;
                    }
                }
            }
            else if (ref_grid[i][j] == 2)
            {
                for (k = 0; k < 25; k++)
                {
                    rng = RNG(1,100);
                    if(rng <= 75)
                    {
                        grid[i][j][k] = level_1;
                    }
                    else
                    {
                        grid[i][j][k] = level_2;
                    }
                }
            }
            else if (ref_grid[i][j] == 3)
            {
                for (k = 0; k < 25; k++)
                {
                    rng = RNG(1,100);
                    if(rng <= 75)
                    {
                        grid[i][j][k] = level_2;
                    }
                    else
                    {
                        grid[i][j][k] = level_3;
                    }
                }

            }
            else
            {}
        }
    }
}

function large_hex_draw(row,col,x,y,k)
{
    
    if (grid[row][col][0] == k){ctx.drawImage(height_tiles_array[grid[row][col][0]],x - tq2s,y - tq9s)};
    
    if (grid[row][col][1] == k){ctx.drawImage(height_tiles_array[grid[row][col][1]],x - tq4s,y - tq6s)};
    if (grid[row][col][2] == k){ctx.drawImage(height_tiles_array[grid[row][col][2]],x,y - tq6s)};
    if (grid[row][col][3] == k){ctx.drawImage(height_tiles_array[grid[row][col][3]],x + tq4s,y - tq6s)};
    if (grid[row][col][4] == k){ctx.drawImage(height_tiles_array[grid[row][col][4]],x + tq8s,y - tq6s)};
    
    if (grid[row][col][5] == k){ctx.drawImage(height_tiles_array[grid[row][col][5]],x - tq10s,y - tq3s)};
    if (grid[row][col][6] == k){ctx.drawImage(height_tiles_array[grid[row][col][6]],x - tq6s,y - tq3s)};
    if (grid[row][col][7] == k){ctx.drawImage(height_tiles_array[grid[row][col][7]],x - tq2s,y - tq3s)};
    if (grid[row][col][8] == k){ctx.drawImage(height_tiles_array[grid[row][col][8]],x + tq2s,y - tq3s)};
    if (grid[row][col][9] == k){ctx.drawImage(height_tiles_array[grid[row][col][9]],x + tq6s,y - tq3s)};
    
    if (grid[row][col][10] == k){ctx.drawImage(height_tiles_array[grid[row][col][10]],x - tq8s,y)};
    if (grid[row][col][11] == k){ctx.drawImage(height_tiles_array[grid[row][col][11]],x - tq4s,y)};
    if (grid[row][col][12] == k){ctx.drawImage(height_tiles_array[grid[row][col][12]],x,y)};
    if (grid[row][col][13] == k){ctx.drawImage(height_tiles_array[grid[row][col][13]],x + tq4s,y)};
    if (grid[row][col][14] == k){ctx.drawImage(height_tiles_array[grid[row][col][14]],x + tq8s,y)};
    
    if (grid[row][col][15] == k){ctx.drawImage(height_tiles_array[grid[row][col][15]],x - tq6s,y + tq3s)};
    if (grid[row][col][16] == k){ctx.drawImage(height_tiles_array[grid[row][col][16]],x - tq2s,y + tq3s)};
    if (grid[row][col][17] == k){ctx.drawImage(height_tiles_array[grid[row][col][17]],x + tq2s,y + tq3s)};
    if (grid[row][col][18] == k){ctx.drawImage(height_tiles_array[grid[row][col][18]],x + tq6s,y + tq3s)};
    if (grid[row][col][19] == k){ctx.drawImage(height_tiles_array[grid[row][col][19]],x + tq10s,y + tq3s)};

    if (grid[row][col][20] == k){ctx.drawImage(height_tiles_array[grid[row][col][20]],x - tq8s,y + tq6s)};
    if (grid[row][col][21] == k){ctx.drawImage(height_tiles_array[grid[row][col][21]],x - tq4s,y + tq6s)};
    if (grid[row][col][22] == k){ctx.drawImage(height_tiles_array[grid[row][col][22]],x,y + tq6s)};
    if (grid[row][col][23] == k){ctx.drawImage(height_tiles_array[grid[row][col][23]],x + tq4s,y + tq6s)};

    if (grid[row][col][24] == k){ctx.drawImage(height_tiles_array[grid[row][col][24]],x + tq2s,y + tq9s)};
}

function large_hex_shadow(row,col,x,y,k)
{
    x = x - (tq1s / 2);
    y = y - (tq1s / 2);
    if (grid[row][col][0] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][0]],x - tq2s,y - tq9s)};
    
    if (grid[row][col][1] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][1]],x - tq4s,y - tq6s)};
    if (grid[row][col][2] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][2]],x,y - tq6s)};
    if (grid[row][col][3] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][3]],x + tq4s,y - tq6s)};
    if (grid[row][col][4] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][4]],x + tq8s,y - tq6s)};
    
    if (grid[row][col][5] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][5]],x - tq10s,y - tq3s)};
    if (grid[row][col][6] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][6]],x - tq6s,y - tq3s)};
    if (grid[row][col][7] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][7]],x - tq2s,y - tq3s)};
    if (grid[row][col][8] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][8]],x + tq2s,y - tq3s)};
    if (grid[row][col][9] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][9]],x + tq6s,y - tq3s)};
    
    if (grid[row][col][10] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][10]],x - tq8s,y)};
    if (grid[row][col][11] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][11]],x - tq4s,y)};
    if (grid[row][col][12] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][12]],x,y)};
    if (grid[row][col][13] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][13]],x + tq4s,y)};
    if (grid[row][col][14] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][14]],x + tq8s,y)};
    
    if (grid[row][col][15] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][15]],x - tq6s,y + tq3s)};
    if (grid[row][col][16] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][16]],x - tq2s,y + tq3s)};
    if (grid[row][col][17] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][17]],x + tq2s,y + tq3s)};
    if (grid[row][col][18] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][18]],x + tq6s,y + tq3s)};
    if (grid[row][col][19] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][19]],x + tq10s,y + tq3s)};

    if (grid[row][col][20] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][20]],x - tq8s,y + tq6s)};
    if (grid[row][col][21] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][21]],x - tq4s,y + tq6s)};
    if (grid[row][col][22] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][22]],x,y + tq6s)};
    if (grid[row][col][23] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][23]],x + tq4s,y + tq6s)};

    if (grid[row][col][24] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][24]],x + tq2s,y + tq9s)};
}

function forest()
{
    for(i = 0; i < grid_height; i++)
    {
        for(j = 0; j < grid_length; j++)
        {
            rng = RNG(1,100)
            if (i % 2 == 0)
            {
                if(rng <= forest_luck)
                {
                    ctx.drawImage(bonus_array[0],(j*tq4s) - (tq1s/4),(i*tq3s) - (tq1s/4));
                }
            }
            else
            {
                if(rng <= forest_luck)
                {
                    ctx.drawImage(bonus_array[0],(j*tq4s) - tq2s - (tq1s/4),(i*tq3s) - (tq1s/4));
                }
            }
        }
    }
}

function map_draw()
{
    hex_seeding()
    for (k = 0; k < 4; k++)
    {
        // SHADOWS
        coord_x = 0;
        coord_y = 0;
        for(i = 0; i < 6; i++)
        {
            if (i % 2 == 0)
                {
                    for(j = 0; j < 6; j++)
                    {
                        large_hex_shadow(i,j,coord_x,coord_y,k);
                        coord_x = coord_x + (tq10s*2);
                    }
                }
            else 
                {
                    for(j = 0; j < 6; j++)
                        {
                            large_hex_shadow(i,j,coord_x - tq10s,coord_y,k);
                            coord_x = coord_x + (tq10s*2);
                        }
                }
            coord_x = 0;
            coord_y = coord_y + tq10s + tq5s;
        }

        // TILES
        coord_x = 0;
        coord_y = 0;
        for(i = 0; i < 6; i++)
        {
            if (i % 2 == 0)
                {
                    for(j = 0; j < 6; j++)
                    {
                        large_hex_draw(i,j,coord_x,coord_y,k);
                        coord_x = coord_x + (tq10s*2);
                    }
                }
            else 
                {
                    for(j = 0; j < 6; j++)
                        {
                            large_hex_draw(i,j,coord_x - tq10s,coord_y,k);
                            coord_x = coord_x + (tq10s*2);
                        }
                }
            coord_x = 0;
            coord_y = coord_y + tq10s + tq5s;

        }
    }
    // FOREST
    forest();
}