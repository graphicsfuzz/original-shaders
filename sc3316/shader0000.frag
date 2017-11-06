#version 300 es
//author Stefan Cuturela

precision mediump float;

out vec4 _GLF_color;
uniform vec2 resolution;

float radius(vec2 center_circle) {
  return sqrt((center_circle.x - gl_FragCoord.x) * (center_circle.x - gl_FragCoord.x) + (center_circle.y - gl_FragCoord.y) * (center_circle.y - gl_FragCoord.y)) / 5.0;
}

void main(void) {
  int circle_radius;
  int circle_index;
  vec2 imgCenter = vec2(resolution.x / 2.0, resolution.y / 2.0);

  vec2 points[7];
  points[0] = imgCenter + vec2(-30.0, 25.0);
  points[1] = imgCenter + vec2(0.0, 0.0);
  points[2] = imgCenter + vec2(100.0, 100.0);
  points[3] = imgCenter + vec2(14.5, 27.5);
  points[4] = imgCenter + vec2(-75.0, -75.0);
  points[5] = imgCenter + vec2(50.0, -50.0);
  points[6] = imgCenter + vec2(-50.0, 50.0);

  int sizes[7];
  sizes[0] = 6;
  sizes[1] = 10;
  sizes[2] = 10;
  sizes[3] = 15;
  sizes[4] = 20;
  sizes[5] = 30;
  sizes[6] = 30;

  vec3 color_modifiers[7];
  color_modifiers[0] = vec3(1.3, 1.9, 1.2);
  color_modifiers[1] = vec3(1.4, 1.87, 3.3);
  color_modifiers[2] = vec3(1.43, 1.32, 1.64);
  color_modifiers[3] = vec3(1.5, 2.3, 1.2);
  color_modifiers[4] = vec3(1.4, 1.8, 1.2);
  color_modifiers[5] = vec3(3.85, 1.8, 1.2);
  color_modifiers[6] = vec3(2.5, 2.5, 2.5);

  for (int i = 0; i < 7; i++) {
    if (int(radius(points[i])) < sizes[i]) {
      circle_index = i;
      circle_radius = int(radius(points[i]));
      break;
    }
  }

  if (circle_radius != 0 && circle_radius < sizes[circle_index]) {
    float red = mod(float(circle_radius), color_modifiers[circle_index].x);
    float green = mod(float(circle_radius), color_modifiers[circle_index].y);
    float blue = mod(float(circle_radius), color_modifiers[circle_index].z);
    _GLF_color = vec4(red, green, blue, 1.0);
  } else {
    _GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
