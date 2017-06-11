onload = function(){
  draw();
};

function draw(){
  var canvas = document.getElementById('canvas');
  if(!canvas || !canvas.getContext){
    return false;
  }

  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(120, 20);
  ctx.lineTo(120, 120);
  ctx.lineTo(20, 120);
  ctx.closePath();
  ctx.stroke();
}
