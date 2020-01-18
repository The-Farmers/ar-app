import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {
        // <!-- We must add the tap-place component to the scene so it has an effect -->
      }
      <a-scene
        xrweb
        tap-place
        xrextras-almost-there
        xrextras-loading
        xrextras-runtime-error
      >
        {
          // <!-- We can define assets here to be loaded when A-Frame initializes -->
        }
        <a-assets>
          {
            // <!-- Credit to Poly by Google for the model: https://poly.google.com/view/6pwiq7hSrHr -->
          }
          <a-asset-item
            id="treeModel"
            src="./Model/chicken.gltf"
          ></a-asset-item>
        </a-assets>

        {
          //<!-- The raycaster will emit mouse events on scene objects specified with the cantap class -->
        }
        <a-camera
          position="0 8 0"
          raycaster="objects: .cantap"
          cursor="
          fuse: false;
          rayOrigin: mouse;"
        ></a-camera>

        <a-entity
          light="type: directional;
               intensity: 0.8;"
          position="1 4.3 2.5"
        ></a-entity>

        <a-light type="ambient" intensity="1"></a-light>

        {
          //<!-- Adding the cantap class allows the ground to be clicked -->
        }
        <a-entity
          id="ground"
          class="cantap"
          geometry="primitive: box"
          material="color: #ffffff; transparent: true; opacity: 0.0"
          scale="1000 2 1000"
          position="0 -1 0"
        ></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
