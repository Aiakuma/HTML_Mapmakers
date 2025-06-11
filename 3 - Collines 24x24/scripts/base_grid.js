grid = new Array(6);
for (i = 0; i < 6; i++)
{
    grid[i] = new Array(6);
}

for (i = 0; i < 6; i++)
{
    for (j = 0; j < 6; j++)
        {
            grid[i][j] = new Array(25);
        }
}

for (i = 0; i < 6; i++)
{
    for (j = 0; j < 6; j++)
    {
        for (k = 0; k < 25; k++)
        {
            grid[i][j][k] = 0;
        }
    }
}

ref_grid = 
[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
]