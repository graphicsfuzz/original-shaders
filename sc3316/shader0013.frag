#version 300 es
//Stefan Cuturela

precision mediump float;

out vec4 _GLF_color;
uniform vec2 resolution;
uniform float modparam;

float distanceY(float  x, float y) {
  float temp = x - gl_FragCoord.y;
  float tempSq = temp * temp;
  return sqrt(tempSq);
}

float colorFromX(float  x, float y) {
  float temp = x - gl_FragCoord.x;
  float tempSq = temp * temp;
  return sqrt(tempSq);
}

float distanceX(float  x, float y) {
  float temp = x - gl_FragCoord.x;
  float tempSq = temp * temp;
  return sqrt(tempSq);
}

float modulo(float  x, float y) {
  return mod(x * x, y);
}

void main(void) {
  float t0 = distanceX(gl_FragCoord.y, 0.0);
  float t1 = distanceY(gl_FragCoord.x, 0.0);
  _GLF_color = vec4(modulo(colorFromX(t1, t1), modparam), modulo(colorFromX(t1, t1), modparam), 0.0, 1.0);
}
