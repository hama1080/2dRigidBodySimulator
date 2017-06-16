// rigid body is composed of shape, status, and property
class RigidBodyShape{
  constructor(shape){
    this._shape = shape;
  }
}

class RigidBodyCollidable{
  constructor(shape, center, half){
    this._shape = new RigidBodyShape(shape);
    this._AABB = new AABB(center, half);
  }
}

class RigidBodyProperty{
  constructor(inertia = 0, mass = 0, restitution = 0, friction = 0){
    this._inertia = inertia;
    this._mass = mass;
    this._restitution = restitution;
    this._friction = friction;
  }
  set inertia(inertia){this._inertia = inertia;}
  set mass(inertia){this._mass = mass;}
  set restitution(inertia){this._restitution = restitution;}
  set friction(inertia){this._friction = friction;}

  get inertia(){return this._inertia;}
  get mass(){return this._mass;}
  get restitution(){return this._restitution;}
  get friction(){return this._friction;}
}

class RigidBodyStatus{
  constructor(pos, rot, linearVel, angularVel){
    this._position = pos;
    this._rotation = rot;
    this._linearVelocity = linearVel;
    this._angularVelocity = angularVel;
  }

  set position(pos){this._position = pos;}
  set rotation(rot){this._rotation = rot;}
  set linearVelocity(linearVel){this._linearVelocity = linearVel;}
  set angularVelocity(angularVel){this._angularVelocity = angularVel;}

  get position(){return this._position;}
  get rotation(){return this._rotation;}
  get linearVelocity(){return this._linearVelocity;}
  get angularVelocity(){return this._angularVelocity;}
}
