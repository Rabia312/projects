window.onload = function() {
        try {
          TagCanvas.Start('myCanvas','tags',{
            textColour: '#F50057',
            outlineColour: '#F50057',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };