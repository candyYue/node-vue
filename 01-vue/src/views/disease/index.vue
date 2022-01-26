<template>
  <div id="container" style="width:100%;height:100%;position:relative; overflow: hidden;"></div>
</template>

<script setup>
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '@/assets/js/OrbitControls'
// import { WebGLRenderer, Scene, PerspectiveCamera,Color,Fog,
//   PointLight,
//   AmbientLight,
//   DirectionalLight,
//   HemisphereLight,
//   OrbitControls,
//   SphereGeometry,
//   MeshPhongMaterial
// } from 'three';
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
//https://blog.csdn.net/c3618392/article/details/118188285
  let renderer, camera, scene, light, controls
  let num =0
  const Dom = document.querySelector( '.view-content' );
  const width = Dom.clientWidth - 40, height = Dom.clientHeight - 40;
  
  function initScene() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x020924 );
		scene.fog = new THREE.Fog( 0x020924, 200, 1000 );
	}
  function initCamera() {
		camera = new THREE.PerspectiveCamera( 45, width / height, 1, 10000 );
		camera.position.set(0,0,400);
    camera.up.set(0,1,0);
		camera.lookAt( 0, 0, 0 );
    //let axe=new THREE.AxesHelper(20);
    //scene.add(axe);//辅助工具，用于创建相机时，相机找到合适的位置
	}
	function initLight() {
		light=new THREE.DirectionalLight(0xffffff,0.6);
    light.position.set(0,0,400);
    scene.add(light);
	}
  function initRenderer() {
    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    const containerDom = document.querySelector( '#container' );
    containerDom.appendChild( renderer.domElement );
  }
  var xkbg,earth;
  function intModels(){
        /* 宇宙背景 */
      var yz_geometry = new THREE.SphereGeometry(500,500,50);
      var yz_material = new THREE.MeshPhongMaterial({
          map:THREE.ImageUtils.loadTexture('/img/earthbg.png'),
          side: THREE.DoubleSide
      });
      xkbg= new THREE.Mesh(yz_geometry,yz_material);
      xkbg.position.set(0,0,0);
      scene.add(xkbg);
      //地球
      var earth_geometry = new THREE.SphereGeometry(100,50,50);
      var earth_material = new THREE.MeshPhongMaterial({
          map:THREE.ImageUtils.loadTexture('/img/earth.png'),
          side: THREE.DoubleSide
      });
      earth= new THREE.Mesh(earth_geometry,earth_material);
      earth.position.set(0,0,0);
      xkbg.add(earth);
  }
	/**
	 * 初始化用户交互
	 **/
	function initControls() {
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.enableDamping = true;
		controls.enableZoom = true;
		controls.autoRotate = false;
		controls.autoRotateSpeed = 2;
		controls.enablePan = true;
	}
	
	/**
	 * 窗口变动
	 **/
	function onWindowResize() {
		camera.aspect = innerWidth / innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( innerWidth, innerHeight );
		renders();
	}

	/**
	 * @description 
	 */
	function renders() {
		renderer.clear();
		renderer.render( scene, camera );
	}
	/**
	 * 自转更新
	 **/
	function animate() {
		window.requestAnimationFrame( () => {
			if (controls) controls.update();
			renders();
			animate();
		} );
	}
  onMounted(()=>{
    initRenderer();
    initScene();
		initCamera();
		initLight();
		initControls();
    intModels();
		animate();
    window.addEventListener('resize', onWindowResize, false);
  })
</script>

<style lang="scss" scoped>

</style>