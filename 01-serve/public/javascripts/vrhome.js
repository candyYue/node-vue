window.onload = function(){
  creatWorld()
}
var renderer
var width = document.body.clientWidth
var height = document.body.clientHeight
var camera
var origPoint = new THREE.Vector3(0,0,0) //原点
var pointLight //点光源
var ambientLight //环境光
var box1
var box2
var scene
var hotPoints=[
  {
      position:{
          x:0,
          y:0,
          z:-2
      },
      detail:{
          "title":"信息点1"
      }
  },
  {
      position:{
          x:-0.2,
          y:-0.05,
          z:2
      },
      detail:{
          "title":"信息点2"
      }
  }
];
function creatWorld(){
  camera = new THREE.PerspectiveCamera(90, width / height, 1, 1000);
  // camera.position.set(0,0,1)
  camera.position.set(200,400,600)
  camera.up.set(0,1,0)
  camera.lookAt(origPoint)
  renderer = new THREE.WebGLRenderer({
    antialias: true  //开启抗锯齿
  })
  renderer.setSize(width, height);
  document.querySelector('#container').appendChild(renderer.domElement)
  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  initLight()
  initBox() //立方体
  // initSphere() //球体
  initScene()
  initPoint()
  render()
}

function initLight(){
  pointLight = new THREE.PointLight(0xffffff,1,2000) //颜色 光照强度 最远距离 光照的衰减程度
  pointLight.position.set(70,112,98)
  ambientLight = new THREE.AmbientLight(0x333333)
}
function initBox(){
  var materials = []
  var left = new THREE.TextureLoader().load('/public/images/scene_left.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: left}))
  var right = new THREE.TextureLoader().load('/public/images/scene_right.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: right}))
  var top = new THREE.TextureLoader().load('/public/images/scene_top.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: top}))
  var bottom = new THREE.TextureLoader().load('/public/images/scene_bottom.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: bottom}))
  var front = new THREE.TextureLoader().load('/public/images/scene_front.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: front}))
  var back = new THREE.TextureLoader().load('/public/images/scene_back.jpeg')
  materials.push( new THREE.MeshBasicMaterial({map: back}))

  box1 = new THREE.Mesh(new THREE.BoxGeometry(100,100,100),materials)
  box1.position.set(0,0,0)
  box2 = new THREE.Mesh(new THREE.BoxGeometry(100,100,100),materials)
  box2.translateZ(-100);//沿着x轴正方向平移距离50
  box1.geometry.scale(1,1,-1) 
  box2.geometry.scale(1,1,-1) 
}
function initSphere(){
  const sphere = new THREE.SphereGeometry(1,50,50)
  sphere.scale(1,1,-1)
  const texure = new THREE.TextureLoader().load('/public/images/scene.jpeg')
  const materials = new THREE.MeshBasicMaterial({map: texure})
  box = new THREE.Mesh(sphere,materials)
}
function initScene(){
  scene = new THREE.Scene()
  scene.add(pointLight)
  scene.add(ambientLight)
  scene.add(box1)
  scene.add(box2)
}

function render(){
  renderer.clear()
  renderer.render(scene,camera)
  requestAnimationFrame(render)
}

function initPoint(){
  var pointTexture = new THREE.TextureLoader().load('/public/images/hot.png');
  var material = new THREE.SpriteMaterial( { map: pointTexture} );

  var poiObjects = [];
  for(var i=0;i<hotPoints.length;i++){
      var sprite = new THREE.Sprite( material );
      sprite.scale.set( 0.1, 0.1, 0.1 );
      sprite.position.set( hotPoints[i].position.x, hotPoints[i].position.y, hotPoints[i].position.z );
      
      scene.add( sprite );

      sprite.detail = hotPoints[i].detail;
      poiObjects.push(sprite);
  }
  document.querySelector("#container").addEventListener("click",function(event){
    event.preventDefault();
    // 鼠标点击位置的屏幕坐标转成threejs中的标准坐标
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    mouse.x = ( event.clientX / document.body.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / document.body.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera ); //鼠标的二维坐标,射线起点处的相机

    var intersects = raycaster.intersectObjects( poiObjects ,true); //用来检测和射线相交的物体, 是否检查后代 默认false
    if(intersects.length>0){
        alert("点击了热点"+intersects[0].object.detail.title);
    }
  });
}