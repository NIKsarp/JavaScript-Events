// --------------------------------
// Seeking Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`seeking`, () => {
  result.innerHTML = `⏲ Seeking ${video.currentTime}`;
});

// Seeking Event End
// --------------------------------
