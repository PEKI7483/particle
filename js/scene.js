let camera, renderer, scene;

export function initScene() {
  scene = new THREE.Scene();

  // 调整相机视角，模拟三维草坪效果
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 50, 150); // 设置相机稍微倾斜，增加三维感

  // 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 背景颜色从浅蓝色渐变到地面颜色
  renderer.setClearColor(new THREE.Color(0xf0f8ff), 1);

  // 监听窗口大小变化
  window.addEventListener('resize', onWindowResize, false);

  return { scene, camera, renderer };
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export function animate() {
  requestAnimationFrame(animate);

  // 更新时间，驱动草叶的摇摆效果
  particleSystem.material.uniforms.time.value += 0.01;

  renderer.render(scene, camera);
}
