#version 300 es
//Stefan Cuturela

precision mediump float;

out vec4 _GLF_color;
uniform vec2 resolution;

float radius(vec2 center_circle) {
  return sqrt((center_circle.x - gl_FragCoord.x) * (center_circle.x - gl_FragCoord.x) + (center_circle.y - gl_FragCoord.y) * (center_circle.y - gl_FragCoord.y)) / 4.612636806878599;
}

void main(void) {
  int circle_radius;
  int circle_index;
  vec2 imgCenter = vec2(resolution.x / 2.0, resolution.y / 2.0);

  vec2 points[15];
  points[0] = imgCenter + vec2(30.42187676616408, 75.91786109392757);
  points[1] = imgCenter + vec2(-79.75690759273728, 47.8229182739083);
  points[2] = imgCenter + vec2(5.345642148855689, -56.37914907627204);
  points[3] = imgCenter + vec2(96.33725355550288, 85.28075387979487);
  points[4] = imgCenter + vec2(-16.261357928042507, -81.95242194273789);
  points[5] = imgCenter + vec2(-22.92224383363679, -74.60385241259682);
  points[6] = imgCenter + vec2(33.91253081307186, -50.57092494803324);
  points[7] = imgCenter + vec2(18.48480652771791, 97.6146697427736);
  points[8] = imgCenter + vec2(54.954273233476236, -10.860706149164656);
  points[9] = imgCenter + vec2(54.93719317196148, 88.97147174695344);
  points[10] = imgCenter + vec2(-22.3717959410604, -78.74590981800003);
  points[11] = imgCenter + vec2(99.77641882006729, 75.53834779770713);
  points[12] = imgCenter + vec2(80.27019046348047, 78.14395495313254);
  points[13] = imgCenter + vec2(-33.36730054249595, -60.51617152369093);
  points[14] = imgCenter + vec2(-1.21773424997198, 68.0132176831911);

  int sizes[15];
  sizes[0] = 1;
  sizes[1] = 1;
  sizes[2] = 4;
  sizes[3] = 8;
  sizes[4] = 8;
  sizes[5] = 11;
  sizes[6] = 14;
  sizes[7] = 19;
  sizes[8] = 22;
  sizes[9] = 23;
  sizes[10] = 24;
  sizes[11] = 25;
  sizes[12] = 25;
  sizes[13] = 28;
  sizes[14] = 29;

  vec3 color_modifiers[15];
  color_modifiers[0] = vec3(0.2503836213428576, 0.09865338433735488, 0.12917959430438952);
  color_modifiers[1] = vec3(0.5015288821461596, -0.1704341550233815, 0.8581036079882179);
  color_modifiers[2] = vec3(0.7609969769739284, 0.5999109999370851, 0.7412744825459192);
  color_modifiers[3] = vec3(0.6544670820883098, 0.2342437364210313, 0.4473222080439774);
  color_modifiers[4] = vec3(0.8581450627464253, -0.16143832584055645, 0.7482603364378213);
  color_modifiers[5] = vec3(0.7294707873301582, 0.4001304349914295, 0.9359943421100136);
  color_modifiers[6] = vec3(1.0014022402320386, -0.09870279591213099, 0.13539548378214472);
  color_modifiers[7] = vec3(0.5194335086719599, 0.6494152032498763, 0.045568191777907496);
  color_modifiers[8] = vec3(0.5542432136110831, 0.6096520319883965, 0.714967566730565);
  color_modifiers[9] = vec3(0.24676181576853512, 0.21433341727650929, 0.2683171709293396);
  color_modifiers[10] = vec3(0.6470568840218225, 0.3524243323525615, 0.3537444002523671);
  color_modifiers[11] = vec3(0.3174652753812642, 0.5826291455371932, 0.8509652755001439);
  color_modifiers[12] = vec3(1.1561336011949839, -0.12125057109093845, 0.860110671689692);
  color_modifiers[13] = vec3(0.5514243039961351, 0.30461168943141986, 0.8738841012239217);
  color_modifiers[14] = vec3(0.2918795202868933, 0.2805200520348426, 0.41259635233816805);

  for (int i = 0; i < 15; i++) {
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
    _GLF_color = vec4(0.709703000958699, 0.8765323613831855, 0.3652572674905792, 1.0);
  }
}