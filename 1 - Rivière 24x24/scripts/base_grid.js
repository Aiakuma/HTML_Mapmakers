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

refined_grid =
[
    cluster_1 =
    [
        grid[0][0], grid[0][1], grid[0][2], grid[0][3], 
        grid[1][0], grid[1][1], grid[1][2], grid[1][2], 
        grid[2][0],
    ],

    cluster_2 =
    [
        grid[0][4], grid[0][5], grid[0][6], grid[0][7], grid[0][8],
        grid[1][4], grid[1][5], grid[1][6], grid[1][7],
        
    ],
]