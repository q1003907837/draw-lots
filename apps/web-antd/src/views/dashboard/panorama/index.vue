<template>
  <div
    class="containerCanvas relative h-screen w-screen overflow-hidden"
    ref="containerCanvas"
  >
    <div
      class="pop absolute right-10 top-10 z-40 grid h-40 w-40 grid-cols-2 gap-0 rounded border-s bg-black p-2 opacity-60"
    >
      <div
        class="office flex cursor-pointer items-center justify-center border border-white"
        @click="changeImg(0)"
      >
        办公
      </div>
      <div
        class="relax flex cursor-pointer items-center justify-center border border-white"
        @click="changeImg(1)"
      >
        休息
      </div>
      <div
        class="develop flex cursor-pointer items-center justify-center border border-white"
        @click="changeImg(2)"
      >
        开发
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

const containerCanvas = ref(null);

let scene, camera, renderer, sphere, controls;
let isAnimating = false;
const index = ref(0);
const initPanorama = () => {
  const width = containerCanvas.value.clientWidth;
  const height = containerCanvas.value.clientHeight;
  console.log(width, height);

  // 初始化场景、相机和渲染器
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 0.1);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  containerCanvas.value.appendChild(renderer.domElement);

  // 创建球体几何体并加载全景图
  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('./panoramaImg/meet.jpg', (texture) => {
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    isAnimating = true; // 开始动画
    animate();
  });

  // 设置 360 度的控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 惯性阻尼
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.5;
  controls.maxPolarAngle = Math.PI; // 限制最大垂直旋转角度

  window.addEventListener('resize', onWindowResize);
};

const animate = () => {
  if (!isAnimating) return; // 如果已停止，则退出
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

const onWindowResize = () => {
  // 窗口尺寸调整时更新相机和渲染器
  const width = containerCanvas.value.clientWidth;
  const height = containerCanvas.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

//切换房间
const changeImg = (i) => {
  index.value = i;
  const textureLoader = new THREE.TextureLoader();
  // 淡出当前纹理
  gsap.to(sphere.material, {
    opacity: 0,
    duration: 1, // 淡出持续时间
    onComplete: () => {
      // 在淡出完成后加载新纹理
      textureLoader.load(
        `./panoramaImg/${['meet', 'relax', 'develop'][i]}.jpg`,
        (texture) => {
          sphere.material.map = texture;
          sphere.material.needsUpdate = true;

          // 淡入新纹理
          gsap.to(sphere.material, {
            opacity: 1,
            duration: 1, // 淡入持续时间
          });
        },
      );
    },
  });
};
onMounted(() => {
  initPanorama();
});

onUnmounted(() => {
  isAnimating = false; // 停止动画
  if (renderer) {
    renderer.dispose();
    controls.dispose();
    window.removeEventListener('resize', onWindowResize);
  }
});
</script>

<style lang="scss" scoped></style>
