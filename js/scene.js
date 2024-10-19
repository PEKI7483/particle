// scene.js
let camera, renderer, scene;

export function initScene() {
  scene = new THREE.Scene();

  // 设置相机
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 100;

  // 设置渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // 添加方向光
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 1).normalize();
  scene.add(directionalLight);

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

  // 更新场景中的对象
  // 可以在这里添加动画逻辑

  renderer.render(scene, camera);
}
