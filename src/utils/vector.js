import Victor from 'victor'

Victor.prototype.setLength = function (scalar) {
  var length = this.length()
  if (scalar >= 0 && length !== 0) {
    var sinA = this.y / length
    var sinB = this.x / length
    this.y = sinA * scalar
    this.x = sinB * scalar
  }
  return this
}

Victor.prototype.addLength = function (scalar) {
  return this.setLength(this.length() + scalar)
}

export default Victor