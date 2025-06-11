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
    draw_small_hex_coast(96 + x, -16 + y,value);
    draw_small_hex_coast(160 + x, -16 + y,value);
    draw_small_hex_coast(0 + x, 32 + y,value);
    draw_small_hex_coast(64 + x, 32 + y,value);
    draw_small_hex_coast(128 + x, 32 + y,value);
    draw_small_hex_coast(192 + x, 32 + y,value);
    draw_small_hex_coast(256 + x, 32 + y,value);
    draw_small_hex_coast(-32 + x, 80 + y,value);
    draw_small_hex_coast(32 + x, 80 + y,value);
    draw_small_hex_coast(96 + x, 80 + y,value);
    draw_small_hex_coast(160 + x, 80 + y,value);
    draw_small_hex_coast(224 + x, 80 + y,value);
    draw_small_hex_coast(288 + x, 80 + y,value);
    draw_small_hex_coast(0 + x, 128 + y,value);
    draw_small_hex_coast(64 + x, 128 + y,value);
    draw_small_hex_coast(128 + x, 128 + y,value);
    draw_small_hex_coast(192 + x, 128 + y,value);
    draw_small_hex_coast(256 + x, 128 + y,value);
    draw_small_hex_coast(-32 + x, 176 + y,value);
    draw_small_hex_coast(32 + x, 176 + y,value);
    draw_small_hex_coast(96 + x, 176 + y,value);
    draw_small_hex_coast(160 + x, 176 + y,value);
    draw_small_hex_coast(224 + x, 176 + y,value);
    draw_small_hex_coast(288 + x, 176 + y,value);
    draw_small_hex_coast(0 + x, 224 + y,value);
    draw_small_hex_coast(64 + x, 224+ y,value);
    draw_small_hex_coast(128 + x, 224 + y,value);
    draw_small_hex_coast(192 + x, 224 + y,value);
    draw_small_hex_coast(256 + x, 224 + y,value);
    draw_small_hex_coast(96 + x, 272 + y,value);
    draw_small_hex_coast(160 + x, 272 + y,value);
}

function draw_medium_hex_land(x,y)
{
    draw_small_hex_land(96 + x, -16 + y);
    draw_small_hex_land(160 + x, -16 + y);
    draw_small_hex_land(0 + x, 32 + y);
    draw_small_hex_land(64 + x, 32 + y);
    draw_small_hex_land(128 + x, 32 + y);
    draw_small_hex_land(192 + x, 32 + y);
    draw_small_hex_land(256 + x, 32 + y);
    draw_small_hex_land(-32 + x, 80 + y);
    draw_small_hex_land(32 + x, 80 + y);
    draw_small_hex_land(96 + x, 80 + y);
    draw_small_hex_land(160 + x, 80 + y);
    draw_small_hex_land(224 + x, 80 + y);
    draw_small_hex_land(288 + x, 80 + y);
    draw_small_hex_land(0 + x, 128 + y);
    draw_small_hex_land(64 + x, 128 + y);
    draw_small_hex_land(128 + x, 128 + y);
    draw_small_hex_land(192 + x, 128 + y);
    draw_small_hex_land(256 + x, 128 + y);
    draw_small_hex_land(-32 + x, 176 + y);
    draw_small_hex_land(32 + x, 176 + y);
    draw_small_hex_land(96 + x, 176 + y);
    draw_small_hex_land(160 + x, 176 + y);
    draw_small_hex_land(224 + x, 176 + y);
    draw_small_hex_land(288 + x, 176 + y);
    draw_small_hex_land(0 + x, 224 + y);
    draw_small_hex_land(64 + x, 224+ y);
    draw_small_hex_land(128 + x, 224 + y);
    draw_small_hex_land(192 + x, 224 + y);
    draw_small_hex_land(256 + x, 224 + y);
    draw_small_hex_land(96 + x, 272 + y);
    draw_small_hex_land(160 + x, 272 + y);
}

function draw_medium_hex_sea(x,y)
{
    
    draw_small_hex_sea(96 + x, -16 + y);
    draw_small_hex_sea(160 + x, -16 + y);
    

    draw_small_hex_sea(0 + x, 32 + y);
    draw_small_hex_sea(64 + x, 32 + y);
    draw_small_hex_sea(128 + x, 32 + y);
    draw_small_hex_sea(192 + x, 32 + y);
    draw_small_hex_sea(256 + x, 32 + y);
    
    draw_small_hex_sea(-32 + x, 80 + y);
    draw_small_hex_sea(32 + x, 80 + y);
    draw_small_hex_sea(96 + x, 80 + y);
    draw_small_hex_sea(160 + x, 80 + y);
    draw_small_hex_sea(224 + x, 80 + y);
    draw_small_hex_sea(288 + x, 80 + y);
    
    draw_small_hex_sea(0 + x, 128 + y);
    draw_small_hex_sea(64 + x, 128 + y);
    draw_small_hex_sea(128 + x, 128 + y);
    draw_small_hex_sea(192 + x, 128 + y);
    draw_small_hex_sea(256 + x, 128 + y);

    draw_small_hex_sea(-32 + x, 176 + y);
    draw_small_hex_sea(32 + x, 176 + y);
    draw_small_hex_sea(96 + x, 176 + y);
    draw_small_hex_sea(160 + x, 176 + y);
    draw_small_hex_sea(224 + x, 176 + y);
    draw_small_hex_sea(288 + x, 176 + y);

    draw_small_hex_sea(0 + x, 224 + y);
    draw_small_hex_sea(64 + x, 224+ y);
    draw_small_hex_sea(128 + x, 224 + y);
    draw_small_hex_sea(192 + x, 224 + y);
    draw_small_hex_sea(256 + x, 224 + y);
    
    
    draw_small_hex_sea(96 + x, 272 + y);
    draw_small_hex_sea(160 + x, 272 + y);
}

// MASSIVE HEX
function draw_massive_hex_back()
{
    ctx_1.drawImage(massive_hex_array[0],0,0)
};

function draw_massive_hex_front()
{
    ctx_1.drawImage(massive_hex_array[0],0,0)
    ctx_1.drawImage(massive_hex_array[1],2400,0)
    ctx_1.drawImage(massive_hex_array[2],0,3600)
    ctx_1.drawImage(massive_hex_array[3],2400,3600)
    ctx_1.drawImage(massive_hex_array[4],0,1200)
    ctx_1.drawImage(massive_hex_array[4],0,1800)
    ctx_1.drawImage(massive_hex_array[4],0,2400)
    ctx_1.drawImage(massive_hex_array[4],0,3000)
    ctx_1.drawImage(massive_hex_array[5],4200,1200)
    ctx_1.drawImage(massive_hex_array[5],4200,1800)
    ctx_1.drawImage(massive_hex_array[5],4200,2400)
    ctx_1.drawImage(massive_hex_array[5],4200,3000)
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