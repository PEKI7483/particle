// particleFragment.glsl
varying float vDistance;

void main() {
  // 计算粒子内部的坐标，范围从 -0.5 到 0.5
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);

  // 创建圆形粒子，超过半径的部分丢弃
  if (dist > 0.5) {
    discard;
  }

  // 创建柔和的边缘
  float alpha = 1.0 - smoothstep(0.4, 0.5, dist);

  // 根据与中心的距离，调整整体透明度，实现模糊效果
  alpha *= 1.0 - smoothstep(50.0, 200.0, vDistance);

  // 设置粒子的颜色
  vec3 color = vec3(0.0, 0.8, 0.0); // 绿色

  gl_FragColor = vec4(color, alpha);
}
