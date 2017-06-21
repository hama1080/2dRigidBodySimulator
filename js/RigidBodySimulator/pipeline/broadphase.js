function CheckIntersectAABB(centerA, halfA, centerB, halfB)
{
  if(Math.abs(centerA.x - centerB.x) > (halfA.x + halfB.x)) return false;
  if(Math.abs(centerA.y - centerB.y) > (halfA.y + halfB.y)) return false;
  return true;
}

function BroadPhase(
  state_array,
  collidable_array,
  num_rigid_bodie,
  old_pair_array,
  old_num_pairs
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

  //comparison pair
  var keep_pair_array = [];
  var new_pair_array = [];
  var old_i = 0, new_i = 0;
  while(old_i < old_num_pairs && new_i < pair_array.length)
  {
    if(pair_array[new_i].key > old_pair_array[old_i].key)
    {
      //remove old contact
      old_pair_array[old_i].contact = null;
      old_i++;
    }
    else if (pair_array[new_i].key == old_pair_array[old_i].key) {
      //keep
      out_keep_pair_array.push(pair_array[new_i]);
      old_i++;
      new_i++;
    }else{
      //new
      out_new_pair_array.push(pair_array[new_i]);
      new_i++;
    }
  }

  if(new_i < pair_array.length){
    // all new
    for(; new_i < pair_array.length; new_i++)
      out_new_pair_array.push(pair_array[new_i]);
  }else if(old_i < old_num_pairs){
    // all remove
    for(; old_i < old_num_pairs; old_i++)
      old_pair_array[old_i].contact = null;
  }

  //refresh keep pair
  for(var i=0; i != out_keep_pair_array.length; i++){
    //todo
  }

  //merge pair
  pair_array = []
  var num_new_pairs = 0;
  for(var i=0; i != out_keep_pair_array.length; i++){
    //out_keep_pair_array[i].type = keep;
    pair_array.push(out_keep_pair_array[i]);
  }
  for(var i=0; i != new_pair_array.length; i++){
    //out_new_pair_array[i].type = new;
    pair_array.push(out_new_pair_array[i]);
  }

  //sort
}
