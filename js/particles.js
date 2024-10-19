// particles.js
let particleSystem, material, geometry;

export function initParticles(scene) {
  const particleCount = 10000;
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 400; // x
    positions[i * 3 + 1] = 0;                      // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 400; // z
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // 自定义着色器材质，不使用纹理
  material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      center: { value: new THREE.Vector2(0.0, 0.0) }
    },
    vertexShader: document.getElementById('particleVertex').textContent,
    fragmentShader: document.getElementById('particleFragment').textContent,
    transparent: true,
    depthTest: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  return particleSystem;
}
