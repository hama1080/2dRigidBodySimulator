// AABB: Axis Aligned Bounding Box
class AABB{
  constructor(center, half){
    this._center = center;
    this._half = half;
  }
  set center(center){this._center = center;}
  set half(half){this._half = half;}

  get center(){return this._center;}
  get half(){return this._half;}
}
