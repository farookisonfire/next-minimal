import {Component} from 'react';

class CanvasViz extends Component {
  constructor() {
    super();

    this.getCanvas = (canvas) => {
      
      const colorArray = ['#FB605B', '#FFFFFF', '#000000', '#B0B0B0', '#E8E8E8' ];
      const mouse = {x: undefined, y: undefined};
      const maxRadius = 50;
      const minRadius = 1;
      let circleArray = [];
      let c;

      function Circle(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.minRadius = r;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function() {
          c.beginPath();
          c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
          c.fillStyle = this.color;
          c.fill();
        };

        this.update = function() {
          //  reversing the velocity based circles position relative to canvas border
          if(this.x + this.r > innerWidth || this.x - this.r < 0) { this.dx = -this.dx; } 
          if(this.y + this.r > innerHeight || this.y - this.r < 0) { this.dy = -this.dy; }
          this.x += this.dx;
          this.y += this.dy;
      
          // changing size of circles based on proximity to mouse
          // if ((mouse.x - this.x < 50 && mouse.x - this.x > -50)
          //     && (mouse.y - this.y < 50 && mouse.y - this.y > -50)) { 
          //       if(this.r < maxRadius) {
          //         this.r += 1; 
          //       }
          //     } else if (this.r > minRadius){
          //       this.r -= 1;
          //     }
          
          this.draw();
        };
      }

      function init() {   
        circleArray = [];
        for(var i = 0 ; i< 800 ; i++) {
          var r = Math.random() * + 1;
          var x = Math.random() * (window.innerWidth - r * 2) + r;
          var y = Math.random() * (window.innerHeight - r * 2) + r;
          var dx = (Math.random() - .5) * 1; 
          var dy = (Math.random() - .5) * 1;
          circleArray.push(new Circle(x, y, dx, dy, r));
        }
      }

      function animate() {
        c.clearRect(0, 0, innerWidth, innerHeight);
        circleArray.map(circle => circle.update());
        requestAnimationFrame(animate);
      }

      this.trackMouse= function(event) {
        console.log('tracking mouse')
        mouse.x = event.x;
        mouse.y = event.y;
      };  

      this.resizeWindow = function() {
        console.log('resize window called')
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          init();
        }
      };

      if(canvas) {
        canvas.width = window.innerWidth;     // getting reference to canvas and setting width / height
        canvas.height = window.innerHeight;   // getting reference to canvas and setting width / height
        c = canvas.getContext('2d');          // getting reference to the 2d context
        
        // window.addEventListener('mousemove', this.trackMouse);
        window.addEventListener('resize', this.resizeWindow);
        
        init();
        animate();
      } 
    };
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.trackMouse);
    window.removeEventListener('resize', this.resizeWindow);
  }
  
  render() {
    return(
      <canvas ref={myCanvas => this.getCanvas(myCanvas)}/>
    );
  }
}

export default CanvasViz;
