// vector class: define 2D(x, y) vector
class Vector{
  constructor(x = 0, y = 0){
    this._x = x;
    this._y = y;
  }
  set x(x){
    this._x = x;
  }
  set y(y){
    this._y = y;
  }
  get x(){
    return this._x;
  }
  get y(){
    return this._y;
  }

  add(rhs)
  {
    return new Vector(this._x + rhs.x, this._y + rhs.y);
  }
  sub(rhs)
  {
    return new Vector(this._x - rhs.x, this._y - rhs.y);
  }
  mul(rhs)
  {
    return new Vector(this._x * rhs.x, this._y * rhs.y);
  }
  div(rhs)
  {
    return new Vector(this._x / rhs.x, this._y / rhs.y);
  }
  equal(rhs)
  {
    if (this._x === rhs.x && this._y === rhs.y){
      return true;
    }
    else{
      return false;
    }
  }
  nequal(rhs)
  {
    if (this._x !== rhs.x || this._y !== rhs.y){
      return true;
    }
    else{
      return false;
    }
  }
  size()
  {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }
}
