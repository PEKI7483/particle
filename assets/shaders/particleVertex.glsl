// particleVertex.glsl
uniform float time;
uniform vec2 center;
attribute float size;
varying float vDistance;

void main() {
  vec3 pos = position;

  // 通过时间和位置生成轻微的摇摆效果，模拟风吹
  pos.x += sin(time + position.x * 0.1) * 0.5;
  pos.z += cos(time + position.z * 0.1) * 0.5;

  // 计算粒子与鼠标中心的距离
  vDistance = distance(pos.xz, center);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = size * (1.0 - smoothstep(50.0, 200.0, vDistance)); // 调整粒子的大小
}
