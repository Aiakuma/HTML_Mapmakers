//-----------------------------------------------------//
// ALGORITHM
//-----------------------------------------------------//

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        grid_value_array[i][j] = RNG(6,6)
    }
};

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        grid_earth_array[i][j] = 1;
    }        
};

/*
for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length-1 && j != grid_height-1)
        {
            smooth_coast(i,j);
        }
    }        
};
*/

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        draw_a_hex(i,j);
    }        
};

/*
for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_coast(i,j);
        }
    }
};
*/

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_hill(i,j);
        }
    }
};

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_mountain(i,j);
        }
    }
};

//-----------------------------------------------------//
// BONUS
//-----------------------------------------------------//

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_marsh(i,j);
        }
    }
};

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_forest(i,j);
        }
    }
};   

//-----------------------------------------------------//
// RESSOURCES
//-----------------------------------------------------//

/*
for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_resources_1(i,j);
        }
    }
};

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_resources_2(i,j);
        }
    }
};

for (i = 0; i < grid_length; i++)
{
    for (j = 0; j < grid_height; j++)
    {
        if (i != 0 && j != 0 && i != grid_length - 1 && j != grid_height - 1)
        {
            make_resources_3(i,j);
        }
    }
};
*/

//-----------------------------------------------------//
// DEBUG
//-----------------------------------------------------//

//console.log(grid_value_array);
//console.log(grid_earth_array);