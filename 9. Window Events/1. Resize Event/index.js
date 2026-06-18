// --------------------------------
// Resize Event Start

const result = document.getElementById(`result`);

window.addEventListener(`resize`, (e) => {
  result.innerText = `Window Resize: ${window.innerWidth}x${window.innerHeight}`;
});

// Resize Event End
// --------------------------------
