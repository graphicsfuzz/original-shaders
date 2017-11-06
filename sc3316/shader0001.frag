#version 300 es

precision mediump float;

out vec4 _GLF_color;
uniform vec2 resolution;

float radius(vec2 point) {
vec2 center = vec2(resolution.x/2.0, resolution.y/2.0);
  return sqrt((center.x - point.x) * (center.x - point.x) + (center.y - point.y) * (center.y - point.y));
}

void main(void) {
float rad = radius(vec2(gl_FragCoord.x,gl_FragCoord.y));
_GLF_color = vec4(mod(rad*12.0,0.75), mod(rad*12.0,0.75), gl_FragCoord.x/resolution.x , 1.0);
}



