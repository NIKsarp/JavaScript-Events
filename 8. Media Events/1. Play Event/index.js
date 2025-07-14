// --------------------------------------------
// Play Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`play`, () => {
  result.innerHTML = `▶ Played`;
});

// Play Event End
// --------------------------------------------
