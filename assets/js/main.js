document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 123,
      "density": {
        "enable": false,
        "value_area": 881.8766334760375
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4008530152163807,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160.3412060865523,
      "color": "#d2d2d2",
      "opacity": 0.7455866083024681,
      "width": 0.9620472365193136
    },
    "move": {
      "enable": true,
      "speed": 2.21,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 10000,
        "rotateY": 10000
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 194.89853095232286,
        "line_linked": {
          "opacity": 0.6745529030453601
        }
      },
      "bubble": {
        "distance": 194.89853095232286,
        "size": 16.241544246026905,
        "duration": 1.3805312609122866,
        "opacity": 0.38979706190464564,
        "speed": 3
      },
      "repulse": {
        "distance": 47.952047952047955,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
}, !1);