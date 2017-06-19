function physicsSimulate()
{
  var state_array = [];
  var collidable_array = []
  var num_rigid_body = 2;

  var pos0 = new Vector(0, 0);
  var rot0 = CreateRotationMatrix(0);
  var state0 = new RigidBodyStatus(pos0, rot0, 0, 0)
  var pos1 = new Vector(1, 0);
  var state1 = new RigidBodyStatus(pos1, rot0, 0, 0)
  state_array.push(state0);
  state_array.push(state1);

  var center0 = new Vector(0, 0);
  var half0 = new Vector(1, 1);
  var collidable0 = new RigidBodyCollidable(1, center0, half0);
  var collidable1 = new RigidBodyCollidable(1, center0, half0);
  collidable_array.push(collidable0);
  collidable_array.push(collidable1);

  BroadPhase(state_array, collidable_array, num_rigid_body);
}

physicsSimulate();
