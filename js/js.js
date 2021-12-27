var canvas = document.getElementById('c1');
var clearButton = document.getElementById('clear');
var toggler = document.getElementById('toggle-finish');
var colorCheckers = document.querySelectorAll('.dropdown-content>a');
var dickDrawButton = document.getElementById('DickDrawerButton');

const OFFSET_X = -canvas.offsetLeft;
const OFFSET_Y = -canvas.offsetTop;
const OFFSET_WIDTH = canvas.width;
const OFFSET_HEIGHT = canvas.height;

var isMouseDown = false;

var ctx = canvas.getContext('2d');

//DrawDick(ctx, 3 - small | 5 - medium | 7 - large);

ctx.strokeStyle = 'red';


canvas.onmouseenter = ev => {
    ctx.beginPath();

    ctx.moveTo(ev.clientX + OFFSET_X,
               ev.clientY + OFFSET_Y);
}

canvas.onmousemove = ev =>{
    
    if(isMouseDown)
        ctx.lineTo(ev.clientX + OFFSET_X,
                ev.clientY + OFFSET_Y);
    else 
        ctx.moveTo(ev.clientX + OFFSET_X,
                ev.clientY + OFFSET_Y);

    ctx.stroke();
};

canvas.onmousedown = ev =>{
    isMouseDown = true;
};

canvas.onmouseup = ev =>{
    isMouseDown = false;
    if(toggler.checked)
        ctx.closePath();
}

clearButton.onclick = ev =>{
    ctx.clearRect(0, 0, OFFSET_WIDTH, OFFSET_HEIGHT);
}

dickDrawButton.addEventListener('click', ev =>{
    var dickLength = document.querySelector('#DickDrawer>input').value;
    DrawDick(ctx, dickLength);
})

colorCheckers.forEach(checker =>
    {
        checker.addEventListener('click', SetColor);
})

function SetColor (ev) {
    ctx.strokeStyle = ev.target.innerHTML;
}

