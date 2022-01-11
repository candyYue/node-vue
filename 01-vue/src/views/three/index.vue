<template>
  <div>
    <div id="container" style="width: 512px;height: 512px"></div>
    <button @click="setCarColor">setcolor</button>
  </div>
</template>

<script setup>
import { OrbitControls } from "three/examples/js/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { WebGLRenderer, Scene, PerspectiveCamera,Color,
  PointLight,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,} from 'three';
import { onMounted, ref } from 'vue';
const loader = new GLTFLoader(); //引入模型的loader实例

let scene, renderer, camera, directionalLight, hemisphereLight, controls;

let width = 512
let heigth = 512
let loadingWidth = ref( true );
let isLoading = ref( 0 );

const setScene = () =>{
	scene = new Scene();
	renderer = new WebGLRenderer();
	renderer.setSize( width, heigth );
	document.querySelector( '#container' ).appendChild( renderer.domElement );
};

const setCamera = () =>{
	camera = new PerspectiveCamera( 60, width / heigth, 1, 1000 );
	camera.position.set( 512, 128, 0 );
};

const setLight = ()=>{
	const pointLight = new PointLight( 0xffffff, 1, 2000 ); //颜色 光照强度 最远距离 光照的衰减程度
	pointLight.position.set( 70, 112, 98 );
	const ambientLight = new AmbientLight( 0x333333 );
  scene.add(pointLight)
  scene.add(ambientLight)
  // directionalLight = new DirectionalLight(0xffffff, 0.5)
  // directionalLight.position.set(-4, 8, 4)
  // hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.4)
  // hemisphereLight.position.set(0, 8, 0)
  // scene.add(directionalLight)
  // scene.add(hemisphereLight)
};
const setCarColor = () =>{
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const rgb = 'rgb('+r+','+g+','+b+')';
  const newColor = new Color(rgb)
  scene.traverse(child=>{
    if(child.isMesh&&child.name.includes('Object_')){
      child.material.color.set(newColor)
    }
  })
}
const setControls = () =>{
	controls = new OrbitControls( camera, renderer.domElement );
	controls.maxPolarAngle = 0.9 * Math.PI / 2;
	controls.enableZoom = true;
	controls.minZoom = 0.5;
	controls.maxZoom = 2;
	// controls.addEventListener( 'change', getMap );
};

const getMap = ()=>{
	const { x, y, z } = camera.position;
	const map = { x, y, z };
	console.log( map );
};

const loadFile = ( url ) => {
	// loader.load('/model/scene.gltf', function(sence) {
  //   console.log(sence)
  //   var object = sence.gltf // 模型对象
  //   scene.add(object) // 将模型添加到场景中
  // })
	const fn = new Promise( ( resolve, reject )=>{
		loader.load( url, gltf=>{
			resolve( gltf );
		}, ( { loaded, total } )=>{
			let load = Math.abs( loaded / total * 100 );
			loadingWidth.value = load;
			if ( load >= 100 ) {
				setTimeout( ()=>{
					isLoading.value = false;
				}, 1000 );
			}
		}, err=>{
			reject( err );
		} );
	} );
	return fn;
};

const loop = ()=>{
  requestAnimationFrame(loop)
  renderer.render(scene, camera)
  controls.update()
};

const init = async () => {
	setScene();
	setCamera();
	setLight();
  setControls();
  const gltf = await loadFile('/model/scene.gltf')
	scene.add( gltf.scene );
	loop();
};

onMounted( () => {
	init();
  
} );
</script>
<style>
</style>
