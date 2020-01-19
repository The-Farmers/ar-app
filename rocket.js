AFRAME.registerComponent("launch-btn", {
  init: function() {
    const btn = document.getElementById("launchBtn");
    const scene = this.el.sceneEl;
    let isPlaying = false;

    // let palette = ["#08FF00", "#F7FF00", "#FF0000", "#00FFF3", "#000FFF", "#A200FF", "#FF0093"]
    let palette = ["#FF0000", "#FFFFFF", "#0000FF"];

    var clickHandler = function(e) {
      let rockets = document.getElementsByClassName("rocket");

      if (!isPlaying) {
        btn.removeEventListener("click", clickHandler);
        btn.style.backgroundColor = "#555";
        btn.style.borderColor = "#888";

        scene.removeAttribute("tap-place");

        isPlaying = true;

        for (let i = 0; i < rockets.length; i++) {
          console.log(rockets.length);

          const rocketParticles = document.createElement("a-entity");
          let rocketPos = rockets[i].parentNode.getAttribute("position");

          let initPos = rocketPos.x + " 4 " + rocketPos.z;
          let wickEndPos =
            rocketPos.x + " " + (rocketPos.y + 5) + " " + rocketPos.z;
          let endPos =
            rocketPos.x + " " + (rocketPos.y + 18.5) + " " + rocketPos.z;
          // console.log(endPos)

          let randColor1 = palette[(Math.random() * palette.length) >> 0];
          let randColor2 = palette[(Math.random() * palette.length) >> 0];
          // console.log(randColor1 + " " + randColor2)

          //activate wick particles
          rocketParticles.setAttribute("position", initPos);
          rocketParticles.setAttribute("scale", "1 1 1");
          rocketParticles.setAttribute("particle-system", {
            color: "#F4D03F,#7D6608",
            positionSpread: "0 0.5 0",
            rotationAxis: "x",
            direction: "-1",
            particleCount: "250",
            maxParticleCount: "500",
            maxAge: "0.45",
            accelerationValue: "0, -0.01, 0",
            accelerationSpread: "0 0 0",
            velocityValue: "0 0 0"
          });

          rocketParticles.setAttribute("animation__wickup", {
            property: "position",
            to: wickEndPos,
            dur: 1500
          });

          scene.appendChild(rocketParticles);

          //time to fly

          setTimeout(function() {
            //activate propellant particles

            rocketParticles.setAttribute("particle-system", {
              color: "#00BDFF,#7C00FF",
              positionSpread: "0 0 0",
              rotationAxis: "x",
              direction: "1",
              size: "1.5",
              particleCount: "500",
              maxParticleCount: "500",
              maxAge: "0.45",
              accelerationValue: "0, -50, 0",
              accelerationSpread: "0 50 0",
              velocityValue: "0 0 0"
            });

            rockets[i].setAttribute("animation__fly", {
              property: "position",
              to: "0 1.3 0",
              dur: 3000
            });

            rocketParticles.setAttribute("animation__up", {
              property: "position",
              to: endPos,
              dur: 3000
            });

            console.log("flew");
          }, 1500);

          //time to explosion

          setTimeout(function() {
            rocketParticles.setAttribute("particle-system", {
              color: randColor1 + "," + randColor2,
              positionSpread: "0 0.5 0",
              rotationAxis: "x",
              duration: "1",
              size: "2.5",
              direction: "-1",
              rotationAngle: "0",
              rotationAngleSpread: "3.14",
              particleCount: "250",
              maxParticleCount: "500",
              maxAge: "0.6",
              accelerationValue: "0, -1, 0",
              accelerationSpread: "0 -1 0",
              velocityValue: "0 0 0"
            });

            rocketParticles.setAttribute("animation__blast", {
              property: "scale",
              to: "3 3 3",
              easing: "easeInOutQuad",
              dur: 500
            });

            rockets[i].setAttribute("animation__zipout", {
              property: "scale",
              to: "0.001 1 0.001",
              dur: 100
            });

            console.log("blown up");
          }, 4500);

          setTimeout(function() {
            let allRockets = document.getElementsByClassName("rocket");
            for (let i = 0; i < allRockets.length; i++) {
              allRockets[i].setAttribute("visible", "false");
              allRockets[i].classList.remove("rocket");
            }
          }, 5000);

          setTimeout(function() {
            scene.setAttribute("tap-place");

            isPlaying = false;
            if (rockets.length > 0) {
              add();
            }
            rocketParticles.parentNode.removeChild(rocketParticles);
          }, 6000);
        }
      }
      //reset scene

      console.log("total rockets: " + rockets.length);
    };

    function add() {
      btn.addEventListener("click", clickHandler);
      btn.style.backgroundColor = "darkred";
      btn.style.borderColor = "red";
      console.log("btn ready!");
    }

    scene.addEventListener("btnready", event => {
      add();
    });
  }
});
/*
AFRAME.registerComponent("tap-place", {
  schema: {
    event: { type: "string", default: "" }
  },
  init: function() {
    const ground = document.getElementById("ground");
    const btn = document.getElementById("launchBtn");
    const el = this.el;

    this.event = function(e) {
      el.emit("btnready", "detail", true);

      // Create new entity for the new object
      const newPole = document.createElement("a-entity");
      const newRocket = document.createElement("a-entity");

      newRocket.classList.add("rocket");
      newPole.classList.add("pole");

      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point;
      newPole.setAttribute("position", touchPoint);

      const randomYRotation = Math.random() * 360;
      newPole.setAttribute("rotation", "0 " + randomYRotation + " 0");

      newPole.setAttribute("visible", "false");

      newPole.setAttribute("gltf-model", "#poleModel");
      newRocket.setAttribute("gltf-model", "#rocketModel");

      newPole.appendChild(newRocket);
      el.sceneEl.appendChild(newPole);

      newPole.addEventListener("model-loaded", () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newPole.setAttribute("visible", "true");
        newPole.setAttribute("animation", {
          property: "scale",
          to: "10 10 10",
          easing: "easeOutElastic",
          dur: 800
        });
      });
    };

    ground.addEventListener("click", this.event);
  },

  remove: function() {
    const ground = document.getElementById("ground");
    // ground.removeEventListener('click', this.event)
  }
});
*/
