function DrawDick(ctx, ballsToDickRatio){

    var ballsRadius = 25;
    var dickLength = ballsRadius * ballsToDickRatio;

    ctx.beginPath();
    ctx.setLineDash([10,10]);  
    DrawCircle(ctx, 325, 175, ballsRadius);
    DrawCircle(ctx, 375, 175, ballsRadius);

    ctx.beginPath();
    ctx.moveTo(325,150);
    ctx.bezierCurveTo(
        325,
        150 - dickLength,
        375,
        150 - dickLength,
        375,
        150);
    ctx.stroke();
}

function DrawCircle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 360);
    ctx.stroke();
    ctx.closePath();
}
