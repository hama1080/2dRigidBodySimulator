function CheckIntersectAABB(centerA, halfA, centerB, halfB)
{
  if(Math.abs(centerA.x - centerB.x) > (halfA.x + halfB.x)) return false;
  if(Math.abs(centerA.y - centerB.y) > (halfA.y + halfB.y)) return false;
  return true;
}

function BroadPhase(
  state_array,
  collidable_array,
  num_rigid_bodie
)
{
  //find AABB intersection pair
  var pair_array = []
  for(var i = 0; i != num_rigid_bodie; i++)
  {
    for(var j = i+1; j != num_rigid_bodie; j++)
    {
      stateA = state_array[i];
      collidableA = collidable_array[i];
      stateB = state_array[j];
      collidableB = collidable_array[i];

      var expand_half = new Vector(0.01, 0.01);
      var rotA = stateA.rotation;
      var centerA = stateA.pos + rotA.multiple_vec(collidableA.AABB.center);
      var halfA = collidableA.AABB.half +  expand_half; //expand AABB

      var rotB = stateB.rotation;
      var centerB = stateB.pos + rotB.multiple_vec(collidableB.AABB.center);
      var halfB = collidableB.AABB.half + expand_half;  //expand AABB

      //check intersect A, B
      if(CheckIntersectAABB(centerA, halfA, centerB, halfB))
      {
        //create pair
        var index0 = i < j ? i : j;
        var index1 = i < j ? j : i;
        var pair = new Pair(i, j, null);
        pair_array.push(pair);
      }
    }
  }
  console.log(pair);

  //sort

  //comparison pair

  //sort
}
