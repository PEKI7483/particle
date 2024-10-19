import * as THREE from '../libs/three.min.js';

let particleSystem, material, geometry;

export function initParticles(scene) {
  const particleCount = 10000;
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  // 使用噪声函数调整粒子的分布和大小
  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 400;
    const y = Math.random() * 5; // 调整粒子高度模拟草的不同长度
    const z = (Math.random() - 0.5) * 400;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    sizes[i] = Math.random() * 5 + 1; // 粒子大小随机，模拟草叶的不同长度
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  // 自定义着色器材质
  material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      center: { value: new THREE.Vector2(0.0, 0.0) },
    },
    vertexShader: document.getElementById('particleVertex').textContent,
    fragmentShader: document.getElementById('particleFragment').textContent,
    transparent: true,
    depthTest: false,
    blending: THREE.AdditiveBlending, // 使用加法混合增加粒子的动态效果
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  return particleSystem;
}
