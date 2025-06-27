document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const prev = carousel.querySelector(".carousel-control.prev");
    const next = carousel.querySelector(".carousel-control.next");
    const slides = Array.from(track.children);
    let index = 0;

    const update = () => {
      const width = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * width}px)`;
      prev.disabled = index === 0;
      next.disabled = index === slides.length - 1;
    };

    prev.addEventListener("click", () => {
      if (index > 0) {
        index--;
        update();
      }
    });
    next.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
        update();
      }
    });

    update();
    window.addEventListener("resize", update);
  });
});
