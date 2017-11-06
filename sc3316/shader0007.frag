#version 300 es
//Stefan Cuturela

precision mediump float;

out vec4 _GLF_color;
uniform vec2 resolution;

float radius(vec2 center_circle) {
  return sqrt((center_circle.x - gl_FragCoord.x) * (center_circle.x - gl_FragCoord.x) + (center_circle.y - gl_FragCoord.y) * (center_circle.y - gl_FragCoord.y)) / 4.044841854082904;
}

void main(void) {
  int circle_radius;
  int circle_index;
  vec2 imgCenter = vec2(resolution.x / 2.0, resolution.y / 2.0);

  vec2 points[13];
  points[0] = imgCenter + vec2(70.70559315525122, -71.21828207892533);
  points[1] = imgCenter + vec2(53.21573391323984, -49.79973676037026);
  points[2] = imgCenter + vec2(-18.509428436388408, 11.20105709517205);
  points[3] = imgCenter + vec2(-46.2690780138453, 72.85085421285183);
  points[4] = imgCenter + vec2(23.95711186040501, 89.71444849304264);
  points[5] = imgCenter + vec2(52.00464366042792, 48.4133593450706);
  points[6] = imgCenter + vec2(79.39496390739342, -21.443163495027594);
  points[7] = imgCenter + vec2(68.76430326447156, 56.33842566161369);
  points[8] = imgCenter + vec2(-52.289856752855336, -76.6284556445068);
  points[9] = imgCenter + vec2(28.58323506211533, 67.94054231224986);
  points[10] = imgCenter + vec2(8.93084397079229, 37.36772335470737);
  points[11] = imgCenter + vec2(16.712595029762877, 51.21658103870643);
  points[12] = imgCenter + vec2(-10.209093616108888, -28.973976678086256);

  int sizes[13];
  sizes[0] = 3;
  sizes[1] = 3;
  sizes[2] = 5;
  sizes[3] = 7;
  sizes[4] = 9;
  sizes[5] = 11;
  sizes[6] = 12;
  sizes[7] = 20;
  sizes[8] = 21;
  sizes[9] = 25;
  sizes[10] = 28;
  sizes[11] = 28;
  sizes[12] = 29;

  vec3 color_modifiers[13];
  color_modifiers[0] = vec3(0.27174737483403894, -0.01884422454112361, 0.7762900732185009);
  color_modifiers[1] = vec3(0.6741334942218151, -0.23352754273899318, 0.4641455927652639);
  color_modifiers[2] = vec3(0.40523216688766267, -0.26450520828287977, 0.7780519540949842);
  color_modifiers[3] = vec3(0.7415367795765191, -0.09761435318268724, 0.6895200667262802);
  color_modifiers[4] = vec3(0.3369716658746113, 0.4726878309131836, 0.5588770212570859);
  color_modifiers[5] = vec3(0.6539146865376779, 0.4264048037569405, 0.09689193356774362);
  color_modifiers[6] = vec3(0.2728492109535859, -0.04003330609196204, 0.25890142521457704);
  color_modifiers[7] = vec3(0.27459889683391797, 0.07519510304019689, 0.996648036920536);
  color_modifiers[8] = vec3(0.6123657687768429, -0.050831113837989716, 0.5332778838383727);
  color_modifiers[9] = vec3(0.6140574157657046, 0.22418711170300493, 0.3457903361396646);
  color_modifiers[10] = vec3(0.37502635692309166, 0.4462585211293469, 0.655792748131502);
  color_modifiers[11] = vec3(0.5773779524244624, 0.6989862832778715, 0.9322178916568662);
  color_modifiers[12] = vec3(1.0519406992679052, -0.03989731721790374, 0.06782745069013496);

  for (int i = 0; i < 13; i++) {
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
    _GLF_color = vec4(0.5224010042113443, 0.19143660286625896, 0.6748364310266053, 1.0);
  }
}