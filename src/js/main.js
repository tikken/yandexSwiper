/**
 * hasClass util
 * target, class
 * @returns {boolean}
 * _classesHandler
 * el, class, action
 */
import { _classesHandler } from "./functions/_classesHandler";

const videoSlider = function() {
  let wrap = document.querySelector(".wrap");
  let videos = wrap.querySelectorAll(".video");
  //controls
  let back = wrap.querySelector(".wrap_controls-left");
  let forward = wrap.querySelector(".wrap_controls-right");
  let btn = wrap.querySelector(".topVideo-icon");

  let state = null;

  //all vids length from 0
  let itemsLength = videos.length - 1;

  function controller() {
    _classesHandler(back, "block-btn", "add");
    recountStyles(videos);
    setEventListeners(btn, back, forward);
  }

  function recountStyles(items) {
    let scaleStep = 1;
    let leftStep = 0;
    let zIndexStep = 0;

    items.forEach(el => {
      let id = parseInt(el.getAttribute("data-id"));

      _classesHandler(el, "push-forward", "remove");

      let val = scaleStep - `.${id}`;
      let leftVal = leftStep + id * 75;
      let zVal = zIndexStep - id;

      if (id === 0) {
        _classesHandler(el, "active_slide", "add");
      } else {
        _classesHandler(el, "active_slide", "remove");
      }

      if (id === itemsLength) {
        _classesHandler(el, "push-forward", "add");
      }

      el.style.zIndex = zVal;

      TweenLite.to(el, 0.1, {
        ease: "sine.out",
        left: leftVal,
        transform: `scale(${val})`
      });
    });
  }

  function setEventListeners(btn, back, forward) {
    btn.addEventListener("click", function() {
      playPause();
    });

    back.addEventListener("click", function() {
      changeIndexes("back");
      recountStyles(videos);
    });

    forward.addEventListener("click", function() {
      _classesHandler(back, "block-btn", "remove");
      changeIndexes("forward");
      recountStyles(videos);
    });
  }

  function playPause() {
    videos.forEach(el => {
      el.pause();
    });

    let activeSlide = wrap.querySelector(".active_slide");

    if (!state) {
      activeSlide.play();
      activeSlide.controls = true;
      state = true;
      btn.style.opacity = 0;
    } else {
      activeSlide.pause();
      state = null;
      btn.style.opacity = 1;
    }
  }

  function changeIndexes(type) {
    videos.forEach(el => {
      let id = parseInt(el.getAttribute("data-id"));

      if (type === "back") {
        el.setAttribute("data-id", id + 1);

        if (id >= itemsLength) {
          el.setAttribute("data-id", 0);
        }
      } else {
        el.setAttribute("data-id", id - 1);
        if (id <= 0) {
          el.setAttribute("data-id", itemsLength);
        }
      }
    });
  }

  controller();
};

$(document).ready(function() {
  videoSlider();
});

export { videoSlider };