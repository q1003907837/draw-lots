<template>
  <div class="box">
    <div class="btnWrap">
      <div @click="cubesBox()">客厅</div>
      <div @click="spheresBox()">卧室</div>
    </div>
    <div class="container" ref="container"> </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'
  import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

  //初始化场景
  const scene = new THREE.Scene()
  //初始化相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  //初始化渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  //设置相机位置
  camera.position.set(0, 0, 0.1)

  // 挂载dom
  const container = ref(null)
  const render = () => {
    // 渲染
    renderer.render(scene, camera)
    // 动画
    requestAnimationFrame(render)
  }

  const cubesBox = () => {
    clearScene(scene)
    //创建立方体
    // 几何体
    const geometry = new THREE.BoxGeometry(10, 10, 10)
    //添加贴图
    //左右上下前后
    const imgList = ['left', 'right', 'top', 'bottom', 'back', 'front']
    const BoxMaterials = []
    imgList.forEach((item) => {
      BoxMaterials.push(
        new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(`./room/${item}.jpeg`),
        }),
      )
    })
    const cube = new THREE.Mesh(geometry, BoxMaterials)
    //进入内部
    cube.geometry.scale(1, 1, -1)
    scene.add(cube)
  }

  const spheresBox = () => {
    clearScene(scene)
    //创建球体
    // const geometry = new THREE.SphereGeometry(5, 40, 40)
    // const exrLoader = new EXRLoader()
    // exrLoader.load('./hdr/room.exr', (texture) => {
    //   console.log(texture)
    //   texture.mapping = THREE.EquirectangularReflectionMapping
    //   // 创建材质
    //   const material = new THREE.MeshBasicMaterial({
    //     map: texture,
    //     side: THREE.BackSide, // 使球体内部可见
    //   })

    //   const sphere = new THREE.Mesh(geometry, material)
    //   scene.add(sphere)
    // })
    //创建立方体
    // 几何体
    const geometry = new THREE.BoxGeometry(10, 10, 10)
    //添加贴图
    //左右上下前后
    const imgList = ['left', 'right', 'top', 'bottom', 'back', 'front']
    const BoxMaterials = []
    imgList.forEach((item) => {
      BoxMaterials.push(
        new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(`./room/${item}.jpeg`),
        }),
      )
    })
    const cube = new THREE.Mesh(geometry, BoxMaterials)
    //进入内部
    cube.geometry.scale(1, 1, -1)
    scene.add(cube)
  }
  // 清除场景中的所有对象
  const clearScene = (scene) => {
    console.log(scene)

    while (scene.children.length > 0) {
      const child = scene.children[0]
      scene.remove(child)
    }
  }

  onMounted(() => {
    //添加控制器
    const controls = new OrbitControls(camera, container.value)
    //阻尼
    controls.enableDamping = true

    container.value.appendChild(renderer.domElement)
    render()
    cubesBox()
    // spheresBox();
  })
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .box {
    position: relative;
  }

  .btnWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 999;

    div {
      color: #fff;
      border-radius: 3px;
      background: #528bff;
      padding: 5px 5px;
      cursor: pointer;
      z-index: 999;

      &:nth-child(1) {
        margin-right: 20px;
      }
    }
  }
</style>
