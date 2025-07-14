// --------------------------------------------
// Ended Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`ended`, () => {
  result.innerHTML = `Video Ended`;
});

// Ended Event End
// --------------------------------------------
