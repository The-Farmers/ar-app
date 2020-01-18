AFRAME.registerComponent("shadow-material", {
  init: function() {
    this.material = new THREE.ShadowMaterial();
    this.el.getOrCreateObject3D("mesh").material = this.material;
    this.material.opacity = 0.4;
  }
});

AFRAME.registerComponent("physics-image-target", {
  schema: {
    name: { type: "string" }
  },
  init: function() {
    const object3D = this.el.object3D;
    const name = this.data.name;
    const scene = this.el.sceneEl;
    const portalPos = this.el;
    var treeShook = false;
    object3D.visible = false;

    let attachment = scene.querySelector("#attachment");
    let text = document.querySelector("#shake-tree");
    let palm = scene.querySelector("#palm");

    const imageFound = e => {
      showImage(e);

      palm.setAttribute("animation__riseIn", {
        property: "scale",
        dur: 1500,
        from: "0.001 0.001 0.001",
        to: "0.5 0.5 0.5",
        easing: "easeInOutQuad"
      });

      if (!treeShook) {
        text.classList.remove("fade-out");
        text.classList.add("fade-in");
        text.style.display = "block";
      }

      console.log("portal has been found!");
    };

    const showImage = ({ detail }) => {
      if (name != detail.name) {
        return;
      }
      object3D.position.copy(detail.position);
      object3D.quaternion.copy(detail.rotation);
      object3D.scale.set(detail.scale, detail.scale, detail.scale);
      object3D.visible = true;
    };

    const imageLost = e => {
      // object3D.visible = false
    };

    scene.addEventListener("xrimagefound", imageFound);
    scene.addEventListener("xrimageupdated", showImage);
    scene.addEventListener("xrimagelost", imageLost);

    const tapDrop = e => {
      treeShook = true;
      text.classList.remove("fade-in");
      text.classList.add("fade-out");

      palm.setAttribute("animation-mixer", {
        clip: "shake",
        loop: "repeat",
        repetitions: "2",
        crossFadeDuration: 0.4
      });

      setTimeout(function() {
        palm.removeAttribute("animation-mixer");
        text.style.display = "none";
      }, 1000);

      // Create element to be thrown, setting position, scale, and model
      let obj = document.createElement("a-entity");

      obj.setAttribute("gltf-model", "#coconut");
      obj.setAttribute("scale", "2 2 2");
      obj.setAttribute("shadow", "");

      var absPos = new THREE.Vector3().copy(
        attachment.object3D.getWorldPosition()
      );

      obj.object3D.position.set(absPos.x, absPos.y, absPos.z);

      obj.setAttribute("dynamic-body", {
        shape: "sphere",
        mass: 2,
        linearDamping: 0.5,
        angularDamping: 0.5
      });

      obj.setAttribute("visible", true);
      scene.appendChild(obj);
    };

    palm.addEventListener("click", tapDrop);
  }
});
