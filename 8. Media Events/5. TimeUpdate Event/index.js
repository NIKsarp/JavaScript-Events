// --------------------------------------------
// TimeUpdate Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`timeupdate`, () => {
  result.innerHTML = `⏲ Time updated ${video.currentTime}`;
});

// TimeUpdate Event End
// --------------------------------------------
