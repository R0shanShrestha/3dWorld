import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as lib from "lil-gui";
// Canvas
// const canvas = document.getElementById("canvas");

// width&height
const div = {
  width: window.innerWidth,
  height: window.innerHeight,
};
// Scene
const scene = new THREE.Scene();
// scene.background = new THREE.Color("white");

// Camera
const camera = new THREE.PerspectiveCamera(
  55,
  div.width / div.height,
  0.01,
  1000
);
camera.position.set(2, 3.9, 7);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// GLTF model loader
export let model = null;
const loader = new GLTFLoader();

// Set view
// const gui = new lib.GUI();
// const modlModifie = gui.addFolder('Model')
// modlModifie.add(camera.position, 'x', 0, 100).name("X")
// modlModifie.add(camera.position, 'y', 0, 100).name("Y")
// modlModifie.add(camera.position, 'z', 0, 100).name("Z")

// gui.close()

// btn to change model
let i = Math.floor(Math.random() * 2);
const footorCol = document.querySelector("footer");
if (i == 0) {
  footorCol.classList.add("lg:text-slate-100");
} else {
  footorCol.classList.add("lg:text-slate-900");
}

const modleArr = ["public/modle/magical.glb", "public/modle/barker.glb"];
loader.load(modleArr[i], (gltf) => {
  model = gltf.scene;
  // model.scale.set(0.5,0.5,0.5);
  model.scale.setScalar(0.5);

  model.position.set(0, -1.5, 0);

  scene.add(model);
});

// Test Box
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({ color: "white" });
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(div.width, div.height);
renderer.setPixelRatio(window.devicePixelRatio);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = true;
controls.enableRotate = true;
controls.dampingFactor = 0.25;

// Resize
window.addEventListener("resize", () => {
  renderer.setSize(div.width, div.height);
  camera.aspect = div.width / div.height;
  camera.updateProjectionMatrix();
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  if (model) {
    model.rotation.y += 0.001;
  }
  controls.update();
  renderer.render(scene, camera);
}
animate();
