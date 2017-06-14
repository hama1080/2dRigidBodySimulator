// Pair consists of two rigid body indices and an information of contact
class Pair
{
  constructor(key, index0, index1, contact_info)
  {
    this._key = key;       //unique key
    this._index0 = index0;
    this._index1 = index1;
    this._contact_info = contact_info;
  }
}
