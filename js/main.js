// main.js
import { initScene, animate } from './scene.js';
import { initParticles } from './particles.js';
import { setupInteractions } from './interactions.js';

// 初始化场景
const { scene, camera, renderer } = initScene();

// 初始化粒子系统
const particleSystem = initParticles(scene);

// 设置交互
setupInteractions(particleSystem, camera, renderer);

// 启动动画循环
animate();
