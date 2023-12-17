// gsap.registerPlugin(ScrollTrigger);

// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: document.querySelector(".container"),
//   smooth: true
// });

// scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".container", {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }
// });

// ScrollTrigger.addEventListener("refresh", () => scroller.update());

// ScrollTrigger.refresh();

// /* COLOR CHANGER */
// window.addEventListener("load", function () {
//   const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
//   scrollColorElems.forEach((colorSection, i) => {
//     const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
//     const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

//     ScrollTrigger.create({
//       trigger: colorSection,
//       scroller: ".container",
//       start: "top 50%",
//       onEnter: () =>
//         gsap.to("body", {
//           backgroundColor: colorSection.dataset.bgcolor,
//           color: colorSection.dataset.textcolor,
//           overwrite: "auto"
//         }),
//       onLeaveBack: () =>
//         gsap.to("body", {
//           backgroundColor: prevBg,
//           color: prevText,
//           overwrite: "auto"
//         })
//     });
//   });
// });


var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#left').followTo(250);

var windw = this;

$.fn.followTo = function (startElement, endElement) {
  var $this = this,
    $window = $(windw),
    $startElem = $(startElement),
    $endElem = $(endElement);

  $window.scroll(function (e) {
    var startPos = $startElem.offset().top,
      endPos = $endElem.offset().top - $this.height(),
      windowTop = $window.scrollTop();
    const isMobile = navigator.userAgentData.mobile; //resolves true/false

    if (windowTop > startPos && windowTop < endPos) {
      // Between the start and end elements
      console.log("in");
      $this.css({
        position: "fixed",
        top:  0,
      });
    } else if (windowTop >= endPos) {
      // Past the end element
      $this.css({
        position: "absolute",
        top: endPos,
      });
    } else {
      // Before the start element
      $this.css({
        position: "absolute",
        top: startPos,
      });
    }
  });
};

$("#left").followTo("#right", "#last");


document.addEventListener('DOMContentLoaded', (event) => {
    const sections =document.querySelectorAll("[data-bgcolor]");
  
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // Section is visible
          document.body.style.backgroundColor = section.dataset.bgcolor;
          document.body.style.color = section.dataset.textcolor;
        }
      });
    });
  });
  

  document.getElementsByClassName('main')[0].style.height = window.innerHeight+'px';