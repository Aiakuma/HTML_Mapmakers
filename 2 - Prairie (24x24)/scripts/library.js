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
                        grid[i][j][k] = 0;
                    }
                    else
                    {
                        grid[i][j][k] = 1;
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
                        grid[i][j][k] = 1;
                    }
                    else
                    {
                        grid[i][j][k] = 1;
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
                        grid[i][j][k] = 1;
                    }
                    else
                    {
                        grid[i][j][k] = 2;
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
    
    if (grid[row][col][0] == k){ctx.drawImage(height_tiles_array[grid[row][col][0]],x - 32,y - 144)};
    
    if (grid[row][col][1] == k){ctx.drawImage(height_tiles_array[grid[row][col][1]],x - 64,y - 96)};
    if (grid[row][col][2] == k){ctx.drawImage(height_tiles_array[grid[row][col][2]],x,y - 96)};
    if (grid[row][col][3] == k){ctx.drawImage(height_tiles_array[grid[row][col][3]],x + 64,y - 96)};
    if (grid[row][col][4] == k){ctx.drawImage(height_tiles_array[grid[row][col][4]],x + 128,y - 96)};
    
    if (grid[row][col][5] == k){ctx.drawImage(height_tiles_array[grid[row][col][5]],x - 160,y - 48)};
    if (grid[row][col][6] == k){ctx.drawImage(height_tiles_array[grid[row][col][6]],x - 96,y - 48)};
    if (grid[row][col][7] == k){ctx.drawImage(height_tiles_array[grid[row][col][7]],x - 32,y - 48)};
    if (grid[row][col][8] == k){ctx.drawImage(height_tiles_array[grid[row][col][8]],x + 32,y - 48)};
    if (grid[row][col][9] == k){ctx.drawImage(height_tiles_array[grid[row][col][9]],x + 96,y - 48)};
    
    if (grid[row][col][10] == k){ctx.drawImage(height_tiles_array[grid[row][col][10]],x - 128,y)};
    if (grid[row][col][11] == k){ctx.drawImage(height_tiles_array[grid[row][col][11]],x - 64,y)};
    if (grid[row][col][12] == k){ctx.drawImage(height_tiles_array[grid[row][col][12]],x,y)};
    if (grid[row][col][13] == k){ctx.drawImage(height_tiles_array[grid[row][col][13]],x + 64,y)};
    if (grid[row][col][14] == k){ctx.drawImage(height_tiles_array[grid[row][col][14]],x + 128,y)};
    
    if (grid[row][col][15] == k){ctx.drawImage(height_tiles_array[grid[row][col][15]],x - 96,y + 48)};
    if (grid[row][col][16] == k){ctx.drawImage(height_tiles_array[grid[row][col][16]],x - 32,y + 48)};
    if (grid[row][col][17] == k){ctx.drawImage(height_tiles_array[grid[row][col][17]],x + 32,y + 48)};
    if (grid[row][col][18] == k){ctx.drawImage(height_tiles_array[grid[row][col][18]],x + 96,y + 48)};
    if (grid[row][col][19] == k){ctx.drawImage(height_tiles_array[grid[row][col][19]],x + 160,y + 48)};

    if (grid[row][col][20] == k){ctx.drawImage(height_tiles_array[grid[row][col][20]],x - 128,y + 96)};
    if (grid[row][col][21] == k){ctx.drawImage(height_tiles_array[grid[row][col][21]],x - 64,y + 96)};
    if (grid[row][col][22] == k){ctx.drawImage(height_tiles_array[grid[row][col][22]],x,y + 96)};
    if (grid[row][col][23] == k){ctx.drawImage(height_tiles_array[grid[row][col][23]],x + 64,y + 96)};

    if (grid[row][col][24] == k){ctx.drawImage(height_tiles_array[grid[row][col][24]],x + 32,y + 144)};
}

function large_hex_shadow(row,col,x,y,k)
{
    x = x - 8;
    y = y - 8;
    if (grid[row][col][0] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][0]],x - 32,y - 144)};
    
    if (grid[row][col][1] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][1]],x - 64,y - 96)};
    if (grid[row][col][2] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][2]],x,y - 96)};
    if (grid[row][col][3] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][3]],x + 64,y - 96)};
    if (grid[row][col][4] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][4]],x + 128,y - 96)};
    
    if (grid[row][col][5] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][5]],x - 160,y - 48)};
    if (grid[row][col][6] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][6]],x - 96,y - 48)};
    if (grid[row][col][7] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][7]],x - 32,y - 48)};
    if (grid[row][col][8] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][8]],x + 32,y - 48)};
    if (grid[row][col][9] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][9]],x + 96,y - 48)};
    
    if (grid[row][col][10] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][10]],x - 128,y)};
    if (grid[row][col][11] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][11]],x - 64,y)};
    if (grid[row][col][12] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][12]],x,y)};
    if (grid[row][col][13] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][13]],x + 64,y)};
    if (grid[row][col][14] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][14]],x + 128,y)};
    
    if (grid[row][col][15] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][15]],x - 96,y + 48)};
    if (grid[row][col][16] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][16]],x - 32,y + 48)};
    if (grid[row][col][17] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][17]],x + 32,y + 48)};
    if (grid[row][col][18] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][18]],x + 96,y + 48)};
    if (grid[row][col][19] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][19]],x + 160,y + 48)};

    if (grid[row][col][20] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][20]],x - 128,y + 96)};
    if (grid[row][col][21] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][21]],x - 64,y + 96)};
    if (grid[row][col][22] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][22]],x,y + 96)};
    if (grid[row][col][23] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][23]],x + 64,y + 96)};

    if (grid[row][col][24] == k){ctx.drawImage(shadow_tiles_array[grid[row][col][24]],x + 32,y + 144)};
}


function map_draw()
{
    hex_seeding()
    for (k = 0; k < 4; k++)
    {
        coord_x = 0;
        coord_y = 0;
        for(i = 0; i < 6; i++)
        {
            if (i % 2 == 0)
                {
                    for(j = 0; j < 6; j++)
                    {
                        large_hex_shadow(i,j,coord_x,coord_y,k);
                        coord_x = coord_x + 320;
                    }
                }
            else 
                {
                    for(j = 0; j < 6; j++)
                        {
                            large_hex_shadow(i,j,coord_x - 160,coord_y,k);
                            coord_x = coord_x + 320;
                        }
                }
            coord_x = 0;
            coord_y = coord_y + 240;
        }
        coord_x = 0;
        coord_y = 0;
        for(i = 0; i < 6; i++)
        {
            if (i % 2 == 0)
                {
                    for(j = 0; j < 6; j++)
                    {
                        large_hex_draw(i,j,coord_x,coord_y,k);
                        coord_x = coord_x + 320;
                    }
                }
            else 
                {
                    for(j = 0; j < 6; j++)
                        {
                            large_hex_draw(i,j,coord_x - 160,coord_y,k);
                            coord_x = coord_x + 320;
                        }
                }
            coord_x = 0;
            coord_y = coord_y + 240;

        }
    }
}

