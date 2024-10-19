// interactions.js
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
  
      uniforms.center.value.set(vector.x, vector.z); // 注意，这里使用 x 和 z 轴，因为 y 轴固定为 0
    }
  
    function onTouchMove(event) {
      event.preventDefault();
  
      if (event.touches.length > 0) {
        const touch = event.touches[0];
  
        mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (touch.clientY / window.innerHeight) * 2 + 1;
  
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);
  
        uniforms.center.value.set(vector.x, vector.z);
      }
    }
  
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchmove', onTouchMove, false);
  
    // 更新时间
    function update() {
      requestAnimationFrame(update);
      uniforms.time.value += 0.05;
    }
  
    update();
  }
  