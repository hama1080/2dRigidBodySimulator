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
  for(var i = 0; i != num_rigid_bodie; i++)
  {
    for(var j = 0; j != num_rigid_bodie; j++)
    {
      stateA = state_array[i];
      collidableA = collidable_array[i];
      stateB = state_array[j];
      collidableB = collidable_array[i];

      var rotA = stateA.rot;
      var centerA = stateA.pos + rot.multiple_vec(collidableA.center);
      //var halfA = //expand AABB

      var rotB = stateB.rot;
      var centerB = stateB.pos + rot.multiple_vec(collidableB.center);
      //var halfB = //expand AABB

      //check intersect A, B
    }
  }

  //sort

  //comparison pair

  //sort
}
