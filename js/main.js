const chars = "abcdefghijklmnopqrstuvwxyz________";
const scrambleElements = document.querySelectorAll('.scramble');

scrambleElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    const originalText = el.dataset.text;
    let iteration = 0;

    // Clear any previous interval if quickly hovered again
    if (el.scrambleInterval) {
      clearInterval(el.scrambleInterval);
    }

    el.scrambleInterval = setInterval(() => {
      el.innerText = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(el.scrambleInterval);
        el.scrambleInterval = null;
      }

      iteration += 1 / 2; // Adjust speed here
    }, 25);
  });

  // Reset to original text when mouse leaves
  el.addEventListener('mouseleave', () => {
    el.innerText = el.dataset.text;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x2563eb,
    shininess: 50.00,
    waveHeight: 20.00,
    waveSpeed: 0.4,
    zoom: 0.85
  });
});

