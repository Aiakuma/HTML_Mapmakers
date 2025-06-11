function RNG(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function make_background(i,j)
{
    ctx.drawImage(background[0],i*768,j*768);
}

function make_tile_square(i,j)
{
    k = RNG(0,19)
    ctx.drawImage(tile_square[k],i,j);
}

function make_height_tile_rect(i,j)
{
    k = RNG(0,8)
    ctx.drawImage(height_tile_rect[k],i,j);
}

function make_width_tile_rect(i,j)
{
    k = RNG(0,8)
    ctx.drawImage(width_tile_rect[k],i,j);
}