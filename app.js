document.getElementById("show-work-btn").onclick = function () {
  showWork();
};

function showWork() {
  gsap.to("#me", { scale: 0.5, duration: 0.65, ease: "elastic" });
  gsap.to(".portfolio-item", {
    scale: 1,
    duration: 0.5,
    ease: "power1",
    delay: 0.25,
    stagger: 0.2,
  });
}

document.getElementById("btn-close").onclick = function () {
  closeWork();
};

function closeWork() {
  gsap.from("#me", { scale: 1, duration: 0.35, ease: "elastic" }).reverse(0);
  gsap
    .to(".portfolio-item", {
      scale: 0,
      duration: 0.5,
      ease: "elastic",
      delay: 0.5,
      stagger: 0.2,
    })
    .reverse(0);
}
