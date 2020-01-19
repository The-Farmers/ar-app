let num = 0;

function toggle() {
  num = (num + 1) % 5;
}

function getModelName() {
  switch (num) {
    case 1:
      return "#treeModel";
    case 2:
      return "#tomatoModel";
    case 3:
      return "#unicornModel";
    case 4:
    return "#lilyModel"
    case 5:
      return "#shrekModel"
    default:
      return "#flyingSaucerModel";
  }
}

function getModelScale() {
  switch (num) {
    case 1:
      return "0.1 0.1 0.1";
    case 2:
      return "0.1 0.1 0.1";
    case 3:
      return "0.4 0.4 0.4";
    case 4:
      return "1 1 1"
    case 5:
      return "1 1 1"
    default:
      return "1 1 1";
  }
}

// Component that places trees where the ground is clicked
AFRAME.registerComponent("tap-place", {
  init: function() {
    const ground = document.getElementById("ground");
    ground.addEventListener("click", event => {
      // Create new entity for the new object
      const newElement = document.createElement("a-entity");

      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point;
      newElement.setAttribute("position", touchPoint);

      const randomYRotation = Math.random() * 360;
      newElement.setAttribute("rotation", "0 " + randomYRotation + " 0");

      newElement.setAttribute("visible", "false");
      newElement.setAttribute("scale", "0.0001 0.0001 0.0001");

      newElement.setAttribute("gltf-model", getModelName());
      this.el.sceneEl.appendChild(newElement);

      newElement.addEventListener("model-loaded", () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newElement.setAttribute("visible", "true");
        newElement.setAttribute("animation", {
          property: "scale",
          to: getModelScale(),
          easing: "easeOutElastic",          dur: 800
        });
      });
    });
  }
});
