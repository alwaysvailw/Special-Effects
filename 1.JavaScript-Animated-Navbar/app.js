// [Intersection Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
// [IntersectionObserver.IntersectionObserver()](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver)
// [IntersectionObserver.observe()](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/observe)

const sections = document.querySelectorAll('section');
const bubble = document.getElementById('bubble');
const gradients = [
  "linear-gradient(to right, #0072ff, #00c6ff)",
  "linear-gradient(to right, #FF6B6B, #556270)",
  "linear-gradient(to right, #061161, #780206)"
];
const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
  console.log(entries)
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    console.log(coords)
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if(entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  })
}

sections.forEach(section => {
  observer.observe(section);
})