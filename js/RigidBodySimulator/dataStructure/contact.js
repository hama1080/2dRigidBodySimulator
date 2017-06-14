class Constraint
{
  constructor(axis, jacDiagInv, rhs, lower_limit, upper_limit, accum_impulse)
  {
    this._axis = axis;
    this._jacDiagInv = jacDiagInv;
    this._rhs = rhs;
    this._lower_limit = lower_limit;
    this._upper_limit = upper_limit;
    this._accum_impulse = accum_impulse;
  }
}

class ContactPoint
{
  constructor(distance, point0, point1, normal, constraint)
  {
    this._distance = distance;
    this._point0 = point0;
    this._point1 = point1;
    this._normal = normal;
    this._constraint = constraint;
  }
}

// contact is the information of contact point.
class Contact
{
  constructor(num_contacts, friction, contact_points)
  {
    this._num_contacts = num_contacts;
    this._friction = friction;
    this._contact_points = contact_points;
  }
}
