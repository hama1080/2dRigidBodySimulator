// Pair consists of two rigid body indices and an information of contact
var key_num = 0;
class Pair
{
  constructor(index0, index1, contact_info)
  {
    this._key = key_num;       //unique key
    this._index0 = index0;
    this._index1 = index1;
    this._contact_info = contact_info;
    key_num++;
  }
  get key(){return this._key;}
  get index0(){return this._index0;}
  get index1(){return this._index1;}
  get contact_info(){return this._contact_info;}
}
