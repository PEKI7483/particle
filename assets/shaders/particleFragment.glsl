// particleFragment.glsl
varying float vDistance;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);

  if (dist > 0.5) discard;

  // 柔和的边缘效果
  float alpha = 1.0 - smoothstep(0.4, 0.5, dist);

  // 根据距离生成渐变颜色
  vec3 color = mix(vec3(0.0, 1.0, 0.0), vec3(0.0, 0.5, 0.0), vDistance / 200.0);

  gl_FragColor = vec4(color, alpha);
}
