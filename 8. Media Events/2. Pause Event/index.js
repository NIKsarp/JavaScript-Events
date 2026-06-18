// --------------------------------
// Pause Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`pause`, () => {
  result.innerHTML = `⏸ Paused`;
});

// Pause Event End
// --------------------------------
