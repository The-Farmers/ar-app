// Component that places trees where the ground is clicked
AFRAME.registerComponent("tap-place", {
  init: function() {
    const ground = document.getElementById("ground");
    ground.addEventListener("click", event => {
      // Create new entity for the new object
      const newElement = document.createElement("a-entity");

      this.el.emit("btnready", "detail", true);
      newElement.classList.add("rocket");

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
          to: getModalScale(),
          easing: "easeOutElastic",
          dur: 800
        });
      });
    });
  }
});
