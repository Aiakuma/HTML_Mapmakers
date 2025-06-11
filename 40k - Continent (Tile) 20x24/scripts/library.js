function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function earth_and_water(i,j)
{
    if(i == 0 || j == 0 || i == grid_length-1 || j == grid_height-1)
    {
        if(grid_value_array[i][j] >= 7)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else if(i == 1 || j == 1 || i == grid_length-2 || j == grid_height-2)
    {
        if(grid_value_array[i][j] >= 6)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else if(i == 2 || j == 2 || i == grid_length-3 || j == grid_height-3)
    {
        if(grid_value_array[i][j] >= 5)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else if(i == 3 || j == 3 || i == grid_length-4 || j == grid_height-4)
    {
        if(grid_value_array[i][j] >= 4)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else if(i == 4 || j == 4 || i == grid_length-5 || j == grid_height-5)
    {
        if(grid_value_array[i][j] >= 3)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else if(i == 5 || j == 5 || i == grid_length-6 || j == grid_height-6)
    {
        if(grid_value_array[i][j] >= 2)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
    else
    {
        if(grid_value_array[i][j] >= 1)
        {
            grid_earth_array[i][j] = 1;
        }
        else
        {
            grid_earth_array[i][j] = 0;
        }
    }
}

function dye_a_cell(i,j,x,y)
{
    if(i == 0 || j == 0 || i == grid_length-1 || j == grid_height-1)
    {
        if(grid_value_array[i][j] >= 6)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else if(i == 1 || j == 1 || i == grid_length-2 || j == grid_height-2)
    {
        if(grid_value_array[i][j] >= 6)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else if(i == 2 || j == 2 || i == grid_length-3 || j == grid_height-3)
    {
        if(grid_value_array[i][j] >= 5)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else if(i == 3 || j == 3 || i == grid_length-4 || j == grid_height-4)
    {
        if(grid_value_array[i][j] >= 4)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else if(i == 4 || j == 4 || i == grid_length-5 || j == grid_height-5)
    {
        if(grid_value_array[i][j] >= 3)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else if(i == 5 || j == 5 || i == grid_length-6 || j == grid_height-6)
    {
        if(grid_value_array[i][j] >= 2)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
    else
    {
        if(grid_value_array[i][j] >= 1)
        {
            ctx.drawImage(images[3], x, y);
        }
        else
        {
            ctx.drawImage(images[1], x, y);
        }
    }
}

function draw_a_hex(a,b)
{
    if ((b % 2) == 0)
    {
        dye_a_cell(a,b,a*64,b*49);
    }
    else
    {
        dye_a_cell(a,b,(a*64)+32,b*49);     
    }
    
};

function smooth_coast(i,j)
{
    var even_earth_sum = grid_earth_array[i - 1][j - 1] + grid_earth_array[i][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i+1][j] + grid_earth_array[i - 1][j + 1] + grid_earth_array[i][j + 1];
    var odd_earth_sum = grid_earth_array[i][j - 1] + grid_earth_array[i + 1][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i + 1][j] + grid_earth_array[i][j + 1] + grid_earth_array[i + 1][j + 1];

    if((j % 2) == 0 && even_earth_sum >= 4)
    {
        grid_earth_array[i][j] = 1;
        grid_value_array[i][j] = 6;
    }
    else if ((j % 2) != 0 && odd_earth_sum >= 4)
    {
        grid_earth_array[i][j] = 1;
        grid_value_array[i][j] = 6;
    }
    else
    {
        grid_earth_array[i][j] = 0;
        grid_value_array[i][j] = 0;
    }
}

function make_coast(i,j)
{
    var even_earth_sum = grid_earth_array[i - 1][j - 1] + grid_earth_array[i][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i+1][j] + grid_earth_array[i - 1][j + 1] + grid_earth_array[i][j + 1];
    var odd_earth_sum = grid_earth_array[i][j - 1] + grid_earth_array[i + 1][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i + 1][j] + grid_earth_array[i][j + 1] + grid_earth_array[i + 1][j + 1];
    
    if ((j % 2) == 0 && grid_earth_array[i][j] == 0 && even_earth_sum >= 1) 
    {
        ctx.drawImage(images[2],i*64,j*49);
    }
    else if ((j % 2) != 0 && grid_earth_array[i][j] == 0 && odd_earth_sum >= 1)
    {
        ctx.drawImage(images[2],(i*64)+32,j*49);
    }
    else {}
}

function make_hill(i,j)
{
    var odd_earth_sum = grid_earth_array[i][j - 1] + grid_earth_array[i + 1][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i + 1][j] + grid_earth_array[i][j + 1] + grid_earth_array[i + 1][j + 1];
    var even_earth_sum = grid_earth_array[i - 1][j - 1] + grid_earth_array[i][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i+1][j] + grid_earth_array[i - 1][j + 1] + grid_earth_array[i][j + 1];

    if ((j % 2) == 0 && grid_earth_array[i][j] == 1 && even_earth_sum >= 6) 
    {
        roll = RNG(1,6)
        if (roll >= 5)
        {
            ctx.drawImage(images[4],i*64,j*49);
            grid_earth_array[i][j] = 2;
        }
        else {}
    }  
    else if ((j % 2) != 0 && grid_earth_array[i][j] == 1 && odd_earth_sum >= 6)
    {
        roll = RNG(1,6)
        if (roll >= 4)
        {
            ctx.drawImage(images[4],(i*64)+32,j*49);
            grid_earth_array[i][j] = 2;
        }
        else {}
    }
    else {}
}

function make_mountain(i,j)
{
    var odd_earth_sum = grid_earth_array[i][j - 1] + grid_earth_array[i + 1][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i + 1][j] + grid_earth_array[i][j + 1] + grid_earth_array[i + 1][j + 1];
    var even_earth_sum = grid_earth_array[i - 1][j - 1] + grid_earth_array[i][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i+1][j] + grid_earth_array[i - 1][j + 1] + grid_earth_array[i][j + 1];

    if ((j % 2) == 0 && grid_earth_array[i][j] == 1 && even_earth_sum >= 10) 
    {
        roll = RNG(1,1000)
        if (roll <= 500)
        {
            ctx.drawImage(images[5],i*64,j*49);
            grid_earth_array[i][j] = 4;
        }
        else {}
    }  
    else if ((j % 2) != 0 && grid_earth_array[i][j] == 1 && odd_earth_sum >= 10)
    {
        roll = RNG(1,1000)
        if (roll <= 500)
        {
            ctx.drawImage(images[5],(i*64)+32,j*49);
            grid_earth_array[i][j] = 4;
        }
        else {}
    }
    else {}
}

//-----------------------------------------------------//

function make_marsh(i,j)
{
    var odd_earth_sum = grid_earth_array[i][j - 1] + grid_earth_array[i + 1][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i + 1][j] + grid_earth_array[i][j + 1] + grid_earth_array[i + 1][j + 1];
    var even_earth_sum = grid_earth_array[i - 1][j - 1] + grid_earth_array[i][j - 1] + grid_earth_array[i - 1][j] + grid_earth_array[i+1][j] + grid_earth_array[i - 1][j + 1] + grid_earth_array[i][j + 1];

    if ((j % 2) == 0 && grid_earth_array[i][j] == 1 &&  grid_bonus_array[i][j] == 0 && even_earth_sum < 6) 
    {
        roll = RNG(1,1000)
        if (roll <= 90)
        {
            ctx.drawImage(bonus[3],i*64,j*49);
            grid_bonus_array[i][j] = 1
        }
        else {}
    }  
    else if ((j % 2) != 0 && grid_earth_array[i][j] == 1 &&  grid_bonus_array[i][j] == 0 && odd_earth_sum < 6)
    {
        roll = RNG(1,1000)
        if (roll <= 90)
        {
            ctx.drawImage(bonus[3],(i*64)+32,j*49);
            grid_bonus_array[i][j] = 1
        }
        else {}
    }
    else {}
}

function make_forest(i,j)
{
    if ((j % 2) == 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 &&  grid_bonus_array[i][j] == 0) 
    {
        roll = RNG(1,1000)
        if (roll <= 300)
        {
            ctx.drawImage(bonus[2],(i*64),(j*49));
            grid_bonus_array[i][j] = 1
        }
        else {}
    }  
    else if ((j % 2) != 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_bonus_array[i][j] == 0)
    {
        roll = RNG(1,1000)
        if (roll <= 300)
        {
            ctx.drawImage(bonus[2],(i*64)+32,(j*49));
            grid_bonus_array[i][j] = 1
        }
        else {}
    }
    else {}
}

//-----------------------------------------------------//

function make_resources_1(i,j)
{

    if ((j % 2) == 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0) 
        {
            roll = RNG(1,1000)
            if (roll <= 12)
            {
                ctx.drawImage(resources[0],i*64,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }  
        else if ((j % 2) != 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0)
        {
            roll = RNG(1,1000)
            if (roll <= 12)
            {
                ctx.drawImage(resources[0],(i*64)+32,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }
        else {}
}

function make_resources_2(i,j)
{

    if ((j % 2) == 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0) 
        {
            roll = RNG(1,1000)
            if (roll <= 6)
            {
                ctx.drawImage(resources[1],i*64,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }  
        else if ((j % 2) != 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0)
        {
            roll = RNG(1,1000)
            if (roll <= 6)
            {
                ctx.drawImage(resources[1],(i*64)+32,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }
        else {}
}

function make_resources_3(i,j)
{

    if ((j % 2) == 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0) 
        {
            roll = RNG(1,1000)
            if (roll <= 1)
            {
                ctx.drawImage(resources[2],i*64,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }  
        else if ((j % 2) != 0 && grid_earth_array[i][j] >= 1 && grid_earth_array[i][j] < 4 && grid_resources_array[i][j] == 0)
        {
            roll = RNG(1,1000)
            if (roll <= 2)
            {
                ctx.drawImage(resources[2],(i*64)+32,j*49);
                grid_resources_array[i][j] = 1
            }
            else {}
        }
        else {}
}