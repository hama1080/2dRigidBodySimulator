function RenderCircle(context, center_pos, radius, rotation)
{
  //not support rotational circle
  context.beginPath();
  context.arc(center_pos.x, center_pos.y, radius, 0, Math.PI*2, false);
  context.stroke();
  //todo draw rotational circle as render line from center to edge
}

function RenderBox(context, center_pos, half_extents, rotation)
{
  //not support rotational box
  pt0 = new Vector(center_pos.x - half_extents.x, center_pos.y - half_extents.y);
  pt1 = new Vector(center_pos.x - half_extents.x, center_pos.y + half_extents.y);
  pt2 = new Vector(center_pos.x + half_extents.x, center_pos.y + half_extents.y);
  pt3 = new Vector(center_pos.x + half_extents.x, center_pos.y - half_extents.y);

  context.beginPath();
  context.moveTo(pt0.x, pt0.y);
  context.lineTo(pt1.x, pt1.y);
  context.lineTo(pt2.x, pt2.y);
  context.lineTo(pt3.x, pt3.y);
  context.closePath();
  context.stroke();
}

onload = function(){
  draw();
};

function draw(){
  var canvas = document.getElementById('canvas');
  if(!canvas || !canvas.getContext){
    return false;
  }

  var ctx = canvas.getContext('2d');
  center = new Vector(50, 50);
  half_ex = new Vector(20, 20);
  RenderBox(ctx, center, half_ex, 0 );
  RenderCircle(ctx, center, 50, 0);
}
