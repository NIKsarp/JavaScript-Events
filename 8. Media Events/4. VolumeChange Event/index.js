// --------------------------------------------
// VolumeChange Event Start

const video = document.getElementById(`video`);
const result = document.getElementById(`result`);

video.addEventListener(`volumechange`, () => {
  result.innerHTML = `🔊 Video Volume Changed`;
});

// VolumeChange Event End
// --------------------------------------------
