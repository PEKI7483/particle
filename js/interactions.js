export function setupInteractions(particleSystem, camera, renderer) {
  const uniforms = particleSystem.material.uniforms;

  // 鼠标位置
  const mouse = new THREE.Vector2(0, 0);

  function onMouseMove(event) {
    event.preventDefault();

    // 将鼠标坐标转换为 Three.js 坐标系
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // 将鼠标位置映射到世界坐标系
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);

    uniforms.center.value.set(vector.x, vector.z);

    // 在鼠标经过的地方放大粒子
    for (let i = 0; i < particleSystem.geometry.attributes.size.array.length; i++) {
      const distance = vector.distanceTo(new THREE.Vector3(
        particleSystem.geometry.attributes.position.array[i * 3],
        particleSystem.geometry.attributes.position.array[i * 3 + 1],
        particleSystem.geometry.attributes.position.array[i * 3 + 2]
      ));

      particleSystem.geometry.attributes.size.array[i] = distance < 10 ? 10 : particleSystem.geometry.attributes.size.array[i];
    }

    particleSystem.geometry.attributes.size.needsUpdate = true;
  }

  window.addEventListener('mousemove', onMouseMove, false);
}
