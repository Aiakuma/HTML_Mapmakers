function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// SMALL HEX

function draw_small_hex_coast(x,y,value)
{
    rand = RNG(1,100);

    if (rand <= value)
    {
        ctx_1.drawImage(small_hex_array[1],x,y)
    }
    else
    {
        ctx_1.drawImage(small_hex_array[0],x,y)
    }
}

function draw_small_hex_land(x,y)
{
    rand = RNG(1,100);

    if (rand <= 10)
    {
        ctx_1.drawImage(small_hex_array[3],x,y)
    }
    else if (rand <= 25)
    {
        ctx_1.drawImage(small_hex_array[2],x,y)
    }
    else
    {
        ctx_1.drawImage(small_hex_array[1],x,y)
    }
}

function draw_small_hex_sea(x,y)
{
    rand = RNG(1,100);

    if (rand <= 10)
    {
        ctx_1.drawImage(small_hex_array[0],x,y)
    }
    else
    {
        ctx_1.drawImage(small_hex_array[0],x,y)
    }
}

// MEDIUM HEX

function draw_medium_hex_coast(x,y,value)
{
    draw_small_hex_coast(24 + x, -4 + y,value);
    draw_small_hex_coast(40 + x, -4 + y,value);
    draw_small_hex_coast(0 + x, 8 + y,value);
    draw_small_hex_coast(16 + x, 8 + y,value);
    draw_small_hex_coast(32 + x, 8 + y,value);
    draw_small_hex_coast(48 + x, 8 + y,value);
    draw_small_hex_coast(64 + x, 8 + y,value);
    draw_small_hex_coast(-8 + x, 20 + y,value);
    draw_small_hex_coast(8 + x, 20 + y,value);
    draw_small_hex_coast(24 + x, 20 + y,value);
    draw_small_hex_coast(40 + x, 20 + y,value);
    draw_small_hex_coast(56 + x, 20 + y,value);
    draw_small_hex_coast(72 + x, 20 + y,value);
    draw_small_hex_coast(0 + x, 32 + y,value);
    draw_small_hex_coast(16 + x, 32 + y,value);
    draw_small_hex_coast(32 + x, 32 + y,value);
    draw_small_hex_coast(48 + x, 32 + y,value);
    draw_small_hex_coast(64 + x, 32 + y,value);
    draw_small_hex_coast(-8 + x, 44 + y,value);
    draw_small_hex_coast(8 + x, 44 + y,value);
    draw_small_hex_coast(24 + x, 44 + y,value);
    draw_small_hex_coast(40 + x, 44 + y,value);
    draw_small_hex_coast(56 + x, 44 + y,value);
    draw_small_hex_coast(72 + x, 44 + y,value);
    draw_small_hex_coast(0 + x, 56 + y,value);
    draw_small_hex_coast(16 + x, 56 + y,value);
    draw_small_hex_coast(32 + x, 56 + y,value);
    draw_small_hex_coast(48 + x, 56 + y,value);
    draw_small_hex_coast(64 + x, 56 + y,value);
    draw_small_hex_coast(24 + x, 68 + y,value);
    draw_small_hex_coast(40 + x, 68 + y,value);
}

function draw_medium_hex_land(x,y)
{
    draw_small_hex_land(24 + x, -4 + y);
    draw_small_hex_land(40 + x, -4 + y);
    draw_small_hex_land(0 + x, 8 + y);
    draw_small_hex_land(16 + x, 8 + y);
    draw_small_hex_land(32 + x, 8 + y);
    draw_small_hex_land(48 + x, 8 + y);
    draw_small_hex_land(64 + x, 8 + y);
    draw_small_hex_land(-8 + x, 20 + y);
    draw_small_hex_land(8 + x, 20 + y);
    draw_small_hex_land(24 + x, 20 + y);
    draw_small_hex_land(40 + x, 20 + y);
    draw_small_hex_land(56 + x, 20 + y);
    draw_small_hex_land(72 + x, 20 + y);
    draw_small_hex_land(0 + x, 32 + y);
    draw_small_hex_land(16 + x, 32 + y);
    draw_small_hex_land(32 + x, 32 + y);
    draw_small_hex_land(48 + x, 32 + y);
    draw_small_hex_land(64 + x, 32 + y);
    draw_small_hex_land(-8 + x, 44 + y);
    draw_small_hex_land(8 + x, 44 + y);
    draw_small_hex_land(24 + x, 44 + y);
    draw_small_hex_land(40 + x, 44 + y);
    draw_small_hex_land(56 + x, 44 + y);
    draw_small_hex_land(72 + x, 44 + y);
    draw_small_hex_land(0 + x, 56 + y);
    draw_small_hex_land(16 + x, 56 + y);
    draw_small_hex_land(32 + x, 56 + y);
    draw_small_hex_land(48 + x, 56 + y);
    draw_small_hex_land(64 + x, 56 + y);
    draw_small_hex_land(24 + x, 68 + y);
    draw_small_hex_land(40 + x, 68 + y);
}

function draw_medium_hex_sea(x,y)
{
    draw_small_hex_sea(24 + x, -4 + y);
    draw_small_hex_sea(40 + x, -4 + y);
    draw_small_hex_sea(0 + x, 8 + y);
    draw_small_hex_sea(16 + x, 8 + y);
    draw_small_hex_sea(32 + x, 8 + y);
    draw_small_hex_sea(48 + x, 8 + y);
    draw_small_hex_sea(64 + x, 8 + y);
    draw_small_hex_sea(-8 + x, 20 + y);
    draw_small_hex_sea(8 + x, 20 + y);
    draw_small_hex_sea(24 + x, 20 + y);
    draw_small_hex_sea(40 + x, 20 + y);
    draw_small_hex_sea(56 + x, 20 + y);
    draw_small_hex_sea(72 + x, 20 + y);
    draw_small_hex_sea(0 + x, 32 + y);
    draw_small_hex_sea(16 + x, 32 + y);
    draw_small_hex_sea(32 + x, 32 + y);
    draw_small_hex_sea(48 + x, 32 + y);
    draw_small_hex_sea(64 + x, 32 + y);
    draw_small_hex_sea(-8 + x, 44 + y);
    draw_small_hex_sea(8 + x, 44 + y);
    draw_small_hex_sea(24 + x, 44 + y);
    draw_small_hex_sea(40 + x, 44 + y);
    draw_small_hex_sea(56 + x, 44 + y);
    draw_small_hex_sea(72 + x, 44 + y);
    draw_small_hex_sea(0 + x, 56 + y);
    draw_small_hex_sea(16 + x, 56 + y);
    draw_small_hex_sea(32 + x, 56 + y);
    draw_small_hex_sea(48 + x, 56 + y);
    draw_small_hex_sea(64 + x, 56 + y);
    draw_small_hex_sea(24 + x, 68 + y);
    draw_small_hex_sea(40 + x, 68 + y);
}

// MASSIVE HEX
function draw_massive_hex_back()
{
    ctx_1.drawImage(massive_hex_array[0],0,0)
};

function draw_massive_hex_front()
{
    ctx_1.drawImage(massive_hex_array[1],0,0)
};

// Generator Loop
function seed_generator()
{
    for (i = 0; i < 336; i++)
    {
        roll = RNG(1,100);
        if (massive_hex_pattern[i] == 0)
        {
            massive_hex_grid[i] = 0;
            massive_hex_seed[i] = 0;
        }
        else if (massive_hex_pattern[i] == 1)
        {
            if (roll <= 15)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            } 
        }
        else if (massive_hex_pattern[i] == 2)
        {
            if (roll <= 30)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            }
        }
        else if (massive_hex_pattern[i] == 3)
        {
            if (roll <= 45)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            }
        }
        else if (massive_hex_pattern[i] == 4)
        {
            if (roll <= 60)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            }
        }   
        else if (massive_hex_pattern[i] == 5)
        {
            if (roll <= 75)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            } 
        }
        else if (massive_hex_pattern[i] == 6)
        {
            if (roll <= 90)
            {
                massive_hex_grid[i] = 1;
                massive_hex_seed[i] = 2;
            }
            else
            {
                massive_hex_grid[i] = 0;
                massive_hex_seed[i] = 0;
            }  
        }
        if (massive_hex_grid[i] == 7)
        {
            massive_hex_grid[i] = 1;
            massive_hex_seed[i] = 2;
        }
    };

    for (i = 0; i < 336; i++)
    {
        if (i % 2 == 0)
        {
            if (i <= 320 && i > 17)
            {
                total = massive_hex_grid[i-17] + massive_hex_grid[i-16] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+15] + massive_hex_grid[i+16];
                if (total == 0)
                {
                    massive_hex_grid[i] = 0;
                    massive_hex_seed[i] = 0;
                }
                if (total >= 4)
                {
                    massive_hex_grid[i] = 1;
                    massive_hex_seed[i] = 2;
                }
            }
        }
        else 
        {
            if (i <= 319 && i > 16)
            {
                total = massive_hex_grid[i-16] + massive_hex_grid[i-15] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+16] + massive_hex_grid[i+17];
                if (total == 0)
                {
                    massive_hex_grid[i] = 0;
                    massive_hex_seed[i] = 0;
                }
                if (total >= 4)
                {
                    massive_hex_grid[i] = 1;
                    massive_hex_seed[i] = 2;
                }
            }
        }
    }

    for (i = 0; i < 336; i++)
    {
        if (i % 2 == 0)
        {
            if (i <= 320 && i > 17)
            {
                total = massive_hex_grid[i-17] + massive_hex_grid[i-16] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+15] + massive_hex_grid[i+16];
                if (total == 0)
                {
                    massive_hex_grid[i] = 0;
                    massive_hex_seed[i] = 0;
                }
                if (total >= 4)
                {
                    massive_hex_grid[i] = 1;
                    massive_hex_seed[i] = 2;
                }
            }
        }
        else 
        {
            if (i <= 319 && i > 16)
            {
                total = massive_hex_grid[i-16] + massive_hex_grid[i-15] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+16] + massive_hex_grid[i+17];
                if (total == 0)
                {
                    massive_hex_grid[i] = 0;
                    massive_hex_seed[i] = 0;
                }
                if (total >= 4)
                {
                    massive_hex_grid[i] = 1;
                    massive_hex_seed[i] = 2;
                }
            }
        }
    }

    for (i = 0; i < 336; i++)
        {
            if (i % 2 == 0)
            {
                if (i <= 320 && i > 17)
                {
                    total = massive_hex_grid[i-17] + massive_hex_grid[i-16] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+15] + massive_hex_grid[i+16];
                    if (total >= 1 && massive_hex_grid[i] == 0)
                        {
                            massive_hex_seed[i] = 1;
                        }
                }
            }
            else 
            {
                if (i <= 319 && i > 16)
                {
                    total = massive_hex_grid[i-16] + massive_hex_grid[i-15] + massive_hex_grid[i-1] + massive_hex_grid[i+1] + massive_hex_grid[i+16] + massive_hex_grid[i+17];
                    
                    if (total >= 1 && massive_hex_grid[i] == 0)
                    {
                        massive_hex_seed[i] = 1;
                    }
                }
            }
        }


    for (i = 0; i < 336; i++)
    {
        if (massive_hex_seed[i] == 0)
        {
            draw_medium_hex_sea(massive_hex_coordinate[i][0],massive_hex_coordinate[i][1])
        }
        else if (massive_hex_seed[i] == 1)
        {
            draw_medium_hex_coast(massive_hex_coordinate[i][0],massive_hex_coordinate[i][1],15)
        }
        else if (massive_hex_seed[i] == 2)
        {
            draw_medium_hex_land(massive_hex_coordinate[i][0],massive_hex_coordinate[i][1])
        }
        else {}
    }
}