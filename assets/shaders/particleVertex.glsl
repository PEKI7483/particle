// particleVertex.glsl
uniform float time;
uniform vec2 center;
varying float vDistance;

void main() {
  vec3 pos = position;

  // 添加微风效果，模拟草的轻微摆动
  pos.y += sin(time + position.x * 0.1) * 0.5;

  // 计算粒子与中心的距离
  vDistance = distance(pos.xz, center);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  // 根据距离调整粒子大小
  float size = 5.0 * (1.0 - smoothstep(50.0, 200.0, vDistance));
  gl_PointSize = size;
}
