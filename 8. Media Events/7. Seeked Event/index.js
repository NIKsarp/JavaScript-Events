// --------------------------------
// Seeked Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`seeked`, () => {
  result.innerHTML = `⏲ Seeked Changes: ${video.currentTime}`;
});

// Seeked Event End
// --------------------------------
