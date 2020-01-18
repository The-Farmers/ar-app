AFRAME.registerComponent('menuButton',{
    init: function () {
      const menuBtn = document.getElementById("menu");
      let menuOpen = false;
      
      var clickHandler = function(e) {
        if (menuOpen) {
          // make options disappear
          /*
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
          } 
          */
          //change button colour
          menuBtn.style.backgroundColor = "darkgreen";
          menuBtn.style.borderColor = "green";
          console.log("menu closed!");
  
          menuOpen = true;
        }
        else {
          // make options appear
          /*
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
          */
          //change button colour
          menuBtn.style.backgroundColor = "lightgrey";
          menuBtn.style.borderColor = "grey";
          console.log("menu opened!");
  
          menuOpen = false;
        }
      }*/
      // listen for clicks
      document.getElementById("menu").addEventListener("click", clickHandler);
  
    }
  });
  