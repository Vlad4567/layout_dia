var e=1,t=document.getElementById("slider");function r(r){t.classList.remove("slider-".concat(e)),"right"===r?e++:e--,e<1&&(e=4),e>4&&(e=1),t.classList.add("slider-".concat(e))}//# sourceMappingURL=index.35317e93.js.map
document.querySelector(".slider__arrow--right").addEventListener("click",function(){return r("right")}),document.querySelector(".slider__arrow--left").addEventListener("click",function(){return r("left")});
//# sourceMappingURL=index.35317e93.js.map
